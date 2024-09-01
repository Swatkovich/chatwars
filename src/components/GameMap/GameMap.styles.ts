import styled from '@emotion/styled'

export const MapGrid = styled('div')({
    display: 'grid',
    margin: 'auto',
    gridTemplateColumns: 'repeat(13, 1fr)',
    gridTemplateRows: 'repeat(13, 1fr)',
    width: '50vw',
    height: '50vw',
    marginTop: '1vw',
})
