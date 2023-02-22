
(function () {
    var myChart = echarts.init(document.querySelector(".fen3_1 .chari"));
    // 2. 指定配置项和数据
    var option;


    option = {
        title: {
            text: '贵州省常住居民人均可支配收入',
            textStyle:{//标题内容的样式
                color:'#ffffff',
                fontFamily:"san-serif",//主题文字字体，默认微软雅黑
                fontSize:30//主题文字字体大小，默认为18px
            },
            left: '30%',
            padding:5,
        },
        legend: {
            top: "80",
            x: "center",
            textStyle: {
                fontSize: 30,
                color: "rgb(255,255,255)",
            },
            icon:
                "path://M512 881.777778 512 881.777778C716.222629 881.777778 881.777778 716.222629 881.777778 512 881.777778 307.777371 716.222629 142.222222 512 142.222222 307.777373 142.222222 142.222222 307.777371 142.222222 512 142.222222 716.222629 307.777373 881.777778 512 881.777778L512 881.777778ZM512 1024 512 1024C229.230208 1024 0 794.769789 0 512 0 229.230211 229.230208 0 512 0 794.769789 0 1024 229.230211 1024 512 1024 794.769789 794.769789 1024 512 1024L512 1024Z",
            itemWidth:8, // 设置宽度
            itemHeight:8, // 设置高度、
            itemGap: 12 // 设置间距
        },
        tooltip: {
            show: true,
            trigger: "axis", //axis , item
            backgroundColor: "RGBA(0, 49, 85, 1)",
            borderColor: "rgba(0, 151, 251, 1)",
            borderWidth: 1,
            borderRadius: 0,
            textStyle: {
                color: "#BCE9FC",
                fontSize: 30,
                align: "left"
            }
        },
        grid: {
            right: "5%",
            top: "20%",
            left: "5%",
            bottom: "5%",
            containLabel: true,
            fontSize: 25
        },
        xAxis: {
            type: "category",
            boundaryGap: true,
            data: ["2014年","2015年",'2016年','2017年','2018年', '2019年', '2020年'],
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                //	margin:15,
                textStyle: {
                    color: "#65D5FF",
                    fontStyle: "normal",
                    fontSize: 25
                }
            },
            axisTick: {
                //坐标轴刻度相关设置。
                show: false
            },
            axisLine: {
                //坐标轴轴线相关设置
                lineStyle: {
                    color: "rgba(77, 128, 254, 0.2)"
                }
            },
            splitLine: {
                //坐标轴在 grid 区域中的分隔线。
                show: true,
                lineStyle: {
                    color: "rgba(77, 128, 254, 0.2)"
                }
            }
        },
        yAxis: [
            {
                type: "value",
                splitNumber: 3,
                axisLabel: {
                    textStyle: {
                        color: "#65D5FF",
                        fontStyle: "normal",
                        fontSize: 25
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(77, 128, 254, 0.2)"
                    }
                }
            }
        ],
        series: [
            {
                name: '城市(元)',
                type: "pictorialBar",
                barWidth: "60%",
                stack: "总量",
                label: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {

                    normal: {

                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "rgba(0, 151, 251, 1)" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "rgba(0, 34, 66, 0.5)" // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        } //渐变颜色
                    }
                },
                symbol:
                    "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",

                data: [22548, 24580, 26743, 29080, 31592,34404, 36096],
            },  {
                name: '农村(元)',
                type: "pictorialBar",
                barWidth: "60%",
                stack: "总量",
                label: {
                    normal: {
                        show: false
                    },
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "rgba(48, 236, 166, 1)" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "rgba(0, 34, 66, 0.5)" // 100% 处的颜色
                                }
                            ],
                            globalCoord: false // 缺省为 false
                        } //渐变颜色
                    }
                },
                symbol:
                    "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",

                data: [6671, 7387, 8090, 8869, 9716, 10756, 11642],
            }],
    };

    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    // 5. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

(function () {
    var myChart = echarts.init(document.querySelector(".fen3 .chari"));
    // 2. 指定配置项和数据
    var option;

    option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            textStyle: {
                color: "rgba(255,255,255,1)",
                fontSize: "25"
            }
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2015年', '2016年', '2017年', '2018年', '2019年'],
            axisLabel: {
                color: "rgba(255,255,255,1)",
                fontSize: 20
            },
        },
        yAxis: {
            type: 'value',
            min:30,
            max:42,
            axisLabel: {
                formatter: '{value} %',
                color: "rgba(255,255,255,1)",
                fontSize: 20
            },
        },
        series: [
            {
                name: '城市恩格尔系数',
                fontSize: 25,
                type: 'line',
                color: "rgb(175,81,81)",
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width:15// 0.1的线条是非常细的了
                        }
                    }
                },
                data: [34, 33.2, 33, 32.4, 32.2],
                markPoint: {
                    symbolSize: 100,
                    label:{
                        show: true,
                        fontSize: 40,
                    },
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ],
                    fontSize: 20
                },
            },
            {
                name: '农村恩格尔系数',
                type: 'line',
                color: "rgb(16,100,173)",
                itemStyle: {

                    normal: {

                        lineStyle: {
                            width:15// 0.1的线条是非常细的了
                        }
                    }
                },
                data: [39.8, 38.7, 38, 36.9, 36.7],
                markPoint: {
                    symbolSize: 100,
                    label:{
                        show: true,
                        fontSize: 40,
                    },
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
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