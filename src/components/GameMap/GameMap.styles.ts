import styled from '@emotion/styled'

export const MapGrid = styled('div')({
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(13, 1fr)',
    gridTemplateRows: 'repeat(13, 1fr)',
    width: '50vw',
    height: '50vw',
    marginTop: '1vw',
    fontWeight: '500',
    fontFamily:
        "'Inter', 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
})
