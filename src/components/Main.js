import React from 'react';
import nba from 'nba';
import { Profile } from "./Profile";
import { DataViewContainer } from './DataViewContainer'
import { SearchBar } from './SearchBar'

export class Main extends React.Component {
    state = {
        playerInfo: {
            playerId: nba.findPlayer("Brandon Ingram").playerId,
        },
    }

    componentDidMount() {
        this.loadPlayerInfo("Brandon Ingram");
    }

    loadPlayerInfo = (playerName) => {
        const playerId = nba.findPlayer(playerName).playerId;
        nba.stats.playerInfo({ PlayerID: playerId }).then((response) => {
            const playerInfo = Object.assign(
                {}, response.commonPlayerInfo[0], response.playerHeadlineStats[0]
            );
            this.setState({
                playerInfo
            });
        });
    }

    render() {
        return (
            <div className="main">
                <SearchBar loadPlayerInfo={this.loadPlayerInfo}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo}/>
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>

            </div>
        );
    }
}
