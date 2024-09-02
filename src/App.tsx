import { observer } from 'mobx-react-lite'
import React, { FC, useContext, useEffect } from 'react'
import GameMap from './components/GameMap/GameMap'
import SideBar from './components/SideBar/SideBar'
import { AppWrapper } from './App.styles'
import InfoBar from './components/InfoBar/InfoBar'
import { main } from './scripts/calculateData'
import GameStoreContext from './store/GameStore/GameStore'

const App: FC = observer(() => {
    const gameStore = useContext(GameStoreContext)

    const { setRegionsData } = gameStore

    useEffect(() => {
        const data = main()
        setRegionsData(data)
    }, [setRegionsData])

    return (
        <AppWrapper>
            <SideBar />
            <GameMap />
            <InfoBar />
        </AppWrapper>
    )
})

export default App
