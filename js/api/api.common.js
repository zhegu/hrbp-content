var projectDomain = 'https://www.ixiaoru.com/bigdata-hrbp-service';
var DATE_YYYYMMDD = 'yyyyMMdd';
var DATE_MONTH_YYYYMM = 'yyyyMM'
var CTSI_API_JSON;

/**
 * 比例图2.
 *
 * @param id
 * @param leftname
 * @param centername
 * @param lchar
 * @param zchar
 */
function scaleMap2(id, leftname, centername, lchar, zchar) {
    h_scale({
        idname: id,
        leftname: leftname,
        centername: centername,
        lchar: lchar,
        zchar: zchar
    });
}

/**
 * 比例图3.
 *
 * @param id
 * @param leftname
 * @param centername
 * @param rightname
 * @param lchar
 * @param zchar
 * @param rchar
 */
function scaleMap3(id, leftname, centername, rightname, lchar, zchar, rchar) {
    h_scale({
        idname: id,
        leftname: leftname,
        centername: centername,
        rightname: rightname,
        lchar: lchar,
        zchar: zchar,
        rchar: rchar
    });
}

/**
 * 柱状图-多柱.
 *
 * @param id
 * @param dataName
 * @param data
 * @param topData
 */
function changeColumar(id, dataName, data, topData) {
    columnar({
        idname: id,
        dataname: dataName,
        leftData: data,
        rightData: topData,
        splitArea: true,
        topshow: false,
        nameone: "异常",
        nametwo: "在岗",
    });
}

/**
 * 柱状图-多柱.
 *
 * @param id
 * @param dataName
 * @param data
 * @param topData
 */
function changeColumar3(id, dataName, data, topData, data3) {
    columnar({
        idname: id,
        dataname: dataName,
        leftData: data,
        rightData: topData,
        threeData: data3,
        splitArea: true,
        topshow: false,
        nameone: "异常",
        nametwo: "在岗",
    });
}
/**
 * 柱状图-多柱.
 *
 * @param id
 * @param dataName
 * @param data
 * @param topData
 */
function changeColumar5(id, dataName, data, topData,data3,data4,data5) {
    columnar({
        idname: id,
        dataname: dataName,
        leftData: data,
        rightData: topData,
        threeData: data3,
        fourData: data4,
        fiveData: data5,
        splitArea: true,
        topshow: false,
        nameone: "异常",
        nametwo: "在岗",
    });
}

/**
 * 柱状图-占比.
 *
 * @param title
 * @param id
 * @param dataName 汉字/n人数
 * @param data 占比.
 * @param allNum 总人数.
 */
function changeHColumar(title, id, dataName, data) {
    h_columar({
        title: title,  //标题
        idname: id,  // 定义div的id
        dataname: dataName, //底部显示的字
        data: data,  //下面的数据的参数
        topshow: false,  //是否在頂部顯示數值
        nameone: "异常",  //深色参数名字
        nametwo: "在岗"  //浅色参数名字
    });
}

/**
 * 饼状图-4.
 *
 * @param v1 高.
 * @param v2 中.
 * @param v3 低.
 * @param v4
 */
function changeHRing4(v1, v2, v3, v4) {
    h_ring({
        name: "h-ring",
        data: [
            {value: v1},
            {value: v2},
            {value: v3},
            {value: v4}
        ]
    });
}
/**
 * 饼状图-5.
 *
 * @param v1 一线.
 * @param v2 二线.
 * @param v3 三线.
 * @param v4 四线.
 * @param v5 五线.
 */
function changeHRing5(v1, v2, v3, v4, v5) {
    h_ring({
        name: "h-ring",
        color: ['#e66440', '#f2883b', '#9aabd2', '#68738c', '#3c424f'],
        data: [
            {value: v1},
            {value: v2},
            {value: v3},
            {value: v4},
            {value: v5}
        ]
    });
}

/**
 * 头部区域.
 *
 * @param data
 */
function changeHRegionArea(data, callBack) {
    h_region(data, {
        overallId: "droplDown", //点击弹出框的父盒子的ID名
        developDrop: "h-header", //这是点击顶部信息弹出框的类名
        developIcon: "h-lhead",
        leftDrop: "h-leftDrop", //左侧弹出的的类名  市区的类名
        rightDrop: "h-rightDrop",//右侧弹出的类名  详情区域的类名
        closeDrop: "h-closedrop" //关闭页面的类名  属于默认关闭搜索，只做关闭用
    }, callBack);
}

/**
 * 头部岗位.
 *
 * @param data
 */
function changeHRegionPost(data, callBack) {
    h_region(data, {
        overallId: "personnelDown", //点击弹出框的父盒子的ID名
        developDrop: "h-header", //这是点击顶部信息弹出框的类名
        developIcon: "h-chead",
        leftDrop: "base-leftDrop", //左侧弹出的的类名  市区的类名
        rightDrop: "base-rightDrop",//右侧弹出的类名  详情区域的类名
        closeDrop: "base-closedrop" //关闭页面的类名  属于默认关闭搜索，只做关闭用
    }, callBack);
}

/**
 * 头部时间.
 *
 * @param data
 */
function changeMonths(data, callBack) {
    h_region(data, {
        overallId: "personnelDown", //点击弹出框的父盒子的ID名
        developDrop: "h-header", //这是点击顶部信息弹出框的类名
        developIcon: "h-chead",
        leftDrop: "base-leftDrop", //左侧弹出的的类名  市区的类名
        rightDrop: "base-rightDrop",//右侧弹出的类名  详情区域的类名
        closeDrop: "base-closedrop" //关闭页面的类名  属于默认关闭搜索，只做关闭用
    }, callBack);
}


/**
 * @param url String地址.
 * @param type Int类型.
 * @param callBack String回调方法名.
 * @param params String json形式的字符串.
 * @returns {*}
 */
function api(url, type, callBack, params) {
    console.log('api[url:' + url + ' type:' + type + ' callBacl:' + callBack + ' params:' + params + ']');
    if (checkAndroid()) {
        window.getDataFromNative.javaMethod(projectDomain + url, type, callBack, params);
    } else if (checkIos()) {
        window.webkit.messageHandlers.getDataFromNative.postMessage({
            url: projectDomain + url,
            type: type,
            callback: callBack,
            params: params
        });
    } else {
        alert('无法识别设备');
    }
}

function getBasicInformation(callBack) {
    api(null, 1001, callBack, null);
}

function getHead(json, callBack) {
    // 三个顶级值
    $('#region').html(json.regionalScope[0].region1);
    $('#post').html(json.postList[0]);
    $('#month').html(json.months[0]);
    // 三个多级选择
    changeHRegionArea(json.regionalScope);
    changeHRegionPost(json.postList);
    changeMonths(json.months);

}

function getPhoneAndPost(json) {
    var obj = new Object();
    obj.phoneNum = json.baseInfo.userAccountNum;
    obj.postName = json.baseInfo.position;
    return obj;
}

function getArea(json) {
    var obj = new Object();
    obj.province = json.baseInfo.province;
    obj.city = json.baseInfo.city;
    obj.district = json.baseInfo.district;
    obj.street = json.baseInfo.street;
    return obj;
}

function getAreaAndGrid(json) {
    var obj = getArea(json);
    obj.grid = json.baseInfo.grid;
    return obj;
}

function getAreaAndGridAndPost(json) {
    var obj = getAreaAndGrid(json);
    obj.post = json.baseInfo.position;
    ;
    return obj;
}

function getAreaAndGridAndPostName(json) {
    var obj = getAreaAndGrid(json);
    obj.postName = json.baseInfo.position;
    return obj;
}

/**
 * 获取正常比例.
 *
 * @param y_proportion
 * @param n_proportion
 * @returns {number}
 */
function getRProportion(y_proportion, n_proportion) {
    var r_proportion = 0;
    if (null != y_proportion && null != n_proportion) {
        r_proportion = 100 - (Number(y_proportion) + Number(n_proportion));
    }
    return r_proportion;

}

function getToday(str) {
    // return $.datepicker.formatedDate(str, new Date());
    return new Date().Format(str);
}

function checkAndroid() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    return isAndroid;
}
function checkIos() {
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    return isiOS;
}

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function checkJsonIsNotNull(json) {
    if (null != json && '' != json) {
        return true;
    }
    return false;
}

function checkJosnData(code) {
    if (code == 200) {
        return true;
    }
    return false;
}

function checkJsonDateIsNotNull(data) {
    if (null != data) {
        return true;
    }
    return false;
}

function checkCallBackJsonIsNotNull(json) {
    if (checkJsonIsNotNull(json) && checkJosnData(json.code)) {
        return true;
    }
    return false;
}

function substringChar(str) {
    return str.substring(0, str.length - 1);
}

function getProportion(v1, v2) {
    return parseFloat((Number(v1) / Number(v2)) * 100);
}

/**
 * 获取二级区域.
 *
 * @returns {Array}
 */
function getRegion2() {
    var array = new Array();
    if (checkJsonIsNotNull(CTSI_API_JSON.regionalScope)) {
        $.each(CTSI_API_JSON.regionalScope, function (i, item) {
            array[i] = item.region2;
        })
    }
    return array;
}
function getPostList() {
    if (checkJsonIsNotNull(CTSI_API_JSON.postList)) {
        return CTSI_API_JSON.postList;
    }
    return '';
}
function getMonths() {
    if (checkJsonIsNotNull(CTSI_API_JSON.months)) {
        return CTSI_API_JSON.months;
    }
    return '';
}

function getApiReq(json) {
    var obj = getAreaAndGrid(json)
    obj.post = json.postList[0];
    obj.date = json.months[0];
    return obj;
}

function clickApi(region2, region3, post, month) {
    var obj = new Object();
    obj.province = CTSI_API_JSON.baseInfo.province;
    obj.post = post;
    obj.date = month;

    // 省级别（省、市、区县），剩下的都是市（市、区县、街道），区县（区县、街道），街道（街道）
    if (CTSI_API_JSON.baseInfo.userMaxPermission == 1) {
        obj.city = region2;
        obj.district = region3;
    } else if (CTSI_API_JSON.baseInfo.userMaxPermission == 5) { // 网格，网格不为空区域4项必填
        obj.city = CTSI_API_JSON.baseInfo.city;
        obj.district = CTSI_API_JSON.baseInfo.district;
        obj.street = CTSI_API_JSON.baseInfo.street;
        obj.grid = region2;
    } else {
        obj.city = CTSI_API_JSON.baseInfo.city;
        obj.district = region2;
        obj.street = region3;
    }
    return obj;
}


/**  **/

function warningValue() {
    // 2.1.44	各地区岗位变动情况预警值
    api('/mobilityAnalysis/warningValue', 3001, 'cbWarningValue', JSON.stringify(apiReq));
}

function cbWarningValue(json) {
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        $.each(json.data, function (i, item) {
            $('#warningValue').html(item.warningValue);
        })
    } else {
        alert(json.message);
    }
}

function getRegionByRegion2(region2) {
    $.each(CTSI_API_JSON.regionalScope, function (i, item) {
        if (item.region2 == region2) {
            return item;
        }
    })
}
function checkContrastRegionByPermission(region) {
    var obj = new Object();
    obj.province = CTSI_API_JSON.baseInfo.province;

    var objTmp = getRegionByRegion2(region);
    if (CTSI_API_JSON.baseInfo.userMaxPermission == 1) { // 省-比较区域是-市
        obj.city = region;
    }
    if (CTSI_API_JSON.baseInfo.userMaxPermission == 2) { // 市-比较区域是-区县
        obj.city = objTmp.region1;
        obj.district = region;
    }
    if (CTSI_API_JSON.baseInfo.userMaxPermission == 3 || CTSI_API_JSON.baseInfo.userMaxPermission == 4) { // 区县-比较区域是-街道
        obj.city = CTSI_API_JSON.baseInfo.city;
        obj.district = objTmp.region1;
        obj.street = region;
    }
    if (CTSI_API_JSON.baseInfo.userMaxPermission == 5) { // 网格-比较区域是-网格（网格不为空：省、市区、县、街道都不能为空）
        obj.city = CTSI_API_JSON.baseInfo.city;
        obj.district = CTSI_API_JSON.baseInfo.district;
        obj.street = CTSI_API_JSON.baseInfo.street;
        obj.city = region;
    }
    return obj;
}

function getContrastAreaArray(type, region) {
    if (type == 1) {
        var regionStr = null;
        var regionStrTmp = null;
        $.each(region, function (i, item) {
            if (null != regionStr) {
                regionStr += "," + item;
            } else {
                regionStr = item;
                regionStrTmp = item;
            }
        })
        return checkContrastRegionByPermission(regionStrTmp);
    } else {
        return checkContrastRegionByPermission(region);
    }
}

function getContrastPostArray(type, post) {
    var postStr = null;
    if (type == 2) {
        $.each(post, function (i, item) {
            if (null != postStr) {
                postStr += "," + item;
            } else {
                postStr = item;
            }
        })
    } else {
        postStr = post;
    }
    return postStr;
}

function getContrastMonthArray(type, month) {
    var monthStr = null;
    if (type == 3) {
        $.each(month, function (i, item) {
            if (null != monthStr) {
                monthStr += "," + item;
            } else {
                monthStr = item;
            }
        })
    } else {
        monthStr = month;
    }
    return monthStr;
}

function getContrastCompareTypeByType(type) {
    if (type == 1) {
        // 区域对比的数据是：当前区域信息中的第二级数据.
        if (CTSI_API_JSON.baseInfo.userMaxPermission == 1) {
            return 'city';
        }
        if (CTSI_API_JSON.baseInfo.userMaxPermission == 2) {
            return 'district';
        }
        if (CTSI_API_JSON.baseInfo.userMaxPermission == 3 || CTSI_API_JSON.baseInfo.userMaxPermission == 4) {
            return 'street';
        }
    }
    if (type == 2) {
        return 'post';
    }
    if (type == 3) {
        return 'date';
    }
}