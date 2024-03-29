

(function () {
    var myChart = echarts.init(document.querySelector(".fen4 .charm"));
    // 2. 指定配置项和数据
    option = {
        title: {
            text: '933万贫困人口全部脱贫  192万群众搬出大山\n\n\n        贵州省贫困人口数量与贫困发生率',
            textStyle:{//标题内容的样式
                color:'#ffffff',
                fontFamily:"san-serif",//主题文字字体，默认微软雅黑
                fontSize:35//主题文字字体大小，默认为18px
            },
            top:'0%',
            left:'18%',
            padding:5,
        },
        grid: {
            top: "25%",
            bottom: "10%"
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
                label: {
                    show: true
                }
            }
        },
        legend: {
            data: ["贫困发生率", "贫困人口"],
            top: "20%",
            textStyle: {
                color: "#ffffff",
                fontSize:25
            }
        },
        xAxis: {
            data: ['2016年','2017年','2018年','2019年','2020年',
            ],
            axisLine: {
                show: false //隐藏X轴轴线
            },
            axisTick: {
                show: false //隐藏X轴刻度
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ffffff" ,//X轴文字颜色
                    fontSize:25
                }
            }
        },
        yAxis: [{
            type: "value",
            name: "万人",
            nameTextStyle: {
                color: "#ffffff",
                fontSize:25
            },
            splitLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ffffff",
                    fontSize:25
                }
            }
        },
            {
                type: "value",
                name: "发生率",
                nameTextStyle: {
                    color: "#ffffff",
                    fontSize:25
                },
                position: "right",
                splitLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    formatter: "{value} %", //右侧Y轴文字显示
                    textStyle: {
                        color: "#ffffff",
                        fontSize:25
                    }
                }
            },
            {
                type: "value",
                gridIndex: 0,
                min: 50,
                max: 100,
                splitNumber: 8,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                    }
                }
            }
        ],
        series: [{
            name: "贫困发生率",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#058cff"
            },
            lineStyle: {
                color: "#058cff"
            },
            areaStyle:{
                color: "rgba(5,140,255, 0.2)"
            },
            data: [10.6,7.75,4.29,0.85,0],
            markPoint: {
                symbolSize: 80,
                label:{
                    color: "rgb(255,255,255)",
                    show: true,
                    fontSize: 30,
                },
                data: [
                    { type: 'min', name: 'Min' }
                ],
                fontSize: 20
            },
        },
            {
                name: "贫困人口",
                type: "bar",
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#6f3d9e"
                        },
                            {
                                offset: 1,
                                color: "#58ec4e"
                            }
                        ])
                    }
                },
                data: [372,280.32,155.12,30.83,0]
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



(function () {
    var myChart = echarts.init(document.querySelector(".fen4_1 .charm"));
    // 2. 指定配置项和数据
    option = {

        title: {
            text: '66个贫困县全省全部摘帽\n\n\n贵州省贫困县数',
            textStyle: {
                align: 'center',
                color: '#fff',
                fontSize: 35,
            },
            top: '5%',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(0, 255, 233,0)'
                        }, {
                            offset: 0.5,
                            color: 'rgba(255, 255, 255,1)',
                        }, {
                            offset: 1,
                            color: 'rgba(0, 255, 233,0)'
                        }],
                        global: false
                    }
                },
            },
        },
        grid: {
            top: '15%',
            left: '5%',
            right: '5%',
            bottom: '15%',
            // containLabel: true
        },
        xAxis: [{
            type: 'category',
            axisLine: {
                show: true
            },
            splitArea: {
                // show: true,
                color: '#f00',
                lineStyle: {
                    color: '#f00',
                },
            },
            axisLabel: {
                color: '#fff',
                fontSize:20
            },
            splitLine: {
                show: false
            },
            boundaryGap: false,
            data: ['2016年','2017年','2018年','2019年','2020年'],

        }],

        yAxis: [{
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            axisLine: {
                show: true,
            },
            axisLabel: {
                show: false,
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',
                },
            },
            axisTick: {
                show: false,
            },
        }],
        series: [{
            type: 'line',
            // smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 25,
            lineStyle: {
                normal: {
                    color: "#6c50f3",
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#6c50f3',
                }
            },
            itemStyle: {
                color: "#6c50f3",
                borderColor: "#fff",
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(108,80,243,0.3)'
                    },
                        {
                            offset: 1,
                            color: 'rgba(108,80,243,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(108,80,243, 0.9)',
                    shadowBlur: 20
                }
            },
            data: [ ]
        },
            {
                name: '注册总量',
                type: 'line',
                // smooth: true, //是否平滑
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbol: 'circle',
                symbolSize: 25,
                lineStyle: {
                    normal: {
                        color: "#00ca95",
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 5,
                        shadowOffsetX: 5,
                    },
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#00ca95',
                        fontSize:30
                    }
                },

                itemStyle: {
                    color: "#00ca95",
                    borderColor: "#fff",
                    borderWidth: 3,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                },
                tooltip: {
                    show: false
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,202,149,0.3)'
                        },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)'
                            }
                        ], false),
                        shadowColor: 'rgba(0,202,149, 0.9)',
                        shadowBlur: 20
                    }
                },
                data: [66,65,51,9,0],
            },
        ]
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    // 5. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();