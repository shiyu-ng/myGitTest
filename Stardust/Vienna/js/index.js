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
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2016年', '2017年', '2018年', '2019年', '2020年'],
      axisLabel: {
        color: "rgba(255,255,255,1)",
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: "rgba(255,255,255,1)",
      },
    },
    series: [
      {
        data: [372, 280.32, 155.12, 30.83, 0],
        markPoint: {
          symbolSize: 50,
          label:{
            show: true,
          },
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ],
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
      data: ['贵州', '全国', '占比'],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "15"
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
          color: "rgba(255,255,255,.6)"
        }
      }
    ],
    yAxis: [

      {
        type: 'value',
        name: '收入/百亿',
        min: 0,
        max: 600,
        interval: 50,
        axisLabel: {
          color: "rgba(255,255,255,.6)"
        }
      },
      {
        type: 'value',
        name: '占比',
        min: 0,
        max: 30,
        interval: 5,
        axisLabel: {
          formatter: '{value} %',
          color: "rgba(255,255,255,.6)"
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
  var option = {
    color: ["#FE642E", "#FE9A2E", "#F4FA58", "#01DFD7", "#8258FA"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    legend: {
      bottom: "0%",
      // 修改小图标的大小
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "15"
      }
    },
    series: [
      {
        name: "运输路线类型",
        type: "pie",
        // 这个radius可以修改饼形图的大小
        // radius 第一个值是内圆的半径 第二个值是外圆的半径
        radius: ["30%", "55%"],
        center: ["50%", "45%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 20//图形边缘弧度大小
        },
        // 图形上的文字
        label: {
          show: true
        },
        // 连接文字和图形的线是否显示
        labelLine: {
          show: true
        },
        data: [
          { value: 3753, name: "铁路运营里程" },
          { value: 204723, name: "公路里程" },
          { value: 7005, name: "高速公路" },
          { value: 3755, name: "内河航道里程" },
        ]
      }
    ]
  };

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

  // 3. 把配置给实例对象
  myChart.setOption(option);

  //4.点击柱状图跳转
  myChart.on('click', function () {
    //获取统计数据
    window.location.href = '3D.html';
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

    tooltip: {
      trigger: 'axis'
    },
    legend: {
      textStyle: {
        color: "rgba(255,255,255,1)",
        fontSize: "15"
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
      data: ['2015', '2016', '2017', '2018', '2019'],
      axisLabel: {
        color: "rgba(255,255,255,1)",
        fontSize: "10"
      },
    },
    yAxis: {
      type: 'value',
      min:30,
      max:42,
      axisLabel: {
        formatter: '{value} %',
        color: "rgba(255,255,255,1)",
        fontSize: 10
      },
    },
    series: [
      {
        name: '城市',
        type: 'line',
        color: "rgb(239,0,0)",
        data: [34, 33.2, 33, 32.4, 32.2],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
      },
      {
        name: '农村',
        type: 'line',
        color: "rgb(101,181,243)",
        data: [39.8, 38.7, 38, 36.9, 36.7],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
      },
    ]
  };
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
  var option = {

    tooltip: {

    },//鼠标放在地图上时，显示的内容及样式控制
    geo: {
      map: "guizhou",
      label: {
        normal: {
          show: true,
          formatter: function (val) {
            var area_content = '{a|' + val.name + '}' + '-' + '{b|' + val.data.value2 + '}';
            return area_content.split("-").join("\n");
          },//让series 中的文字进行换行
          rich: {
            a: {
              color: 'black'
            },
            b: {
              color: 'yellow',
              fontFamily: 'Microsoft YaHei',
              fontSize: 14,
            }
          },//富文本样式,就是上面的formatter中'{a|'和'{b|'
        },
        emphasis: {show: true}
      },//地图中文字内容及样式控制
      // 把中国地图放大了1.2倍
      zoom: 1.2,
      roam: true,
      itemStyle: {
        normal: {
          // 地图省份的背景颜色
          areaColor: "rgba(199,175,157,0.6)",
          borderColor: "#195BB9",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      },

    },

  };

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