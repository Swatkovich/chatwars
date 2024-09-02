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
})

export const Title = styled('div')({
    fontSize: '2vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10px',
})

export const UserElement = styled('div')({
    display: 'flex',
    flexFlow: 'column',
    marginBottom: '20px',
    alignItems: 'center',
})

export const UserName = styled('div')({
    fontSize: '1vw',
    fontWeight: 'bold',
})

export const UserTime = styled('div')({
    fontSize: '1vw',
})
