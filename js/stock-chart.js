var dataProvider = [];

       $.getJSON('http://api.coindesk.com/v1/bpi/historical/close.json?start=2014-09-01&end=2016-09-01',function(returnData){
        console.log(returnData);
        $.each( returnData.bpi, function( key, value ) {

            var temp = key;
            dataProvider.push({
                date:key,
                value:value
            });
        });
        dataProvider.forEach(function(returnValue){
                console.log(returnValue);
        });
    });

    // chart2.addListener("dataUpdated", zoomChart2);

    // function zoomChart2(){
    //     chart2.zoomToDates(new Date(2012, 0, 2), new Date(2012, 0, 13));
    // }




$(document).ready(function(){

 var chart = AmCharts.makeChart("chartdiv", {
        "type": "serial",
        "theme": "light",
        "marginRight":80,
        "autoMarginOffset":20,
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "dataProvider": dataProvider,
        "valueAxes": [{
            "axisAlpha": 0,
            "guides": [{
                "fillAlpha": 0.1,
                "fillColor": "#888888",
                "lineAlpha": 0,
                "toValue": 16,
                "value": 10
            }],
            "position": "left",
            "tickLength": 0
        }],
        "graphs": [{
            "balloonText": "[[category]]<br><b><span style='font-size:14px;'>value:[[value]]</span></b>",
            "bullet": "round",
            "dashLength": 3,
            "colorField":"color",
            "valueField": "value"
        }],
        "trendLines": [{
            "finalDate": "2012-01-11 12",
            "finalValue": 19,
            "initialDate": "2012-01-02 12",
            "initialValue": 10,
            "lineColor": "#CC0000"
        }, {
            "finalDate": "2012-01-22 12",
            "finalValue": 10,
            "initialDate": "2012-01-17 12",
            "initialValue": 16,
            "lineColor": "#CC0000"
        }],
        "chartScrollbar": {
            "scrollbarHeight":2,
            "offset":-1,
            "backgroundAlpha":0.1,
            "backgroundColor":"#888888",
            "selectedBackgroundColor":"#67b7dc",
            "selectedBackgroundAlpha":1
        },
        "chartCursor": {
            "fullWidth":true,
            "valueLineEabled":true,
            "valueLineBalloonEnabled":true,
            "valueLineAlpha":0.5,
            "cursorAlpha":0
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "axisAlpha": 0,
            "gridAlpha": 0.1,
            "minorGridAlpha": 0.1,
            "minorGridEnabled": true
        },
        "export": {
            "enabled": true
         }
    });

     chart.addListener("dataUpdated", zoomChart);

    function zoomChart(){
        chart.zoomToDates(new Date(2014, 0, 2), new Date(2014, 0, 13));
    }


});