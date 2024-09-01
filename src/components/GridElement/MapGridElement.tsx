import { observer } from 'mobx-react-lite'
import React from 'react'
import { ElementName, GridElement, ResourceIcon } from './MapGridElement.styles'
import { Region } from '../../interface/game'

const MapGridElement: React.FC<Region> = observer((props) => {
    const { name, icon, resource, color } = props
    return (
        <GridElement style={{ backgroundColor: `${color}` }}>
            <ResourceIcon>{resource}</ResourceIcon>
            <ElementName>{name}</ElementName>
            {icon}
        </GridElement>
    )
})

export default MapGridElement
