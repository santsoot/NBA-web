import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(
                ({fullName}) => fullName
            ),
        });
    }

    onSelect = (playerName) => {
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
            >
                <Input suffix={<Icon type="search"/>} />
            </AutoComplete>
        );
    }
}