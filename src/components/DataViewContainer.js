import React from 'react';
import { ShotChart } from './ShotChart';
import { Radio, Switch } from 'antd';
import { CountSlider } from './CountSlider'
import _ from 'lodash';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: "hexbin",
        displayToolTips: true,
    }

    onCountSliderChange = (value) => {
        console.log('onsliderchange');
        this.setState({
            minCount: value,
        });
    }

    onChartTypeChange = (e) => {
        console.log(e);
        this.setState(
            {
                chartType: e.target.value
            }
        )
    }

    onTooltipChange = (checked) => {
        console.log(checked);
        this.setState(
            {
                displayToolTips: checked
            }
        )
    }



    render() {
        const { minCount, chartType, displayToolTips } = this.state;
        return(
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={minCount}
                    displayToolTips={displayToolTips}
                    chartType={chartType}
                />
                <CountSlider onChange={_.debounce(this.onCountSliderChange, 500)}/>

                <RadioGroup onChange={this.onChartTypeChange} value={chartType}>
                    <Radio value="hexbin">Hexbin</Radio>
                    <Radio value="scatter">Scatter</Radio>
                </RadioGroup>
                <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked onChange={this.onTooltipChange}/>

            </div>
        )
    }
}