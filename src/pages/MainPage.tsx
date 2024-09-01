import { observer } from 'mobx-react-lite';
import React from 'react';
import GameMap from '../components/GameMap/GameMap';

const MainPage = observer(() => (
    <div>
        <GameMap />
    </div>
));

export default MainPage;
