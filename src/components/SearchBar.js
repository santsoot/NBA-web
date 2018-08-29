import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import { PROFILE_PIC_URL_PREFIX } from '../constants'

const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(
                ({fullName, playerId}) => (<Option key={playerId} value={fullName}>
                    <img className="player-option-image"
                         src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                         alt="profile image"
                    />
                    <span className="player-option-label"> {fullName} </span>
                </Option>)
            ),
        });
    }

    onSelect = (playerName) => {
        console.log('onSelect', playerName);
        this.props.loadPlayerInfo(playerName);
    }

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                className = "search-bar"
                dataSource={dataSource}
                size = "large"
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA Player"
                optionLabelProp="value"
            >
                <Input suffix={<Icon type="search"/>} />
            </AutoComplete>
        );
    }
}