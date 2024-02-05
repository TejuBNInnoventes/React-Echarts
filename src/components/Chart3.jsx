import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const Chart3 = () => {
  useEffect(() => {
    // Initialize ECharts when the component mounts
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Email',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          barWidth: '50%',
          data: [100, 100, 100, 100, 100, 100, 100],
          itemStyle: {
            barBorderRadius: [0, 0, 5, 5],
            color: 'rgb(215,187,251)'
          },
          label: {
            show: true,
            position: 'top',
            distance: '-40',
            formatter: '{c} ml',
            color:'rgb(105,65,198)'
        }
        },
        {
          name: 'Union Ads',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          barBorderRadius: [5, 5, 0, 0],
          data: [220, 182, 191, 234, 290, 330, 310],
          itemStyle: {
            barBorderRadius: [10, 10, 0, 0],
            color: 'rgb(105,65,198)'
          },
          label: {
            show: true,
            position: 'top',
            distance:-30,
            formatter: '{c} ml',
            color: 'white'
        }
        },
        {
          name: 'Line Chart',
          type: 'line',
          data: [150, 150, 150, 150, 150, 150, 150], // Example line chart data
          itemStyle: {
            color: 'rgb(236, 182, 102)',
            
          },
          symbolSize: 1,
          lineStyle: {
            width: 3,  // Set the thickness of the line
          },
          label: {
            show: true,
            position: 'bottom',
            formatter: '{c} ml',
            color:'white'
        }
        }
      ]
    };

    // Set the option to the chart
    option && myChart.setOption(option);

    // Cleanup function to dispose of the chart when the component unmounts
    return () => {
      myChart.dispose();
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return <div id="main" style={{ width: '80%', height: '400px', margin: '0px 150px 0px 150px' }}></div>;
};

export default Chart3;
