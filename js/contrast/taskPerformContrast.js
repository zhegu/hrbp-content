/**
 * Created by Administrator on 2017/5/19.
 */
$(document).ready(function () {
    var contrastType = 1; //对比类型
    var sites, post, time, type;
    //var areaList =  getRegion2(); //区域
    //var postList =  getPostList(); //岗位
    //var timeList =  getMonths(); //时间
    var areaList = ["西城区", "东城区", "西城区", "东城区", "西城区", "东城区"]; //区域
    var postList = ["装修人员", "维修人员", "其他人员"]; //岗位
    var timeList = ["2017.5", "2017.6", "2017.9"]; //时间
    //var getSite = localStorage.getItem("site"); //默认区域
    //var getPost = localStorage.getItem("getPost"); //默认岗位
    //var getTime = localStorage.getItem("getData"); //默认时间
    var getSite = "西城区"; //默认区域
    var getPost = "装修人员"; //默认岗位
    var getTime = "2017.6"; //默认时间
    var multiData = [], currentSingleSelectLeft = getPost, currentSingleSelectRight = getTime,
        multiSelectData = areaList, singleSelectLeft = postList, singleSelectRight = timeList;

    function createTitle(multiData, currentSingleSelectLeft, currentSingleSelectRight) {
        $(".ch_columar_title").css({"display": "block"});
        $(".columar-tip").css({"display": "block"});
        if (multiData.length == 0) {
            var multiString = '<span class="title-color"></span>';
        }
        else if (multiData.length == 1) {
            var multiString = '<span class="title-color">' + multiData[0] + '</span>';
        }
        else if (multiData.length == 2) {
            var multiString = '<span class="title-color">' + multiData[0] + '</span>与<span class="title-color">' + multiData[1] + '</span>';
        } else {
            var multiString = '<span class="title-color">' + multiData[0] + '</span>与<span class="title-color">' + multiData[1] + '</span>等' + multiData.length + '个区域';
        }
        $(".multiSelectName").html(multiString);
        $(".currentSingleLeftName").html(currentSingleSelectLeft);
        $(".currentSingleRightName").html(currentSingleSelectRight);
    }

    //列表切换
    $("#rightSelect .currentSelect").html(currentSingleSelectRight);
    $("#leftSelect .currentSelect").html(currentSingleSelectLeft);
    $('.contrastList li').on('click', function (e) {
        e.preventDefault();
        var i = $(this).index();
        $('.contrastList li').removeClass('currentOption').eq(i).addClass('currentOption');
        i = i + 1;
        $(".contrastList").css("background-image", "url(../../img/positionChangeContrast/contrastSwipeBg" + i + ".png)");
        $(".addAreaList").css("display", "none");
        $("#selectLeftArea").css("display", "none");
        $("#selectRightArea").css("display", "none");
        $(".addAreaList ul li").removeClass('selectedList');
        if (i == 1) {
            contrastType = 1;
            $("#columar-area").css("display", "none");
            $(".areaTitle").css("display", "block").siblings().css("display", "none");
            $(".multiSelect").children("li.selectedList").remove();
            $(".ch_columar_title").css({"display": "none"});
            $(".columar-tip").css({"display": "none"});
            multiSelectData = areaList;
            singleSelectLeft = postList;
            singleSelectRight = timeList;
            currentSingleSelectLeft = getPost;
            currentSingleSelectRight = getTime;
            $("#rightSelect .currentSelect").html(currentSingleSelectRight);
            $("#leftSelect .currentSelect").html(currentSingleSelectLeft);
            multiSelect();
            selectLeft();
            selectRight();
        } else if (i == 2) {
            contrastType = 2;
            $("#columar-area").css("display", "none");
            $(".ch_columar_title").css({"display": "none"});
            $(".columar-tip").css({"display": "none"});
            $(".stationTitle").css("display", "block").siblings().css("display", "none");
            $(".multiSelect").children("li.selectedList").remove();
            multiSelectData = postList;
            singleSelectLeft = areaList;
            singleSelectRight = timeList;
            currentSingleSelectLeft = getSite;
            currentSingleSelectRight = getTime;
            $("#leftSelect .currentSelect").html(currentSingleSelectLeft);
            $("#rightSelect .currentSelect").html(currentSingleSelectRight);
            multiSelect();
            selectLeft();
            selectRight();

        } else if (i == 3) {
            contrastType = 3;
            $("#columar-area").css("display", "none");
            $(".ch_columar_title").css({"display": "none"});
            $(".columar-tip").css({"display": "none"});
            $(".titleTitle").css("display", "block").siblings().css("display", "none");
            $(".multiSelect").children("li.selectedList").remove();
            multiSelectData = timeList;
            singleSelectLeft = areaList;
            singleSelectRight = postList;
            currentSingleSelectLeft = getSite;
            currentSingleSelectRight = getPost;
            $("#leftSelect .currentSelect").html(currentSingleSelectLeft);
            $("#rightSelect .currentSelect").html(currentSingleSelectRight);
            multiSelect();
            selectLeft();
            selectRight();
        }
    });
//多维度添加
    var num = 0;
    $(".addContrast").click(function () {
        num++;
        console.log(num);
        if (num % 2 != 0) {
            $(".addContrast .icon-xiala").removeClass("icon-xiala").addClass("icon-shangla");
            $(".addAreaList").css("display", "block");

        } else {
            $(".addContrast .icon-shangla").removeClass("icon-shangla").addClass("icon-xiala");
            $(".addAreaList").css("display", "none");
        }
        $("#selectLeftArea").css("display", "none");
        $("#selectRightArea").css("display", "none");
    });
//单维度选择
    var leftCount = 0, rightCount = 0;
    $("#leftSelect").click(function () {
        leftCount++;
        if (leftCount % 2 != 0) {
            $("#leftSelect .icon-xiala").removeClass("icon-xiala").addClass("icon-shangla");
            $("#selectLeftArea").css("display", "block");
        } else {
            $("#leftSelect .icon-shangla").removeClass("icon-shangla").addClass("icon-xiala");
            $("#selectLeftArea").css("display", "none");
        }
        $(".addAreaList").css("display", "none");
        $("#selectRightArea").css("display", "none");
    });
    $("#rightSelect").click(function () {
        rightCount++;
        if (rightCount % 2 != 0) {
            $("#rightSelect .icon-xiala").removeClass("icon-xiala").addClass("icon-shangla");
            $("#selectRightArea").css("display", "block");
        } else {
            $("#rightSelect .icon-shangla").removeClass("icon-shangla").addClass("icon-xiala");
            $("#selectRightArea").css("display", "none");
        }
        $("#selectLeftArea").css("display", "none");
        $(".addAreaList").css("display", "none");
    });

    //对比
    var leftData = ["75", "30",];  //异常人数
    var rightData = ["45", "135",]; //在岗人数
    multiSelect();
    selectLeft();
    selectRight();
    function multiSelect() {
        $(".addAreaList ul").children("li").remove();
        for (var j = 0; j < multiSelectData.length; j++) {
            var newDom = $("<li></li>");
            newDom.text(multiSelectData[j]);
            $(".addAreaList ul").append(newDom);
        }
    }

    $(".addAreaList ul").on("click", "li", function () {
        if ($(this).hasClass('selectedList')) {
            $(this).removeClass('selectedList');
        } else {
            $(this).addClass('selectedList');
        }
    });

    $(".btnOk").click(function () {
        $(".multiSelect").children("li.selectedList").remove();
        multiData = [];
        num = 0;
        var selectedDom = $(".addAreaList ul li.selectedList");
        for (var i = 0; i < selectedDom.length; i++) {
            var selectedDomValue = $(selectedDom[i]).html();
            multiData.push(selectedDomValue);
            var newDom = $("<li></li>");
            newDom.text(selectedDomValue);
            $(newDom).addClass('selectedList');
            $(".multiSelect").prepend(newDom);
        }
        $(".addAreaList").css("display", "none");
        $(".addContrast .icon-shangla").removeClass("icon-shangla").addClass("icon-xiala");
        jsonData();
        workEfficiencyContrast(sites, post, time, type);

        $("#columar-area").css("display", "block");
        columnars(multiData);
        createTitle(multiData, currentSingleSelectLeft, currentSingleSelectRight);
    });

    //传参设置
    function jsonData() {
        if (contrastType == 1) {
            sites = multiData;
            post = currentSingleSelectLeft;
            time = currentSingleSelectRight;
            type = 1;
        }
        if (contrastType == 2) {
            sites = currentSingleSelectLeft;
            post = multiData;
            time = currentSingleSelectRight;
            type = 2;
        }
        if (contrastType == 3) {
            sites = currentSingleSelectLeft;
            post = currentSingleSelectRight;
            time = multiData;
            type = 3;
        }
    }

    //单维选择
    function selectLeft() {
        $("#selectLeftArea ul").children("li").remove();
        for (var i = 0; i < singleSelectLeft.length; i++) {
            var newDom = $("<li></li>");
            if (singleSelectLeft[i] == currentSingleSelectLeft) {
                $(newDom).addClass('selectedList');
            }
            newDom.text(singleSelectLeft[i]);
            $("#selectLeftArea ul").append(newDom);
        }
    }

    $("#selectLeftArea ul").on("click", "li", function () {
        leftCount = 0;
        $("#leftSelect .icon-shangla").removeClass("icon-shangla").addClass("icon-xiala");
        var val = $(this).html();
        currentSingleSelectLeft = val;
        $("#leftSelect i").html(val);
        $('#selectLeftArea ul li').removeClass('selectedList');
        $(this).addClass('selectedList');
        jsonData();
        workEfficiencyContrast(sites, post, time, type);


        columnars(multiData);
        createTitle(multiData, currentSingleSelectLeft, currentSingleSelectRight);
        $("#selectLeftArea").css("display", "none");
    });

    function selectRight() {
        $("#selectRightArea ul").children("li").remove();
        for (var i = 0; i < singleSelectRight.length; i++) {
            var newDom = $("<li></li>");
            if (singleSelectRight[i] == currentSingleSelectRight) {
                $(newDom).addClass('selectedList');
            }
            newDom.text(singleSelectRight[i]);
            $("#selectRightArea ul").append(newDom);
        }
    }

    $("#selectRightArea ul").on("click", "li", function () {
        rightCount = 0;
        $("#rightSelect .icon-shangla").removeClass("icon-shangla").addClass("icon-xiala");
        var val = $(this).html();
        currentSingleSelectRight = val;
        $("#rightSelect i").html(val);
        $('#selectRightArea ul li').removeClass('selectedList');
        $(this).addClass('selectedList');
        jsonData();
        workEfficiencyContrast(sites, post, time, type);

        columnars(multiData);
        createTitle(multiData, currentSingleSelectLeft, currentSingleSelectRight);
        $("#selectRightArea").css("display", "none");
    });

    //条状图
    function columnars(multiData) {
        columnar({
            idname: "columar-area",
            dataname: multiData,
            leftData: leftData,
            rightData: rightData,
            splitArea: true,
            topshow: false,
            nameone: "异常",
            nametwo: "在岗",

        });
    }
});
