/**
 * Created by Administrator on 2017/4/27.
 */

// leave 的js
function h_ring(obj) {   //这是圆圈形状的图标
    if(obj == undefined){
        obj = {};
    }
    var chart = document.getElementById(obj.idname || 'h-ring');
    var echart = echarts.init(chart);
    option = {
        tooltip: {

            formatter: "{d}%"
        },

        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['55%', '85%'],
                selectedMode: 'single',
                color: obj.color || ['#ca2424', '#f2883b', '#68738c', '#3c424f'],
                label: {
                    normal: {
                        position: 'inner',
                        formatter: '{d}%',
                        textStyle: {
                            color: '#fff',
                            // fontWeight: 'bold',
                            fontSize: 12
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:obj.data || [
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'}
                ]
            }
        ]
    };
    echart.setOption(option);
}
function h_columar(obj) { //这是长方形柱状图
    if(obj == undefined){
        obj = {};
    }
    var chart = document.getElementById(obj.idname || 'h-columnar');
    var echart = echarts.init(chart);
    console.log(obj);
    option = {
        title: {
            subtext: obj.title || '单位 ：人数',
            x : "left",
            y : "-18",
        },
        tooltip: {
            trigger: 'axis',
        },

        xAxis: [{
            type: 'category',
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "splitArea": {
                "show": false
            },
            "axisLabel":{
                interval: 0
            },
            data: obj.dataname || ['装维','装维','装维','装维','装维'],
        }],
        yAxis: [{
            "type": "value",
            splitLine: {
                show: true
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitArea: {
                show: obj.splitArea || false
            }
        }],
        series: [ {
            name : obj.nameone || "初始人数",
            type: 'bar',
            stack: '总量',
            barWidth: 13,
            itemStyle: {
                normal: {
                    color: '#df5e39',
                    "barBorderRadius": 0,
                    "label": {
                        "show": false,

                    }
                }
            },
            data: obj.data || [23,25,35,40,60],

        },
            {
                "name": obj.nametwo || "人流增长",
                "type": "bar",
                "stack": "总量",
                "itemStyle": {
                    "normal": {
                        "color": "#3c424f",
                        "barBorderRadius": 0,
                        "label": {
                            "show": obj.topshow || false,
                            "position": "top",

                        },

                    }
                },
                "data": function(){
                    var arr = [];
                    var num = 0;
                    for(var i=0; i<obj.data.length; i++){
                        num = 100 - obj.data[i];
                        arr.push(num);
                    }
                    return arr;
                }()
            }]
    };

    echart.setOption(option);
}

//这是对比的柱状图
function columnar(obj) {
    if(obj == undefined){
        obj = {};
    }
    var chart = document.getElementById(obj.idname || 'h-columnar');
    var echart = echarts.init(chart);
    option = {
        title: {
            subtext: obj.title || '单位 ：人数',
            x : "left",
            y : "-18",
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: obj.dataname || ['新虹桥', '中山公园', '虹桥', '镇宁路', '天山古北'],
            axisTick: {
                show: false
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitArea: {
                show: obj.splitArea || false
            }
        }],
        series: [{
            name: obj.nameone || '包租费',
            type: 'bar',
            barWidth: 13,
            data: obj.leftData || [20, 12, 31, 34, 31]
        }, {
            name: obj.nametwo || '装修费',
            type: 'bar',
            barWidth: 13,
            data: obj.rightData || [10, 20, 5, 9, 3]
        }]
    };
    echart.setOption(option);
}

// 这是 change 的图表js  圆饼图表
function h_round(obj) {
    if(obj == undefined){
        obj = {};
    }
    var chart = document.getElementById(obj.idname ||'h-rounds');
    var echart = echarts.init(chart);
    option = {
        tooltip: {
            trigger: "item",
            formatter: "{d}%",
            top : "5%"
        },
        label: {
            normal: {
                formatter: "{d}%",
                position: "insideTopRight",

            }
        },
        labelLine: {
            normal: {
                smooth: .6
            }
        },
        series: [{
            type: "pie",
            radius : [0, 50],
            center : ['45%', '40%'],
            data: obj.data || [{
                value: 24,
            }, {
                value: 18,

            }, {
                value: 58,

            }],
            label: {
                normal: {
                    position: 'inner',
                    offset: [,100],
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 12
                    }
                }
            }
        }],
        color : obj.color || ["#797979","#d8d8d8"]
    };
    echart.setOption(option);
}

// 这是direction页面的js
function h_basemi() {
    var chart = document.getElementById('h-bsemi');
    var echart = echarts.init(chart);
    var data=[{value:38, name:'一线城市'},
        {value:17, name:'二线城市'},
        {value:22, name:'三线城市'},
        {value:6, name:'四线城市'},
        {value:17, name:'五线城市'}];
    var a=0;
    for(var i=0; i<data.length; i++)
    {
        a+=data[i].value;
    }
    data.push({value:a, name:'__other', itemStyle:{normal:{color:'rgba(0,0,0,0)'}}});
    console.log(data);
    option = {
        title : {

        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series : [
            {
                name: '详情',
                type: 'pie',
                startAngle:-180,
                radius : '55%',
                center: ['50%', '60%'],
                data:data,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    echart.setOption(option);
}


function h_region(data,obj) {


    //进入页面加载时循环创建左侧点击二级分类
    for(var i = 0; i < data.length; i++){
        $("."+ obj.leftDrop).append("<p>"+ data[i].area+"</p>");
    }
    var leftval = $("."+ obj.leftDrop+" p").eq(0).html(); //代表左侧点击进入时的第一个值，也是左侧获取的值
    var rightval, //代表右侧获取的值
        leftvalindex = 0,
        rightindex;
    $("."+ obj.leftDrop+" p").eq(0).addClass("leftdropstyle");
    $("."+ obj.rightDrop).append("<p>全部"+ data[0].area + "</p>");
    $("."+ obj.rightDrop +" p").eq(0).addClass("rightdropstyle");

    //进入列表后循环创建第一个左侧选择的右侧详细列表
    for(var j=0; j<data[0].street.length; j++){
        $("."+ obj.rightDrop).append("<p>"+ data[0].street[j]+"</p>");
    }

    //点击左侧大区域选择的点击事件
    $("."+ obj.leftDrop+" p").on("touchend",function () {
        var index = $(this).index();
        $("."+ obj.rightDrop).html("");
        $("."+ obj.leftDrop+" p").eq(index).addClass("leftdropstyle").siblings().removeClass("leftdropstyle");
        leftval = $("."+ obj.leftDrop+" p").eq(index).html();

        // 判断右侧第一个岗位人员上面显示是否为全部人员，是就去掉全部，不是就加上全部
        if(data[index].area != "全部人员"){
            $("."+ obj.rightDrop).append("<p>全部"+ data[index].area +"</p>");
        }else {
            $("."+ obj.rightDrop).append("<p>"+ data[index].area +"</p>");
        }

        //点击时创建相对应点击左侧的详细列表
        for(var j=0; j<data[index].street.length; j++){
            $("."+ obj.rightDrop).append("<p>"+ data[index].street[j]+"</p>");
        }

        //判断左侧是否点击过，若点击过就将 样式：rightdropstyle 附上 若不是则将左侧默认的第一个值设置为空
        if(leftvalindex == index){
            $("."+ obj.rightDrop +" p").eq(rightindex).addClass("rightdropstyle");
        }else {
            rightval = "";
        }
        leftvalindex = index;
        $("."+ obj.rightDrop +" p").eq(0).addClass("rightdropstyle");
    });

    //这是点击右侧详细列表时的所获取的值，点击时需要响应的发送请求，回调函数
    $("."+ obj.rightDrop).on("touchend","p",function () {
        var index = $(this).index();
        $("."+ obj.rightDrop +" p").eq(index).addClass("rightdropstyle").siblings().removeClass("rightdropstyle");
        rightindex = index;
        rightval = $("."+ obj.rightDrop+" p").eq(index).html();
        $("#"+obj.overallId).stop().fadeToggle();
        $(".h-header").css("border-bottom","1px solid #D7D7D7");
        $(".h-header").css("background-image","");
        $("."+obj.developDrop+" .icon-xiala").removeClass("icon-shangla");

        //在此可定义回调函数 并返回获取点击的值
        // console.log(leftval);
        // console.log(rightval);
    });

    //这是点击顶部三个区块的点击事件  让相对应的三个区域
    $(".h-header div").on("touchend",function () {

        var index = $(this).index();
        var i = $(".h-header .icon-xiala").index();

        //判断点击区块的索引让相对应的选择区显示
        if(index == 0){  //显示的是 省市级 的区域条件查询
            // console.log($("#droplDown").css("display"));

            $("#droplDown").css("display","block").siblings().css("display","none");
            $(".h-header").css("background-image","url(../../img/positionChangeContrast/contrastSwipeBg1.png)");
            $(".h-header").css("border-bottom","none");
            $(".h-lhead span").addClass("icon-shangla").parent().siblings().children().removeClass("icon-shangla");


        }else if(index == 1){ //显示的是岗位人员的条件查询
            $("#personnelDown").css("display","block").siblings().css("display","none");
            $(".h-header").css("background-image","url(../../img/positionChangeContrast/contrastSwipeBg2.png)")
            $(".h-header").css("border-bottom","none");
            $(".h-chead span").addClass("icon-shangla").parent().siblings().children().removeClass("icon-shangla");
            // console.log(index);
        }else if(index == 2){
            $("#dateDropDown").css("display","block").siblings().css("display","none");
            $(".h-header").css("background-image","url(../../img/positionChangeContrast/contrastSwipeBg3.png)");
            $(".h-header").css("border-bottom","none");
            $(".h-chead span").addClass("icon-shangla").parent().siblings().children().removeClass("icon-shangla");
            // $(".post-drop div").stop().fadeToggle().siblings().fadeout();
        }
        // console.log(index);

    });
    $("#daysDate").on("click",function(){
        $(this).addClass("leftdropstyle").siblings().removeClass("leftdropstyle");

    });
    $("#monthDate").on("click",function(){
        $(this).addClass("leftdropstyle").siblings().removeClass("leftdropstyle");
    });
    //这是点击下面遮罩层区域让选择消失，表示取消选择
    $("."+ obj.closeDrop).on("click",function () {
        $("#"+obj.overallId).stop().fadeToggle();
        $("."+obj.developDrop+" .icon-xiala").removeClass("icon-shangla");
        $(".h-header").css("border-bottom","1px solid #D7D7D7");
        $(".h-header").css("background-image","");
    })

}

//这是点击让时间选择框消失的函数
$(".data-closedrop").on("click",function () {
    $("#dateDropDown").stop().fadeToggle();
    $("#personnelDown").stop().fadeToggle();
})

// function unusual() {
//
// }

function h_scale(obj) { //这是页面展示时进度条的显示 三级页面使用
    //使用 jquery 的 animate为相对应的进度条赋值
    $("#"+obj.idname+" ."+obj.leftname).animate({"width":obj.lchar+"%"},400);
    $("#"+obj.idname+" ."+obj.centername).animate({"width":obj.zchar+"%"},400);
    var num = 1;
    var num1 = 1;
    var num2 = 1;
    //第一个使用 定时器为其按时加载其中时间
    var timeout = setInterval(function () {
        if(num <= obj.lchar){
            $("#"+obj.idname+" ."+obj.leftname).html((num ++) + "%");
        }
    },400/obj.lchar);
    //第二个使用 定时器为其按时加载其中时间
    var timeout2 = setInterval(function () {
        if(num1 <= obj.zchar){
            $("#"+obj.idname+" ."+obj.centername).html((num1 ++)+"%");
        }
    },400/obj.zchar);

    //第三个因其不确定，判断是否传递第三个的数值 若没有第三个，则不执行
    if(obj.rchar != undefined){
        $("#"+obj.idname+" ."+obj.rightname).animate({"width":obj.rchar+"%"},400);
        var timeout2 = setInterval(function () {
            if(num2 <= obj.rchar){
                $("#"+obj.idname+" ."+obj.rightname).html((num2 ++)+"%");
            }
        },400/obj.rchar);
    }


}
//这是没有赋值的进度条，二级页面使用
function h_scale1(obj) { //这是页面展示时进度条的显示
    $("#"+obj.idname+" ."+obj.leftname).animate({"width":obj.lchar+"%"},400);
    $("#"+obj.idname+" ."+obj.centername).animate({"width":obj.zchar+"%"},400);

}