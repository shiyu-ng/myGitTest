

(function () {
    var myChart = echarts.init(document.querySelector(".fen5_1 .charnx"));
    // 2. 指定配置项和数据
    option = {
        title: {
            text: '贵州省综合效用值及排名对比图',
            textStyle:{//标题内容的样式
                color:'#ffffff',
                fontFamily:"san-serif",//主题文字字体，默认微软雅黑
                fontSize:35//主题文字字体大小，默认为18px
            },
            left: '33%',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            backgroundColor: 'rgba(9, 24, 48, 0.5)',
            borderColor: 'rgba(75, 253, 238, 0.4)',
            textStyle: {
                color: '#CFE3FC',
            },
            borderWidth: 1,

        },
        legend: [
            {
                data: ['效用值'],
                top: '80',
                x: '40%',
                itemWidth: 14,
                textStyle: {
                    color: '#c1cadf',
                    fontSize: 30
                }
            },
            {
                data: ['排位'],
                x: '50%',
                top: '80',
                itemStyle: {
                    borderWidth: 2
                },
                textStyle: {
                    color: '#c1cadf',
                    fontSize: 30
                }
            }
        ],
        grid: {
            left: '20px',
            right: '20px',
            top: '50px',
            bottom: '30px',
            containLabel: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center'
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: true,
                axisTick: {
                    show: false
                },
                data: ['2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年','2019年'],
                axisLine: {
                    lineStyle: {
                        color: 'rgba(51, 176, 255, 1)'
                    }
                },
                axisLabel: {
                    interval: 0,
                    color: 'rgba(207, 227, 252, 1)',
                    fontSize: 25
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: true
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(120, 160, 236, 1)',
                    },
                    symbol: ['none', 'arrow'],
                    symbolSize: [5, 12],
                    symbolOffset: [0, 10]
                },
                axisLabel: {
                    interval: 0,
                    color: 'rgba(207, 227, 252, 1)',
                    fontSize: 25
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(39, 57, 75, 1)',
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            {
                type: 'value',
                axisTick: {
                    show: true
                },

                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(207, 227, 252, 1)t'
                    },
                    symbol: ['none', 'arrow'],
                    symbolSize: [5, 12],
                    symbolOffset: [0, 10]
                },
                min: 0,
                axisLabel: {
                    interval: 0,
                    color: 'rgba(207, 227, 252, 1)',
                    fontSize: 25
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(39, 57, 75, 1)',
                        width: 1,
                        type: 'solid'
                    }
                }
            }
        ],
        series: [
            {
                name: '排位',
                yAxisIndex: 1,
                type: 'line',
                smooth: false,

                data: [23,24,23,24,26,22,17,18,18,16],
                markPoint: {
                    symbolSize: 90,
                    label:{
                        color: "rgb(37,167,110)",
                        show: true,
                        fontSize: 30,
                    },
                    data: [
                        { type: 'min', name: 'Min' }
                    ],
                    fontSize: 10
                },
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    normal: {
                        color: '#FFFFFF',
                        borderColor: 'rgba(0, 255, 240, 1)',
                        lineStyle: {
                            color: 'rgba(0, 255, 240, 1)'
                        }
                    }
                }
            },
            {
                type: 'bar',

                yAxisIndex: 0,
                name: '效用值',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: 'rgba(32, 178, 232, 1)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(32, 178, 232, 0)'
                                }
                            ],
                            false
                        )
                    }
                },
                barWidth: 24,
                data: [23.21,22.62,20.77,22.60,20.41,21.22,25.64,22.19,22.27,23.60],
            }
        ]
    }
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    // 5. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
