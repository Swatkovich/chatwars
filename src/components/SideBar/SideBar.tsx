import React, { useContext } from 'react'
import { Title, UserElement, UserName, UserTime, Wrapper } from './SideBar.styles'
import { observer } from 'mobx-react-lite'
import GameStoreContext from '../../store/GameStore'
import { User } from '../../interface/game'

const SideBar = observer(() => {
    const gameStore = useContext(GameStoreContext)
    const { yellowUsers } = gameStore
    const flag = '\uD83C\uDDFB\uD83C\uDDE6'

    return (
        <Wrapper>
            <Title>ДЕЯТЕЛИ НАУКИ:</Title>
            {yellowUsers.map((user: User) => (
                <UserElement key={user.nickNames[0]}>
                    <UserName>
                        {flag}
                        {user.nickNames[0]}
                    </UserName>
                    <UserTime>Данные за:</UserTime>
                    <UserTime>{`${user.time[0]} - ${user.time[1]}`}</UserTime>
                </UserElement>
            ))}
        </Wrapper>
    )
})

export default SideBar
