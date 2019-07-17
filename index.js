function drawData(data) {
    var myChart = echarts.init(document.getElementById('canvas'));

    // 指定图表的配置项和数据
    var option = {
        xAxis: {},
        yAxis: {},
        series: [{
            symbolSize: 10,
            data: data,
            type: 'scatter'
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


function drawDeepData(data) {
    var myChart = echarts.init(document.getElementById('canvasDeep'));

    // 指定图表的配置项和数据
    var option = {
        xAxis: {},
        yAxis: {},
        series: [{
            symbolSize: 10,
            data: data,
            type: 'scatter'
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
