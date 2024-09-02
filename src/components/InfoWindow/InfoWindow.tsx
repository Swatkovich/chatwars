import { observer } from 'mobx-react-lite'
import React, { useCallback, useContext } from 'react'
import { InfoElement, Wrapper } from './InfoWinfow.styles'
import GameStoreContext from '../../store/GameStore'

const InfoWindow = observer(() => {
    const gameStore = useContext(GameStoreContext)
    const { regionData, selectedRegion } = gameStore

    const setColor = useCallback((number: number) => {
        if (number <= 100) {
            return '#ff7675'
        } else if (number > 100 && number <= 500) {
            return '#faba2a'
        } else if (number > 500 && number <= 1000) {
            return '#2ecc71'
        } else {
            return '#74b9ff'
        }
    }, [])

    return (
        <Wrapper>
            <InfoElement>
                {`Регион: `} <InfoElement style={{ fontWeight: 'bold' }}>{` ${selectedRegion ? selectedRegion : '0#0'}`}</InfoElement>
            </InfoElement>
            <InfoElement>
                {`Количество квестов: `} <InfoElement style={{ fontWeight: 'bold' }}>{` ${regionData ? regionData.questsNumber : 0}`}</InfoElement>
            </InfoElement>
            <InfoElement>
                {`Количество успешных квестов: `}{' '}
                <InfoElement style={{ fontWeight: 'bold' }}>{regionData ? regionData.successQuestsNumber : 0}</InfoElement>
                <InfoElement style={{ color: regionData ? setColor(regionData.successQuestsNumber) : 'black', fontWeight: 'bold' }}>
                    ({regionData ? Math.round(((regionData.successQuestsNumber / regionData.questsNumber) * 1000) / 10) : 0}%)
                </InfoElement>
            </InfoElement>
            <InfoElement>
                {`Среднее 📖 за успешный квест: `}
                <InfoElement style={{ color: regionData ? setColor(regionData.successQuestsNumber) : 'black', fontWeight: 'bold' }}>
                    {regionData?.successQuestsNumber ? Math.round((regionData.expirience / regionData.successQuestsNumber) * 10) / 10 : 0}
                </InfoElement>
            </InfoElement>
            <InfoElement>
                {`Среднее 🔘 за успешный квест: `}
                <InfoElement style={{ color: regionData ? setColor(regionData.successQuestsNumber) : 'black', fontWeight: 'bold' }}>
                    {regionData?.successQuestsNumber ? Math.round((regionData.gold / regionData.successQuestsNumber) * 10) / 10 : 0}
                </InfoElement>
            </InfoElement>
            <InfoElement style={{ marginTop: '20px' }}>Ресуры</InfoElement>
            <InfoElement>(Всего найдено/ Шанс за успешный квест)</InfoElement>
            {regionData &&
                Object.entries(regionData?.resources).map((resource) => (
                    <InfoElement>
                        {resource[0]}: <InfoElement>{`${resource[1]} / `}</InfoElement>
                        <InfoElement style={{ color: regionData ? setColor(regionData.successQuestsNumber) : 'black', fontWeight: 'bold' }}>{` ${
                            regionData?.successQuestsNumber ? Math.round((resource[1] / regionData.successQuestsNumber) * 1000) / 10 : 0
                        }%`}</InfoElement>
                    </InfoElement>
                ))}
        </Wrapper>
    )
})

export default InfoWindow
