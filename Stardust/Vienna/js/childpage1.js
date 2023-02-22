(function () {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".fenn .charn"));
    // 2. 指定配置项和数据
    var data = [34643, 34618,44220, 45304, 46128,46893,113278,123247,125365,142561,151644,157820,164542,172564,179097,186407,191626,194397,196908,204723];
    var xdata = ['2000年', '2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年'];
    var option = {
        title: {
            text: '贵州省公路运输线路长度',
           left: '37%',
            textStyle:{//标题内容的样式
                color:'#ffffff',
                fontFamily:"san-serif",//主题文字字体，默认微软雅黑
                fontSize:40//主题文字字体大小，默认为18px
            },
        },
        grid: {
            left: 30,
            right: 50,
            top: 50,
            bottom: 30,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            // boundaryGap: false,
            data: xdata,
            triggerEvent: true,
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    color: 'rgba(255,255,255,.6)'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                fontSize: 19,
                fontWeight: 'bold',
                textShadowColor: '#000',
                textShadowOffsetY: 2
            }
        },
        yAxis: {
            name: '单位（公里）',
            nameTextStyle: {
                color: '#fff',
                fontSize: 30,
                textShadowColor: '#000',
                textShadowOffsetY: 2
            },
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,.2)'
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    color: 'rgba(255,255,255,.6)'
                }
            },
            axisTick: {
                show: true
            },
            axisLabel: {
                color: '#fff',
                fontSize: 20,
                textShadowColor: '#000',
                textShadowOffsetY: 2
            }
        },
        series: [{
            data: data,
            type: 'line',
            symbol: 'circle',
            symbolSize: 12,
            color: '#FEC201',
            lineStyle: {
                color: "#03E0F2"
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#FEC201',
                    fontSize: 18,
                    fontWeight: 'bold'
                }
            },
            areaStyle: {
                color: 'rgba(1,98,133,0.6)'
            }
        }, {
            type: 'bar',
            animation: false,
            barWidth: 3,
            hoverAnimation: false,
            data: data,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#91EAF2' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#074863' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    label: {
                        show: false
                    }
                }
            }
        }]
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
