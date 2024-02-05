import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const Chart1 = () => {
    useEffect(() => {
        var chartDom = document.getElementById('main');
        var myChart = echarts.getInstanceByDom(chartDom);

        // If an instance already exists, dispose of it
        if (myChart) {
            myChart.dispose();
        }

        myChart = echarts.init(chartDom);

        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            legend: {
                data: ['Evaporation', 'Precipitation', 'Temperature']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Precipitation',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                },
                {
                    type: 'value',
                    name: 'Temperature',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            series: [
                {
                    name: 'Evaporation',
                    type: 'bar',
                    tooltip: {
                        valueFormatter: function (value) {
                            return value + ' ml';
                        }
                    },
                    data: [102.6, 105.9, 109.0, 126.4, 128.7, 170.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    barGap: '0%',
                    barCategoryGap: '40%',
                    itemStyle: {
                        barBorderRadius: [10, 10, 0, 0],
                        color: 'rgb(215,187,251)'
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c} ml'  // Display the data value on top of the bar
                    }
                },
                {
                    name: 'Precipitation',
                    type: 'bar',
                    tooltip: {
                        valueFormatter: function (value) {
                            return value + ' ml';
                        }
                    },
                    data: [52.0, 54.9, 57.0, 53.2, 55.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    barGap: '0%',
                    barCategoryGap: '40%',
                    itemStyle: {
                        barBorderRadius: [10, 10, 0, 0],
                        color: 'rgb(105,65,198)'
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c} ml'
                    }
                },
                {
                    name: 'Temperature',
                    type: 'line',
                    yAxisIndex: 1,
                    tooltip: {
                        valueFormatter: function (value) {
                            return value + ' °C';
                        }
                    },
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
                    itemStyle: {
                        color: 'rgb(236, 182, 102)',
                    },
                    symbolSize: 1,
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c} °C',
                        color: 'black',
                        backgroundColor: 'white',
                        padding: 5,
                        borderRadius: 4,
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                    }
                }
            ]
        };
        option && myChart.setOption(option);

        // Cleanup function to dispose of the chart when the component unmounts
        return () => {
            myChart.dispose();
        };
    }, []);

    return (
        <div>
            <div id="main" style={{ width: '100%', height: '400px' }}></div>
        </div>
    );
};

export default Chart1;
