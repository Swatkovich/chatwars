import styled from '@emotion/styled'

export const Wrapper = styled('div')({
    display: 'flex',
    height: '100%',
    width: '25vw',
    flexFlow: 'column',
    paddingTop: '2vw',
    alignItems: 'center',
    fontFamily:
        "'Inter', 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    paddingBottom: '3vw',
})

export const Title = styled('div')({
    fontSize: '2vw',
    marginBottom: '10px',
})

export const InfoElement = styled('div')({
    fontSize: '1vw',
    marginBottom: '10px',
})
