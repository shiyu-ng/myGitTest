// 柱状图模块1   首页左上角柱状图
(function () {
  // 1实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2. 指定配置项和数据
  var option = {
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
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "2000年",
          "2011年",
          "2015年",
          "2020年"
        ],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "10"
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
          color: "rgba(255,255,255,.6)",
          fontSize: 10
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


  //4.点击柱状图跳转
  myChart.on('click', function (params) {
    console.log(params.dataIndex);
    document.cookie = params.dataIndex;
    console.log(document.cookie);
    //cookie传递params的数组下标
    //获取统计数据
    window.location.href = 'fen2.html';
  });
  // 5. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  //浏览器窗口大小变化时，重置报表大小
  $(window).resize(function () {
    myChart.resize();

  });
})();

// 雷达图 左中
(function () {
  // 1实例化对象
  var myChart = echarts.init(document.querySelector(".radar .chart"));
  var option;

  option = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: [{
      type: 'category',
      data: ['2016年','2017年','2018年','2019年','2020年'],
      axisLabel: {
        color: "rgba(255,255,255,1)",
        fontSize: "10"
      },
    }],
    yAxis: [{
      type: 'value',
      splitNumber: 4,
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#DDD'
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#333"
        },
      },
      nameTextStyle: {
        color: "#999"
      },
      splitArea: {
        show: false
      },
      axisLabel: {
        color: "rgba(255,255,255,1)",
        fontSize: "10"
      },
    }],
    series: [{
      name: '贫困人口（万人）',
      type: 'line',
      data: [372, 280.32, 155.12, 30.83, 0],
      markPoint: {
        symbolSize: 60,
        label:{
          color: "rgb(96, 171, 251)",
          show: true,
          fontSize: 30,
        },
        data: [
          { type: 'min', name: 'Min' }
        ],
        fontSize: 10
      },
      lineStyle: {
        normal: {
          width: 8,
          color: {
            type: 'linear',

            colorStops: [{
              offset: 0,
              color: '#A9F387' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#48D8BF' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          },
          shadowColor: 'rgba(72,216,191, 0.3)',
          shadowBlur: 10,
          shadowOffsetY: 20
        }
      },
      itemStyle: {
        normal: {
          color: '#fff',
          borderWidth: 10,
          /*shadowColor: 'rgba(72,216,191, 0.3)',
          shadowBlur: 100,*/
          borderColor: "#A9F387"
        }
      },
      smooth: true
    }]
  };
  myChart.on('click', function () {
    //获取统计数据
    window.location.href = 'fen4.html';
  });
  // 3. 把配置项给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 柱状图2  首页右上角柱状图
(function () {


  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2. 指定配置和数据
  var option;

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: 'rgba(9, 24, 48, 0.5)',
      borderColor: 'rgba(75, 253, 238, 0.4)',
      textStyle: {
        color: '#CFE3FC',
      },
      borderWidth: 1,
    },
    legend: [
      {
        data: ['贵州'],
        top: '25',
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
        top: '25',
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
        top: '25',
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
          fontSize: 10
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
            color: 'rgba(120, 160, 236, 1)'
          },
          symbol: ['none', 'arrow'],
          symbolSize: [5, 12],
          symbolOffset: [0, 10]
        },
        axisLabel: {
          interval: 0,
          color: 'rgba(207, 227, 252, 1)'
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
          formatter: '{value} %'
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

  //4.点击柱状图跳转
  myChart.on('click', function (params) {
    //获取统计数据
    window.location.href = '3D.html';
  });
  //4.点击柱状图跳转
  myChart.on('click', function () {
    //获取统计数据
    window.location.href = 'fen1.html';
  });
  // 5. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  //浏览器窗口大小变化时，重置报表大小
  $(window).resize(function () {
    myChart.resize();

  });
})();

// 饼形图1  首页左下角
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  // 2.指定配置
  var option;
  option = {
    title : {
      x:'center'
    },
    color: ['#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
    tooltip : {
      trigger: 'item',
    },
    toolbox: {
      show : true,
      feature : {
        mark : {show: true},
        dataView : {show: true, readOnly: false},
        magicType : {
          show: true,
          type: ['pie', 'funnel']
        },
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    calculable : true,
    series : [
      {
        type:'pie',
        radius : [25, 100],

        roseType : 'area',
        data:[
          {value:34618, name:'2001'},
          {value:46128, name:'2004'},
          {value:123247, name:'2007'},
          {value:151644, name:'2010'},
          {value:172564, name:'2013'},
          {value:191626, name:'2016'},
          {value:204723, name:'2019'}
        ]
      }
    ]
  }
  // 3. 把配置给实例对象
  myChart.setOption(option);

  //4.点击柱状图跳转
  myChart.on('click', function () {
    //获取统计数据
    window.location.href = 'fen.html';
  });

  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  //浏览器窗口大小变化时，重置报表大小
  $(window).resize(function () {
    myChart.resize();

  });
})();

// 折线图 右下
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));

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
        color: "rgba(255,255,255,.5)",
        fontSize: "15"
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
        color: "rgba(255,255,255,.6) ",
      },
    },
    yAxis: {
      type: 'category',
      data: ['2015', '2016', '2017', '2018', '2019'],
      axisLabel: {
        color: "rgba(255,255,255,.6) ",
      },
    },
    series: [
      {
        name: '科研服务（法人单位数）',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [5710, 6650, 9234, 11100, 11836]
      },
      {
        name: '研究与实验发展人员（人）',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [40516, 45222, 52746, 63689, 67285]
      },
      {
        name: '科研机构数（个）',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [482, 741, 744, 842, 993]
      },
      {
        name: '申请专利数（件）',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [5756, 6856, 1037, 11324, 13772]
      },
    ]
  };
  myChart.on('click', function () {
    //获取统计数据
    window.location.href = 'fen5.html';
  });

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  //浏览器窗口大小变化时，重置报表大小
  $(window).resize(function () {
    myChart.resize();

  });
})();

// 饼形图2 工作职位类别模块  首页右中
(function () {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var option;

  option = {
    legend: {
      top: "20",
      x: "center",
      textStyle: {
        fontSize: 16,
        color: "rgba(101, 213, 255, 1)"
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
        fontSize: 16,
        align: "left"
      }
    },
    grid: {
      right: "5%",
      top: "20%",
      left: "5%",
      bottom: "5%",
      containLabel: true
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
          fontSize: 10
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
            fontSize: 10
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
  }

  myChart.on('click', function () {
    //获取统计数据
    window.location.href = 'fen3.html';
  });
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  //浏览器窗口大小变化时，重置报表大小
  $(window).resize(function () {
    myChart.resize();

  });
})();

// 地图模块
(function () {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var citydata = [{
    name: "贵阳市",
    value: 2042.15
  },
    {
      name: "六盘水市",
      value: 728.22
    },
    {
      name: "遵义市",
      value: 1971.75
    },
    {
      name: "安顺市",
      value: 540.80
    },
    {
      name: "毕节市",
      value: 1019.23
    },
    {
      name: "铜仁市",
      value: 702.01
    },
    {
      name: "黔西南布依族苗族自治州",
      value: 683.28
    },
    {
      name: "黔东南苗族侗族自治州",
      value: 549.44
    },
    {
      name: "黔南布依族苗族自治州",
      value: 838.60
    },
  ];

  var yMax = 2000;
  var dataShadow = [];

  var resultdata0 = [];
  var titledata = [];
  var bartop10 = [];


  function NumDescSort(a, b) {
    return b.value - a.value;
  }

  function NumAsceSort(a, b) {
    return a.value - b.value;
  }

// 先进行一次降序排序，找出最大的前十个
  citydata.sort(NumDescSort);

  for (var i = 0; i < 9; i++) {
    var top = {
      name: citydata[i].name,
      value: citydata[i].value
    };
    bartop10.push(top);
    dataShadow.push(yMax);
  }

  bartop10.sort(NumAsceSort);
  for (var i = 0; i < bartop10.length; i++) {
    titledata.push(bartop10[i].name);
  }

  var option = {
    title: [{
      show: false,
    },
      {
        show: true,
        text: '2021年上半年各市（州）生产总值情况',
        left:'10%',
        top:48,
        textStyle: {
          color: '#ffffff',
          fontSize: 20
        }
      }
    ],
    tooltip: {
      trigger: "item"
    },
    legend: {
      show: false
    },
    grid: {
      // 仅仅控制条形图的位置
      show: true,
      containLabel: false,
      right: 40,
      top: 50,
      bottom: 30,
      width: '20%'
    },
    visualMap: {
      type: 'continuous',
      min: 0,
      max: 2000,
      text: ['多', '少'],
      textStyle: {
        color: '#ffffff',
        fontSize: 12
      },
      color: "rgb(255,255,255)",
      seriesIndex: [0, 2],
      dimension: 0,
      realtime: false,
      left: 0,
      itemWidth: 20,
      itemHeight: 100,
      calculable: true,
      inRange: {
        color: ['rgba(159,205,253,0.50)', '#60ACFC'],
        symbolSize: [100, 100]
      },
      outOfRange: {
        color: ['#ffffff'],
        symbolSize: [100, 100]
      },
    },
    toolbox: {
      show: false
    },

    xAxis: [{
      type: "value",
      position: 'top',
      inside: false,
      axisLabel: {
        color: "rgb(255,255,255)",
        show: false
      },
      splitLine: {
        show: false
      },
      margin: 10
    }],
    yAxis: [{
      name:'单位亿元',
      type: "category",
      boundaryGap: true,
      axisLine: {
        show: false
      },
      axisLabel: {
        color: "rgb(255,255,255)",
        fontSize:15,
        align: "right",
        margin: 10,
        showMaxLabel: true,
      },
      data: titledata
    }],

    series: [{
      name: "2021上半年GDP总量",
      type: "map",
      mapType: "guizhou",
      left: '100',
      width: '60%',
      roam: 'move',
      mapValueCalculation: "sum",
      zoom: 1,
      selectedMode: false,
      showLegendSymbol: false,
      label: {
        normal: {
          textStyle: {
            color: '#ffffff'
          }
        },
        emphasis: {
          textStyle: {
            color: '#234EA5'
          }
        }
      },
      itemStyle: {
        normal: {
          areaColor: '#EEEEEE',
          borderColor: '#FFFFFF'
        },
        emphasis: {
          areaColor: '#E5F39B'
        }
      },
      data: citydata
    },
      {
        name: "背景",
        type: "bar",
        roam: false,
        visualMap: false,
        itemStyle: {
          color: "#eeeeee",
          opacity: 0.5
        },
        label: {
          show: false
        },
        emphasis: {
          itemStyle: {
            color: "#eeeeee",
            opacity: 0.5
          },
          label: {
            show: false
          },
        },
        silent: true,
        barWidth: 18,
        barGap: '-100%',
        data: dataShadow,
        animation: false
      },
      {
        name: "GDP",
        type: "bar",
        roam: false,
        visualMap: false,
        // itemStyle: {
        //   color: "#60ACFC"
        // },
        barWidth: 18,
        label: {
          normal: {
            show: true,
            fontSize: 12,
            position: 'insideLeft'
          },
          emphasis: {
            show: true
          }
        },
        data: bartop10
      }

    ]
  }

  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  // window.addEventListener("resize", function () {
  //     myChart.resize()
  // }

  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  //浏览器窗口大小变化时，重置报表大小
  $(window).resize(function () {
    myChart.resize();

  });
})();