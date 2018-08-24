import React from 'react';
import nba from 'nba';
import { Profile } from './Profile'
import { ShotChart } from './ShotChart'

window.nba = nba;

export class Main extends React.Component {
    componentDidMount() {
        console.log(nba.findPlayer("Brandon Ingram"));
    }

    render() {
        return(
            <div className='main'>
                <Profile/>
                <ShotChart playerId={1627742}/>
            </div>
        )
    }
}