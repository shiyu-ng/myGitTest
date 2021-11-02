

(function () {
    var myChart = echarts.init(document.querySelector(".fen4 .charm"));
    // 2. 指定配置项和数据
    var option;

    option = {
        title: {
            text: '贫困人口（万人）',
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
            data: ['2016年', '2017年', '2018年', '2019年', '2020年'],
            axisLabel: {
                color: "rgba(255,255,255,1)",
                fontSize: 25
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: "rgba(255,255,255,1)",
                fontSize: 25
            },
        },
        series: [
            {
                data: [372, 280.32, 155.12, 30.83, 0],
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
                            offset: 0, color: 'red' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'blue' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            }
        ]
    };

    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    // 5. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();