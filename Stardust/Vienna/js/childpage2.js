

(function () {
    var myChart = echarts.init(document.querySelector(".fen2 .charl"));
    // 2. 指定配置项和数据
    var option;
    option = {

        title: {
            text: '贵州省地区生产总值（单位：亿元）',
            textStyle:{//标题内容的样式
                color:'#ffffff',
                fontFamily:"san-serif",//主题文字字体，默认微软雅黑
                fontSize:25//主题文字字体大小，默认为18px
            },
            padding:5,
        },
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // 修改图表的大小
        grid: {
            left: "0%",
            top: "50px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                type: "category",
                data: [
                    "2001年",
                    "2011年",
                    "2015年",
                    "2020年"
                ],
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签 相关样式
                axisLabel: {
                    color: "rgba(255,255,255,1)",
                    fontSize: "30"
                },
                // 不显示x坐标轴的样式
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                // 修改刻度标签 相关样式
                axisLabel: {
                    color: "rgba(255,255,255,1)",
                    fontSize: "25"
                },
                // y轴的线条改为了 2像素
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 2
                    }
                },
                // y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: "亿元",
                type: "bar",
                barWidth: "35%",
                data: [1000, 5000, 10000, 17826.56],
                itemStyle: {
                    // 修改柱子圆角
                    barBorderRadius: 5
                }
            }
        ]
    };
    // 3. 把配置项给实例对象
    myChart.setOption(option);

    /*******高亮显示开始**********/
    var _this2 = this
    var isSet2 = true // 为了做判断：当鼠标移动上去的时候，自动高亮就被取消
    var currentIndex2 = 0

    // 2、鼠标移动上去的时候的高亮动画
    myChart.on('mouseover', function (param) {
        isSet2 = false
        clearInterval(_this2.startCharts)
        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex2
        })
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: param.dataIndex
        })
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: param.dataIndex
        })
    })
    // 3、自动高亮展示
    chartHover = function () {
        var dataLen = myChart.getOption().series[0].data.length
        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex2
        })
        currentIndex2 = (currentIndex2 + 1) % dataLen
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: currentIndex2
        })
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: currentIndex2
        })
    }
    _this2.startCharts = setInterval(chartHover, 1000)
    // 4、鼠标移出之后，恢复自动高亮
    myChart.on('mouseout', function (param) {
        if (!isSet2) {
            _this2.startCharts = setInterval(chartHover, 1000)
            isSet2 = true
        }
    })
    /*******高亮显示结束**********/

    // 5. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

(function () {
    var myChart = echarts.init(document.querySelector(".fen2_1 .charl"));
// 2. 指定配置项和数据

    var option;

    option = {
        title: {
            text: '人均地区生产总值（美元）',
            textStyle:{//标题内容的样式
                color:'#ffffff',
                fontFamily:"san-serif",//主题文字字体，默认微软雅黑
                fontSize:25//主题文字字体大小，默认为18px
            },
            padding:5,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1978年', '2000年', '2010年', '2018年', '2020年'],
            axisLabel: {
                color: "rgba(255,255,255,1)",
                fontSize: 25
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: "rgba(255,255,255,1)",
                fontSize: 20
            },
        },
        series: [
            {
                data: [71, 330, 1970, 6685, 7500],
                markPoint: {
                    symbolSize: 100,
                    label:{
                        show: true,
                        fontSize: 30,
                    },
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ],
                    fontSize: 10
                },
                type: 'line',
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'green' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'blue' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            }
        ]
    };

    // 3. 把配置项给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();