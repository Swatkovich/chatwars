import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import GameStoreContext from '../../store/GameStore'
import { MapGrid } from './GameMap.styles'
import { Region } from '../../interface/game'
import MapGridElement from '../GridElement/MapGridElement'

const GameMap = observer(() => {
    const gameStore = useContext(GameStoreContext)
    const { gameRegions } = gameStore

    return (
        <MapGrid>
            {gameRegions.map((regionsRow: Region[]) =>
                regionsRow.map((region: Region) => (
                    <MapGridElement
                        key={region.name}
                        name={region.name}
                        icon={region.icon}
                        color={region.color}
                        resource={region.resource}
                    ></MapGridElement>
                ))
            )}
        </MapGrid>
    )
})

export default GameMap
