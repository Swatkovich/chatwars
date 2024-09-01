import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import GameMap from './components/GameMap/GameMap'
import SideBar from './components/SideBar/SideBar'

const App: FC = observer(() => (
    <>
        <SideBar></SideBar>
        <GameMap />
    </>
))

export default App
