var map_obj = null;

function cbEmpInPostSummary(json) {
    alert('cbEmpInPostSummary');
    alert(json);

    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var lchar = 0;
        var zchar = 0;
        $.each(json.data, function (i, item) {
            // 异常
            $.each(item.inPostYesRate, function (j, ipyr) {
                $('#y_proportion').html(ipyr.proportion);
                $("#y_proportion").attr("title", ipyr.totalNum);
                lchar = ipyr.proportion;
            })
            // 正常
            $.each(item.inPostNoRate, function (k, ipnr) {
                $('#n_proportion').html(ipnr.proportion);
                $("#n_proportion").attr("title", ipnr.totalNum);
                zchar = ipnr.proportion;
            })
        })
        scaleMap2('h-guard', 'h-ltwig', 'h-rtwig', substringChar(lchar), substringChar(zchar));

        postInfoOverview();
    } else {
        alert(json.message);
    }
}

function cbPostInfoOverview(json) {

    alert('cbPostInfoOverview');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        $.each(json.data, function (i, item) {
            // TODO 怎样调用showMap方法.
            // item.phoneNum; // 查看详情需要
            // item.post; // 查看详情需要
            // item.latitudeAndLongitud;
            // item.isAbnormal;
            // item.postAbnormalTime;
            console.log(item.phoneNum);
            console.log(item.post);
            console.log(item.latitudeAndLongitud);
            console.log(item.isAbnormal);
            console.log(item.postAbnormalTime);

            // map_obj.XXXX = '';
        })
        // TODO 需要传递值.
        postInfoOverviewPng('宽度、高度', '放大级别', '经度、纬度');
    } else {
        alert(json.message);
    }
}

function cbEmpInPostAbnormalCauseAnalysis(json) {

    alert('cbEmpInPostAbnormalCauseAnalysis');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var lchar = 0;
        var zchar = 0;
        var rchar = 0;
        $.each(json.data, function (i, item) {
            if (item.postAbnormalType == '岗位变动') {
                $('#job_changes').html(item.proportion);
                $("#job_changes").attr("title", item.totalNum);
                lchar = item.proportion;
            }
            if (item.postAbnormalType == '离职') {
                $('#leave').html(item.proportion);
                $("#leave").attr("title", item.totalNum);
                zchar = item.proportion;

            }
            if (item.postAbnormalType == '其他') {
                $('#other').html(item.proportion);
                $("#other").attr("title", item.totalNum);
                rchar = item.proportion;
            }
        })
        scaleMap3('map-onguard', 'h-ltwig', 'h-ztwig', 'h-rtwig', substringChar(lchar), substringChar(zchar), substringChar(rchar));
    } else {
        alert(json.message);
    }
}

function cbViewEmpDetails(json) {

    alert('cbViewEmpDetails');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        $.each(cb.data, function (i, item) {
            $('#detail_postName').html(item.postName);// 岗位	postName	必填	String
            $('#detail_phoneNum').html(item.phoneNum);// 手机号	phoneNum	必填	String	明文传输
            $('#detail_cumulativeWorkDate').html(item.cumulativeWorkDate);// 累计工作时长	cumulativeWorkDate	必填	String
            $('#detail_onTheJobRate').html(item.onTheJobRate);// 在岗率	onTheJobRate	必填	String	百分比
            $('#detail_region').html(item.region); // 负责区域	region	必填	String
            // item.isAbnormal; // 在岗是否异常	isAbnormal	必填	String	是/否
        })
    } else {
        alert(json.message);
    }
}

function cbEmpWorkEfficiencyPercentage(json) {

    alert('cbEmpWorkEfficiencyPercentage');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var dataname = new Array();
        var data = new Array();
        var topdata = new Array();
        $.each(json.data, function (i, item) {
            dataname[i] = item.assessment;
            data[i] = item.proNum;
            topdata[i] = substringChar(item.proportion);
        })
        changeColumar('h-jobpote', dataname, data, topdata);
    } else {
        alert(json.message);
    }
}

function cbPostInfoOverviewPng(json) {

    alert('cbPostInfoOverviewPng');
    alert(json);
    if (checkCallBackJsonIsNotNull(json)) {
        // TODO 返回的图片怎么用.
        json.path; // 图片地址	path	必填	string	base64.
        // map_obj.path = json.path;

        empInPostAbnormalCauseAnalysis();
    } else {
        alert(json.message);
    }
}