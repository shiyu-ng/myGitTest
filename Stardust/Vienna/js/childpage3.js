

(function () {
    var myChart = echarts.init(document.querySelector(".fen3 .chari"));
    // 2. 指定配置项和数据
    var option;

    option = {
        tooltip: {
            trigger: 'axis'
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
                fontSize: 25
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