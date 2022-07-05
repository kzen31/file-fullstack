import React, { Component } from 'react';

import C3Chart from 'react-c3js';
import 'c3/c3.css';

class DonutChart extends Component {

    render() {
        const data = {
            columns: [
                [this.props.data[0].status, this.props.data[0].count],
                [this.props.data[1].status, this.props.data[1].count],
                // ['Mail-Order Sales', 20]
            ],
            type: "donut",
        };

        const donut = {
            title: "Report",
            width: 30,
            label: { show: !1 }
        };

        const color = {
            pattern: ['#Fa6fbe', '#28bbe3']
        };

        const size = {
            height: 300
        };

        return (
            <React.Fragment>
                <C3Chart data={data} donut={donut} color={color} size={size} dir="ltr" />
            </React.Fragment>
        );
    }
}

export default DonutChart;