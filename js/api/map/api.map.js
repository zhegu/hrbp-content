function mapApi(json) {

    alert('mapApi');
    alert(json);
    alert(json.baseInfo.province);
    CTSI_API_JSON = json;
    empInPostSummary();
}

/**
 * 2.1.1    员工在岗情况概述.
 *
 */
function empInPostSummary() {
    alert('empInPostSummary');
    var obj = getAreaAndGridAndPost(CTSI_API_JSON);
    obj.date = getToday(DATE_YYYYMMDD);
    api('/panorama/empInPostSummary', 3001, 'cbEmpInPostSummary', JSON.stringify(obj));

    // 2017-5-16 11:20:29 ok
    // var jon = {
    //     "code": 200,
    //     "status": "SUCCEED",
    //     "message": "",
    //     "time": "2017-4-08 18:28:18",
    //     "data": [
    //         {
    //             "inPostYesRate": [
    //                 {
    //                     "proportion": "30%",
    //                     "totalNum": "63"
    //                 }
    //             ],
    //             "inPostNoRate": [
    //                 {
    //                     "proportion": "70%",
    //                     "totalNum": "742"
    //                 }
    //             ]
    //         }
    //     ]
    // };
    // cbEmpInPostSummary(jon);

}

/**
 * 2.1.2    在岗情况概览.
 */
function postInfoOverview() {
    var obj = getAreaAndGrid(CTSI_API_JSON);
    obj.date = getToday(DATE_YYYYMMDD);
    api('/panorama/postInfoOverview', 3001, 'cbPostInfoOverview', JSON.stringify(obj));
}

/**
 * 2.1.4    在岗异常原因分析.
 */
function empInPostAbnormalCauseAnalysis() {
    var obj = getAreaAndGrid(CTSI_API_JSON);
    obj.date = getToday(DATE_YYYYMMDD);
    api('/panorama/empInPostAbnormalCauseAnalysis', 3001, 'cbEmpInPostAbnormalCauseAnalysis', JSON.stringify(obj));

    // 2017-5-16 11:30:57 ok
    // var jon = {
    //     "code": 200,
    //     "status": "SUCCEED",
    //     "message": "",
    //     "time": "2017-4-08 18:28:18",
    //     "trace": "",
    //     "authToken ": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
    //     "data": [
    //         {
    //             "postAbnormalType": "岗位变动",
    //             "totalNum": "3",
    //             "proportion": "16%"
    //         },
    //         {
    //             "postAbnormalType": "离职",
    //             "totalNum": "12",
    //             "proportion": "68%"
    //         },
    //         {
    //             "postAbnormalType": "其他",
    //             "totalNum": "3",
    //             "proportion": "16%"
    //         }
    //     ]
    // };
    //
    // cbEmpInPostAbnormalCauseAnalysis(jon);
}

/**
 * 2.1.3    在岗情况概览-查看员工详情.
 */
function viewEmpDetailsCB(phone, post) {
    var obj = new Object();
    obj.phoneNum = phone;
    obj.postName = post;
    obj.date = getToday(DATE_YYYYMMDD);
    api('/panorama/viewEmpDetails', 3001, 'cbViewEmpDetails', JSON.stringify(obj));
}

/**
 * 2.1.20    工作效能百分比.
 */
function empWorkEfficiencyPercentageCB() {
    var obj = getAreaAndGridAndPostName(CTSI_API_JSON);
    obj.date = getToday(DATE_YYYYMMDD).substring(0, 4);
    api('/empEfficiency/empWorkEfficiencyPercentage', 3001, 'cbEmpWorkEfficiencyPercentage', JSON.stringify(obj));

    // var jon = {
    //     "code": 200,
    //     "status": "SUCCEED",
    //     "message": "",
    //     "time": "2017-4-08 18:28:18",
    //     "trace": "",
    //     "authToken": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
    //     "data": [
    //         {
    //             "assessment": "高效\n",
    //             "proNum": "10",
    //             "proportion": "10%"
    //         },
    //         {
    //             "assessment": "勤奋",
    //             "proNum": "4",
    //             "proportion": "15%"
    //         },
    //         {
    //             "assessment": "慵懒",
    //             "proNum": "5",
    //             "proportion": "25%"
    //         },
    //         {
    //             "assessment": "低效",
    //             "proNum": "8",
    //             "proportion": "20%"
    //         },
    //         {
    //             "assessment": "普通",
    //             "proNum": "9",
    //             "proportion": "30%"
    //         }
    //     ]
    // };
    // cbEmpWorkEfficiencyPercentage(jon);


}

/**
 * 2.1.29    返回PNG接口.
 */
function postInfoOverviewPng(widthHeight, level, latLng) {
    var obj = new Object()
    obj.widthHeight = widthHeight;
    obj.level = level;
    obj.latLng = latLng;
    api('/panorama/postInfoOverviewPng', 3001, 'cbPostInfoOverviewPng', JSON.stringify(obj));
}
