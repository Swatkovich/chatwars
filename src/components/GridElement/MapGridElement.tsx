import { observer } from 'mobx-react-lite'
import React, { useCallback, useContext } from 'react'
import { ElementName, GridElement, QuestsNumber, ResourceIcon } from './MapGridElement.styles'
import { Region } from '../../interface/game'
import GameStoreContext from '../../store/GameStore'

const MapGridElement: React.FC<Region> = observer((props) => {
    const { name, icon, resource, color } = props

    const gameStore = useContext(GameStoreContext)
    const { setSelectRegion, getQuestsNumber } = gameStore

    const selectRegion = useCallback(
        (name: string) => {
            setSelectRegion(name)
        },
        [setSelectRegion]
    )

    return (
        <GridElement style={{ backgroundColor: `${color}` }} onClick={() => selectRegion(name)}>
            <ResourceIcon>{resource}</ResourceIcon>
            <ElementName>{name}</ElementName>
            {icon}
            <QuestsNumber>{`🧭 ${getQuestsNumber(name)}`}</QuestsNumber>
        </GridElement>
    )
})

export default MapGridElement
