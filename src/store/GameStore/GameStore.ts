import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'
import { Region, RegionData } from '../../interface/game'
import { GameMapData } from '../data/MappedData'
import data from '../../resourcesData/dataBase.json'

class GameStore {
    gameRegions: Region[][] = GameMapData

    regionsData: { [key: string]: RegionData } = data

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
}

const GameStoreContext = createContext(new GameStore())

export default GameStoreContext
