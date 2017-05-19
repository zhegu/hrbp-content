
/**
 * Created by Administrator on 2017/5/4.
 */

$(document).ready(function(){
    var multiData=[],singleLeft="装修人员",singleRight="2017年7月";
    function createTitle (multiData,singleLeft,singleRight){
        $(".ch_columar_title").css({"display":"block"});
        if(multiData.length ==0){
            $(".ch_columar_title").css({"display":"none"});
        }
        else if(multiData.length ==1){
            var multiString = '<span class="title-color">'+multiData[0]+'</span>';
        }
        else if(multiData.length ==2){
            var multiString = '<span class="title-color">'+multiData[0]+'</span>与<span class="title-color">'+multiData[1]+'</span>';
        }else{
            var multiString = '<span class="title-color">'+multiData[0]+'</span>与<span class="title-color">'+multiData[1]+'</span>等'+multiData.length+'个区域';
        }
        $(".multiSelectName").html(multiString);
        $(".currentSingleLeftName").html(singleLeft);
        $(".currentSingleRightName").html(singleRight);
    }

    //列表切换
    $('.contrastList li').on('click', function (e) {
        e.preventDefault();
        var i=$(this).index();
        $('.contrastList li').removeClass('currentOption').eq(i).addClass('currentOption');
        i=i+1;
        $(".contrastList").css("background-image","url(../../img/positionChangeContrast/contrastSwipeBg"+i+".png)");
        $(".addAreaList").css("display","none");
        $("#selectLeftArea").css("display","none");
        $("#selectRightArea").css("display","none");
        $(".addAreaList ul li").removeClass('selectedList');
        if(i==1){
            $(".areaTitle").css("display","block").siblings().css("display","none");
            singleLeft ="装修人员";
            singleRight ="2017年7月";
        }else if(i==2){
            $(".stationTitle").css("display","block").siblings().css("display","none");
            singleLeft = "朝阳区";
            singleRight = "2017年8月";

        }else if(i==3){
            $(".titleTitle").css("display","block").siblings().css("display","none");
            singleRight = "朝阳区";
            singleLeft ="装修人员";
        }
    });
//多维度添加
    var num =0;
    $(".addContrast").click(function(){
        num ++;
        if(num % 2 !=0){
            $(".addAreaList").css("display","block");

        }else{
            $(".addAreaList").css("display","none");
        }
        $("#selectLeftArea").css("display","none");
        $("#selectRightArea").css("display","none");
    });
//单维度选择
    $("#leftSelect").click(function(){
        $("#selectLeftArea").css("display","block");
        $(".addAreaList").css("display","none");
        $("#selectRightArea").css("display","none");
    });
    $("#rightSelect").click(function(){
        $("#selectRightArea").css("display","block");
        $("#selectLeftArea").css("display","none");
        $(".addAreaList").css("display","none");
    });



    //对比
    var multiSelectData = getRegion2();
    //var currentMultiSelect = ["朝阳区", "海淀区"]; //默认多选项
    var singleSelectLeft = getPostList();  //单选对比左
    var currentSingleSelectLeft = "渠道人员";  //默认单选对比左
    var singleSelectRight = getMonths(); //单选对比右
    var currentSingleSelectRight = "2017.02"; ///默认单选对比右
    var leftData = ["75", "30",];  //异常人数
    var rightData = ["45", "135",]; //在岗人数


    for(var j = 0;j<multiSelectData.length;j++){
        var newDom = $("<li></li>");
        newDom.text(multiSelectData[j]);
        $(".addAreaList ul").append(newDom);
    }
    $(".addAreaList ul li").click(function(){
        if($(this).hasClass('selectedList')){
            $(this).removeClass('selectedList');
        }else{
            $(this).addClass('selectedList');
        }
    });


    $(".btnOk").click(function(){
        $(".multiSelect").children("li.selectedList").remove();
        multiData=[];
        var selectedDom = $(".addAreaList ul li.selectedList" );
        for(var i = 0; i<selectedDom.length; i++){
            var selectedDomValue = $(selectedDom[i]).html();
            multiData.push(selectedDomValue);
            var newDom = $("<li></li>");
            newDom.text(selectedDomValue);
            $(newDom).addClass('selectedList');
            $(".multiSelect").prepend(newDom);
        }
        $(".addAreaList").css("display","none");
        createTitle(multiData,singleLeft,singleRight);
    });

    //单维选择
    $("#leftSelect .currentSelect").html(currentSingleSelectLeft);
    for(var i= 0;i<singleSelectLeft.length;i++){
        var newDom = $("<li></li>");
        if(singleSelectLeft[i] == currentSingleSelectLeft){
            $(newDom).addClass('selectedList');
        }
        newDom.text(singleSelectLeft[i]);
        $("#selectLeftArea ul").append(newDom);
    }
    $("#selectLeftArea ul li").click(function(){
        var val = $(this).html();
        singleLeft = val;
        $("#leftSelect i").html(val);
        $('#selectLeftArea ul li').removeClass('selectedList');
        $(this).addClass('selectedList');
        createTitle(multiData,singleLeft,singleRight);
        $("#selectLeftArea").css("display","none");
    });


    $("#rightSelect .currentSelect").html(currentSingleSelectRight);
    for(var i= 0;i<singleSelectRight.length;i++){
        var newDom = $("<li></li>");
        if(singleSelectRight[i] == currentSingleSelectRight){
            $(newDom).addClass('selectedList');
        }
        newDom.text(singleSelectRight[i]);
        $("#selectRightArea ul").append(newDom);
    }
    $("#selectRightArea ul li").click(function(){
        var val = $(this).html();
        singleRight = val;
        $("#rightSelect i").html(val);
        $('#selectRightArea ul li').removeClass('selectedList');
        $(this).addClass('selectedList');
        createTitle(multiData,singleLeft,singleRight);
        $("#selectRightArea").css("display","none");
    });


    //条状图
    columnar({
        idname: "columar-area",
        dataname:"",
        leftData: leftData,
        rightData: rightData,
        splitArea: true,
        topshow: false,
        nameone: "异常",
        nametwo: "在岗",

    });
    window.addEventListener("resize", function () {
        columnar({
            idname: "columar-area",
            dataname: "",
            leftData: leftData,
            rightData: rightData,
            splitArea: true,
            topshow: false,
            nameone: "异常",
            nametwo: "在岗",

        });
        option.chart.resize();
    });
});
