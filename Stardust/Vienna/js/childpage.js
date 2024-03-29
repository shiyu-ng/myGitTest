(function () {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".fen .char"));
    // 2. 指定配置项和数据
    var option;

    option = {

        title: {
            text: '大旅游+大扶贫：助推全省89.7万贫困人口收益增收脱贫',
            right: '30%',
            textStyle:{//标题内容的样式
                color:'#ffffff',
                fontFamily:"san-serif",//主题文字字体，默认微软雅黑
                fontSize:35//主题文字字体大小，默认为18px
            },
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
                fontSize:20
            },
            borderWidth: 1,
        },
        legend: [
            {
                data: ['贵州'],
                top: '80',
                x: '10%',
                itemWidth: 14,
                borderColor: 'rgba(255, 192, 0, 1)',
                textStyle: {
                    color: '#c1cadf',
                    fontSize: 20
                }
            },
            {
                data: ['全国'],
                top: '80',
                x: '30%',
                itemWidth: 14,
                textStyle: {
                    color: '#c1cadf',
                    fontSize: 20
                }
            },
            {
                data: ['占比(%)'],
                x: '50%',
                top: '80',
                itemStyle: {
                    borderWidth: 2
                },
                textStyle: {
                    color: '#c1cadf',
                    fontSize: 20
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
                data: ['2015年', '2016年', '2017年', '2018年', '2019年'],
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
                        fontSize: 25
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
                    show: false,
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
                max:25,
                axisLabel: {
                    interval: 0,
                    color: 'rgba(207, 227, 252, 1)',
                    formatter: '{value} %',
                    fontSize: 25
                },
                splitLine: {
                    show: false,
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
                name: '占比(%)',
                yAxisIndex: 1,
                type: 'line',
                smooth: true,

                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(98, 227, 255, 1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(98, 227, 255, 0)'
                        }
                    ])
                },
                data: [10.27, 12.76, 15.59, 18.46, 21.52],
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
                name: '贵州',
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
                                    color: 'rgba(232, 98, 32, 1)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(232, 98, 32, 0)'
                                }
                            ],
                            false
                        )
                    }
                },
                barWidth: 24,
                data: [
                    35.1282, 50.2754, 71.1681, 94.7103, 123.1886
                ]
            },
            {
                type: 'bar',

                yAxisIndex: 0,
                name: '全国',
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
                data: [
                    341.9505, 393.90, 456.6077, 512.7829, 572.5092
                ]
            }
        ]
    }
    // 3. 把配置给实例对象
    myChart.setOption(option);

    // 5. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });

})();

(function () {
    var myChart = echarts.init(document.querySelector(".fen1 .char"));
    // 2. 指定配置项和数据
    var option;




    // 3. 把配置项给实例对象

    myChart.setOption(option);

    // 5. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
