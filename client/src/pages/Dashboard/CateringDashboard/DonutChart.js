import React, { Component } from 'react';

import C3Chart from 'react-c3js';
import 'c3/c3.css';

class DonutChart extends Component {
    render() {
        const data = {
            columns: [
                [this.props.data[0].title.charAt(0) + this.props.data[0].title.slice(1).toLowerCase(), this.props.data[0].total],
                [this.props.data[1].title.charAt(0) + this.props.data[1].title.slice(1).toLowerCase(), this.props.data[1].total],
                [this.props.data[2].title.charAt(0) + this.props.data[2].title.slice(1).toLowerCase(), this.props.data[2].total],
            ],
            type: "donut",
        };

        const donut = {
            title: "Complaint Report",
            width: 30,
            label: { show: !1 }
        };

        const color = {
            pattern: ['#Fa6fbe', '#28bbe3', '#38bbe3']
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