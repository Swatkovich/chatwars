import { makeAutoObservable, configure } from 'mobx'
import { createContext } from 'react'
import { Region, RegionData, User } from '../../interface/game'
import { GameMapData } from '../data/MappedData'
// import data from '../../resourcesData/dataBase.json'
import { yellowUsersData } from '../data/UsersData'

configure({
    enforceActions: 'never',
})

class GameStore {
    gameRegions: Region[][] = GameMapData

    // regionsData: Record<string, RegionData> = data
    regionsData: Record<string, RegionData> = {}

    yellowUsers: User[] = yellowUsersData

    selectedRegion: string | undefined = undefined

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    get regionData(): RegionData | null {
        if (this.selectedRegion) {
            return this.regionsData[this.selectedRegion]
        }
        return null
    }

    setSelectRegion(regionName: string) {
        this.selectedRegion = regionName
    }

    getQuestsNumber(regionName: string) {
        return this.regionsData[regionName] ? this.regionsData[regionName].questsNumber : 0
    }

    setRegionsData(data: Record<string, RegionData>) {
        this.regionsData = data
    }
}

const GameStoreContext = createContext(new GameStore())

export default GameStoreContext
