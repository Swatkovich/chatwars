import { observer } from 'mobx-react-lite'
import React from 'react'
import { InfoElement, Title, Wrapper } from './InfoBar.styles'
import InfoWindow from '../InfoWindow/InfoWindow'

const InfoBar = observer(() => {
    return (
        <Wrapper>
            <Title>ИНФО:</Title>
            <InfoWindow />
            <InfoElement style={{ textAlign: 'center', width: '80%', margin: 0 }}>Информация по ресурсам</InfoElement>
            <InfoElement style={{ textAlign: 'center', width: '80%' }}>(по количеству удачных квестов)</InfoElement>
            <InfoElement style={{ color: '#ff7675', fontWeight: 'bold', marginBottom: '0px' }}>КРАСНЫЙ ТЕКСТ (Не точно)</InfoElement>
            <InfoElement>0 ≤ Х ≤ 100 </InfoElement>
            <InfoElement style={{ color: '#fdcb6e', fontWeight: 'bold', marginBottom: '0px' }}>ЖЁЛТЫЙ ТЕКСТ (Приблизительно)</InfoElement>
            <InfoElement>100 {`<`} Х ≤ 500 </InfoElement>
            <InfoElement style={{ color: '#2ecc71', fontWeight: 'bold', marginBottom: '0px' }}>ЗЕЛЁНЫЙ ТЕКСТ (Довольно точно)</InfoElement>
            <InfoElement>500 {`<`} Х ≤ 1000 </InfoElement>
            <InfoElement style={{ color: '#74b9ff', fontWeight: 'bold', marginBottom: '0px' }}>СИНИЙ ТЕКСТ (Очень даже точно)</InfoElement>
            <InfoElement>X {`>`} 1000 </InfoElement>
        </Wrapper>
    )
})

export default InfoBar
