import result0 from '../resourcesData/result0.json'
import result1 from '../resourcesData/result1.json'
import result2 from '../resourcesData/result2.json'
import result3 from '../resourcesData/result3.json'
import result4 from '../resourcesData/result4.json'
import result5 from '../resourcesData/result5.json'
import result6 from '../resourcesData/result6.json'
import result7 from '../resourcesData/result7.json'
import { yellowUsersData } from '../store/data/UsersData'

const resources: Record<string, any> = {}

const results: Array<any> = [result0, result1, result2, result3, result4, result5, result6, result7]

let i = 0

let dataBase = {}

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

for (let user of yellowUsersData) {
    resources[user.nickNames[0]] = results[i]
    i++
}
export function main() {
    for (const key in resources) {
        const data = resources[key]
        const messages = data.messages
        const messagesText = extractTextFromMessages(messages)
        const explorationsComplete = findExplorationCompleteMessages(messagesText)
        const parsedExplorations = parseExplorations(explorationsComplete)
        for (let exploration of parsedExplorations) {
            saveExploration(exploration)
        }
        calculateTotalNumberOfQuests(dataBase)
    }
    return dataBase
}

function extractTextFromMessages(messages: any) {
    const messagesText = []
    for (let message of messages) {
        messagesText.push(message.text)
    }
    return messagesText
}

function findExplorationCompleteMessages(messagesText: any) {
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
            //@ts-ignore
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
    regionName: string
    questsNumber: number
    successQuestsNumber: number
    expirience: number
    gold: number
    resources: Map<string, number>
    constructor() {
        this.regionName = ''
        this.questsNumber = 1
        this.successQuestsNumber = 0
        this.expirience = 0
        this.gold = 0
        this.resources = new Map()
    }
}

function regexResource(resourceText: string) {
    const regex = /^(.+?) \((\d+)\)$/
    const match = resourceText.match(regex)

    if (match) {
        const resourceName = match[1]
        const resourceQuantity = parseInt(match[2], 10)
        return [resourceName, resourceQuantity]
    }
}

function parseExplorations(explorationsComplete: any) {
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
                //@ts-ignore
                if (!forbidenResources.includes(resource[0])) {
                    //@ts-ignore
                    parsedExploration.resources.set(resource[0], resource[1])
                }
                j += 2
            }
        }
        parsedExplorations.push(parsedExploration)
    }
    return parsedExplorations
}

async function saveExploration(explorationData: any) {
    //@ts-ignore
    const dataBaseRegion = dataBase[explorationData.regionName]
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
        //@ts-ignore
        dataBase[explorationData.regionName] = updatedDataBaseRegion
    } else {
        //@ts-ignore
        dataBase[explorationData.regionName] = explorationData
    }
    dataBase = await sortDataBase(dataBase)
    // return await new Promise((resolve, reject) => {
    //     fs.writeFile(dataBasePath, JSON.stringify(sortedDataBase, null, 2), 'utf8', (err) => {
    //         if (err) {
    //             reject(`Error writing file ${err}`)
    //         } else {
    //             resolve(`Data successfully written to file path: ${dataBasePath}`)
    //         }
    //     })
    // })
}

function calculateTotalNumberOfQuests(dataBase: any) {
    let sum = 0
    for (const key in dataBase) {
        let regionNumber = dataBase[key].questsNumber
        sum += regionNumber
    }
    console.log(sum)
}

function sortDataBase(dataBase: any) {
    const entries = Object.entries(dataBase)
    //@ts-ignore
    entries.sort((a, b) => b[1].questsNumber - a[1].questsNumber)
    const sortedDataBase = Object.fromEntries(entries)
    return sortedDataBase
}

function sortResources(resources: any) {
    const entries = Object.entries(resources)
    //@ts-ignore
    entries.sort((a, b) => b[1] - a[1])
    const sortedResources = Object.fromEntries(entries)
    return sortedResources
}
