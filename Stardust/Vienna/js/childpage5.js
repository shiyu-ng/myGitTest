

(function () {
    var myChart = echarts.init(document.querySelector(".fen5 .charn"));
    // 2. 指定配置项和数据
    var option;

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' ,// 'shadow' as default; can also be 'line' or 'shadow'

            },
        },
        legend: {
            textStyle: {
                color: "rgba(255,255,255,1)",
                fontSize: 20
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                color: "rgba(255,255,255,1)",
                fontSize: 25
            },
        },
        yAxis: {
            type: 'category',
            data: ['2015年', '2016年', '2017年', '2018年', '2019年'],
            axisLabel: {
                color: "rgba(255,255,255,1)",
                fontSize: 25
            },
        },
        series: [
            {
                name: '科研服务（法人单位数）',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    color: "rgba(255,255,255,1)",
                    fontSize: 20
                },
                emphasis: {
                    focus: 'series'
                },
                data: [5710, 6650, 9234, 11100, 11836],

            },
            {
                name: '研究与实验发展人员（人）',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    color: "rgba(255,255,255,1)",
                    fontSize: 20
                },
                emphasis: {
                    focus: 'series'
                },
                data: [40516, 45222, 52746, 63689, 67285]
            },
            {
                name: '申请专利数（件）',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    color: "rgba(255,255,255,1)",
                    fontSize: 20
                },
                emphasis: {
                    focus: 'series'
                },
                data: [5756, 6856, 1037, 11324, 13772]
            },
            {
                name: '科研机构数（个）',
                type: 'bar',
                stack: 'total',
                emphasis: {
                    focus: 'series'
                },
                data: [482, 741, 744, 842, 993]
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




(function () {
    var myChart = echarts.init(document.querySelector(".fen5_1 .charn"));


    var option;
    option = {

        title: {
            text: '科技成果获奖个数',
            textStyle:{//标题内容的样式
                color:'#ffffff',
                fontFamily:"san-serif",//主题文字字体，默认微软雅黑
                fontSize:30//主题文字字体大小，默认为18px
            },
            left:'30%',
            padding:5,
        },
        color: ["#63b0ff"],
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
                    "2012年",
                    "2013年",
                    "2014年",
                    "2015年",
                    "2016年",
                    "2017年",
                    "2018年",
                    "2019年",
                    "2020年",
                ],
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签 相关样式
                axisLabel: {
                    color: "rgba(255,255,255,1)",
                    fontSize: "20"
                },
                // 不显示x坐标轴的样式
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                min:80,
                type: "value",
                // 修改刻度标签 相关样式
                axisLabel: {
                    color: "rgba(255,255,255,1)",
                    fontSize: "20"
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
                name: "个",
                type: "bar",
                barWidth: "35%",
                data: [91, 91, 94, 93, 98, 102, 115, 115, 129],
                markPoint: {
                    symbolSize: 80,
                    label:{
                        show: true,
                        fontSize: 40,
                    },
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ],
                    fontSize: 10
                },
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
