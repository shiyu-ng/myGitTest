(function () {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".fen .char"));
    // 2. 指定配置项和数据
    var option;

    option = {

        title: {
            text: '大旅游+大扶贫：助推全省89.7万贫困人口收益增收脱贫',
            textStyle:{//标题内容的样式
                color:'#ffffff',
                fontFamily:"san-serif",//主题文字字体，默认微软雅黑
                fontSize:40//主题文字字体大小，默认为18px
            },
            padding:5,
        },
        color: ['#2EB7BD', '#5caf39', '#4695D1'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            right:200,
            data: ['贵州', '全国', '占比'],
            textStyle: {
                color: "rgba(255,255,255,1)",
                fontSize: 30
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['2015', '2016', '2017', '2018', '2019'],
                axisPointer: {
                    type: 'shadow',

                },
                axisLabel: {
                    color: "rgba(255,255,255,1)",
                    fontSize: 30
                }
            }
        ],
        yAxis: [

            {
                type: 'value',
                name: '收入/百亿',
                color: "rgba(255,255,255,1)",
                min: 0,
                max: 600,
                interval: 50,
                axisLabel: {
                    color: "rgba(255,255,255,1)",
                    fontSize: 20
                }
            },
            {
                type: 'value',
                name: '占比',
                color: "rgba(255,255,255,1)",
                min: 0,
                max: 30,
                interval: 5,
                axisLabel: {
                    formatter: '{value} %',
                    color: "rgba(255,255,255,1)",
                    fontSize: 20
                }
            },


        ],
        series: [
            {
                name: '贵州',
                type: 'bar',
                data: [
                    35.1282, 50.2754, 71.1681, 94.7103, 123.1886
                ]
            },
            {
                name: '全国',
                type: 'bar',
                data: [
                    341.9505, 393.90, 456.6077, 512.7829, 572.5092
                ]
            },
            {
                name: '占比',
                type: 'line',
                yAxisIndex: 1,
                data: [10.27, 12.76, 15.59, 18.46, 21.52]
            }
        ]
    };

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
