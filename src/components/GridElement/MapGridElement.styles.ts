import styled from '@emotion/styled'

export const GridElement = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid white',
    aspectRatio: 1 / 1,
    fontSize: '1.25vw',
    position: 'relative',
    cursor: 'pointer',
})

export const ResourceIcon = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: '0.75vw',
})

export const ElementName = styled('div')({
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: '0.75vw',
})

export const QuestsNumber = styled('div')({
    position: 'absolute',
    bottom: 0,
    fontSize: '0.75vw',
})
