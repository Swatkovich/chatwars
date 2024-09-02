const fs = require('fs')
const path = require('path')

const resources = {}

/////////////////////////////////////////////////////////////////////////////

const forbidenResources = [
    'Silver helmet',
    'Silver cuirass',
    'Silver gaiters',
    'Silver boots',
    'Steel helmet',
    'Steel gauntlets',
    'Steel boots',
    'Chain mail',
    'Chain gaiters',
    'Leather hood',
    'Leather shirt',
    'Leather pants',
    'Leather shoes',
]

//Swatkovich HUY 29.08
resources['Swatkovich HUY'] = path.join(__dirname, '../resourcesData/result0.json')
// resources['Swatkovich HUY'] = result0
//Samael HUY 29.08
resources['Samael HUY'] = path.join(__dirname, '../resourcesData/result1.json')
//George`s HUY 29.08
resources['George228,George,George HUY,George`s HUY'] = path.join(__dirname, '../resourcesData/result2.json')
//Gordo HUY 29.08 29.08
resources['Gordo HUY,Povar51345e,povar'] = path.join(__dirname, '../resourcesData/result3.json')
//Evendream HUY 29.08
resources['Evendream HUY,Evendream'] = path.join(__dirname, '../resourcesData/result4.json')
//dextrose 29.08
resources['dextrose'] = path.join(__dirname, '../resourcesData/result5.json')
//VAGODROCHER HUY 29.08
resources['VAGODROCHER HUY'] = path.join(__dirname, '../resourcesData/result6.json')
//BOLOTOSOSAT 29.08
resources['BOLOTOSOSAT'] = path.join(__dirname, '../resourcesData/result7.json')

/////////////////////////////////////////////////////////////////////////////

const dataBasePath = path.join(__dirname, '../resourcesData/dataBase.json')

// let jsonData

async function main() {
    for (const key in resources) {
        let resourcefilePath = resources[key]
        const data = await readJsonFile(resourcefilePath)
        const messages = data.messages
        const messagesText = extractTextFromMessages(messages)
        const explorationsComplete = findExplorationCompleteMessages(messagesText)
        const parsedExplorations = parseExplorations(explorationsComplete)
        for (let exploration of parsedExplorations) {
            await saveExploration(exploration)
        }
        const dataBase = await loadDataBase()
        console.log(`${key}:`)
        calculateTotalNumberOfQuests(dataBase)
    }
}

main()

function readJsonFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject('Error reading the JSON file:', err)
            }
            try {
                let jsonData = JSON.parse(data)
                resolve(jsonData)
            } catch (parseError) {
                reject('Error parsing JSON:', parseError)
            }
        })
    })
}

async function saveExploration(explorationData) {
    const dataBase = await loadDataBase()
    const dataBaseRegion = dataBase[explorationData.regionName]
    if (explorationData.regionName === 'Y 6#6') {
        console.log('here2')
        console.log(explorationData)
        console.log(dataBaseRegion)
    }
    if (dataBaseRegion) {
        const updatedDataBaseRegion = dataBaseRegion
        updatedDataBaseRegion.questsNumber += explorationData.questsNumber
        updatedDataBaseRegion.successQuestsNumber += explorationData.successQuestsNumber
        updatedDataBaseRegion.expirience += explorationData.expirience
        updatedDataBaseRegion.gold += explorationData.gold
        if (explorationData.resources.size > 0) {
            for (const [key, value] of explorationData.resources) {
                if (dataBaseRegion.resources[key]) {
                    updatedDataBaseRegion.resources[key] += value
                } else {
                    updatedDataBaseRegion.resources[key] = value
                }
            }
            updatedDataBaseRegion.resources = sortResources(updatedDataBaseRegion.resources)
        }
        dataBase[explorationData.regionName] = updatedDataBaseRegion
    } else {
        if (explorationData.regionName === 'Y 6#6') {
            console.log('here3')
        }
        dataBase[explorationData.regionName] = explorationData
        if (explorationData.regionName === 'Y 6#6') {
            console.log('here4')
            console.log(dataBase['Y 6#6'])
        }
    }
    const sortedDataBase = await sortDataBase(dataBase)
    if (explorationData.regionName === 'Y 6#6') {
        console.log('here5')
        console.log(sortedDataBase['Y 6#6'])
    }
    return await new Promise((resolve, reject) => {
        fs.writeFile(dataBasePath, JSON.stringify(sortedDataBase, null, 2), 'utf8', (err) => {
            if (err) {
                reject(`Error writing file ${err}`)
            } else {
                resolve(`Data successfully written to file path: ${dataBasePath}`)
            }
        })
    })
}

function loadDataBase() {
    return new Promise((resolve, reject) => {
        fs.readFile(dataBasePath, 'utf8', (err, data) => {
            if (err) {
                reject('Error reading the JSON file:', err)
            }
            try {
                let jsonData = JSON.parse(data)
                resolve(jsonData)
            } catch (parseError) {
                reject('Error parsin JSON:', parseError)
            }
        })
    })
}

function extractTextFromMessages(messages) {
    const messagesText = []
    for (let message of messages) {
        messagesText.push(message.text)
    }
    return messagesText
}

function findExplorationCompleteMessages(messagesText) {
    const explorationsComplete = []
    for (let i = 0; i < messagesText.length; i++) {
        let message = messagesText[i]
        let regionName = ''
        let j = 1
        if (
            Array.isArray(message) &&
            typeof message[0] === 'string' &&
            (message[0].includes('Exploration Complete!') || message[0].includes('Исследование завершено!'))
        ) {
            while (!regionName) {
                let previousMessage = messagesText[i - j]
                if (previousMessage === undefined) {
                    break
                }
                if (
                    typeof previousMessage[0] === 'string' &&
                    (previousMessage[0].includes('You have reached your destination') || previousMessage[0].includes('Ты прибыл в пункт назначения.'))
                ) {
                    regionName = previousMessage[1].text
                } else {
                    j++
                }
            }
            message.region = regionName
            if (regionName) {
                explorationsComplete.push(message)
            }
            j = 1
            regionName = ''
        }
    }
    return explorationsComplete
}

class Exploration {
    constructor() {
        this.regionName = ''
        this.questsNumber = 1
        this.successQuestsNumber = 0
        this.expirience = 0
        this.gold = 0
        this.resources = {}
    }
}

function parseExplorations(explorationsComplete) {
    const parsedExplorations = []
    for (let exploration of explorationsComplete) {
        const parsedExploration = new Exploration()
        parsedExploration.regionName = exploration.region
        if (
            exploration[2] &&
            typeof exploration[2] === 'string' &&
            (exploration[2].includes('Nothing interesting happened') || exploration[2].includes('Ничего интересного не произошло'))
        ) {
            parsedExplorations.push(parsedExploration)
            continue
        }
        if (exploration[0].includes('✔️')) {
            parsedExploration.successQuestsNumber = exploration[0].split('✔️').length - 1
            parsedExploration.questsNumber = parsedExploration.successQuestsNumber
        }
        if (!exploration[0].includes('✔️') && (exploration[3] || exploration[5])) {
            parsedExploration.successQuestsNumber = 1
        }
        if (exploration[0].includes('▫️')) {
            let failQuestsNumber = exploration[0].split('▫️').length - 1
            parsedExploration.questsNumber = parsedExploration.questsNumber + failQuestsNumber
        }
        if (exploration[3]) {
            parsedExploration.expirience = parseInt(exploration[3].text)
        }
        if (exploration[5]) {
            parsedExploration.gold = parseInt(exploration[5].text)
        }
        if (exploration[6].includes('Earned') || exploration[6].includes('Ты получил')) {
            let j = 7
            while (exploration[j] && exploration[j].text) {
                let resource = regexResource(exploration[j].text)

                if (!forbidenResources.includes(resource[0])) {
                    parsedExploration.resources[resource[0]] = resource[1]
                }
                j += 2
            }
        }
        parsedExplorations.push(parsedExploration)
    }
    return parsedExplorations
}

function regexResource(resourceText) {
    const regex = /^(.+?) \((\d+)\)$/
    const match = resourceText.match(regex)

    if (match) {
        const resourceName = match[1]
        const resourceQuantity = parseInt(match[2], 10)
        return [resourceName, resourceQuantity]
    }
}

function calculateTotalNumberOfQuests(dataBase) {
    let sum = 0
    for (const key in dataBase) {
        let regionNumber = dataBase[key].questsNumber
        sum += regionNumber
    }
    console.log(sum)
}

function sortDataBase(dataBase) {
    const entries = Object.entries(dataBase)
    entries.sort((a, b) => b[1].questsNumber - a[1].questsNumber)
    const sortedDataBase = Object.fromEntries(entries)
    return sortedDataBase
}

function sortResources(resources) {
    const entries = Object.entries(resources)
    entries.sort((a, b) => b[1] - a[1])
    const sortedResources = Object.fromEntries(entries)
    return sortedResources
}
