(function () {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".fen_1 .char_1"));
    // 2. 指定配置项和数据
    option = {
        title: {
            text: '贵州省旅游人数总计与旅游总收入',
            textStyle: {
                align: 'center',
                color: '#fff',
                fontSize: 30,
            },
            top: '3%',
            left: '36%',
        },
        grid: {
            top: "25%",
            bottom: "10%"//也可设置left和right设置距离来控制图表的大小
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
            data: ["旅游总收入（单位：亿元）", "旅游总人数（单位：万人）"],
            top: "15%",
            textStyle: {
                color: "#ffffff",
                fontSize: 25,
            }
        },
        xAxis: {
            data: ['2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年'],
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#01FCE3',
                }
            },
            axisTick: {
                show: true //隐藏X轴刻度
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ffffff", //X轴文字颜色
                    fontSize: 18
                }
            },

        },
        yAxis: [{
            type: "value",
            name: "亿元",
            nameTextStyle: {
                color: "#ffffff",
                fontSize: 19
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ffffff",
                    fontSize: 19
                }
            },

        },
            {
                type: "value",
                name: "万人",

                nameTextStyle: {
                    color: "#ffffff",
                    fontSize: 19
                },
                position: "right",
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
                        fontSize: 19
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
            name: "旅游总收入（单位：亿元）",
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

            data: [81.46,106.43,116.75,167.59,251.14,387.05,512.28,653.13,805.23,1061.23,1429.48,1806.16,2370.65,2895.98,3512.31,5027.54,7116.81,9471.03,12318.86],
            markPoint: {
                symbolSize: 100,
                label:{
                    color: "rgb(255,255,255)",
                    show: true,
                    fontSize: 30,
                },
                data: [
                    { type: 'min', name: 'Min' },
                    { type: 'max', name: 'Max' }
                ],
                fontSize: 5
            },
        },
            {
                name: "旅游总人数（单位：万人）",
                type: "bar",
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#00FFE3"
                        },
                            {
                                offset: 1,
                                color: "#4693EC"
                            }
                        ])
                    }
                },
                data: [2120.55,2223.15,1842.91,2503.47,3127.08,4747.89,6262.89,8190.23,10439.95,12913.02,17019.36,21401.18,26761.28,32134.94,37630.52,53148.42,74417.43,96858.12,113526.6]
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
