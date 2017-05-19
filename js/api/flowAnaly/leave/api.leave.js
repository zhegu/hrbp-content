var apiReq = new Object();

function leaveApi(json) {
    getHead(json, 'leaveClick');
    apiReq = getApiReq(json);
    // 2.1.14	离职概率占比
    api('/mobilityAnalysis/empDimissionProportion', 3001, 'cbEmpDimissionProportion', JSON.stringify(apiReq));
}
function EmpDimissionInclination() {
    // 2.1.15	各类员工离职倾向占比
    api('/mobilityAnalysis/EmpDimissionInclination', 3001, 'cbEmpDimissionInclination', JSON.stringify(apiReq));

}

function leaveClick(region2, region3, post, month) {
    apiReq = clickApi(region2, region3, post, month);
    // 2.1.14	离职概率占比
    api('/mobilityAnalysis/empDimissionProportion', 3001, 'cbEmpDimissionProportion', JSON.stringify(apiReq));
}

// function leaveApi(json) {
//     // // 2017-5-16 16:24:37  2.1.14 ok
//     // var jon = {
//     //     "code": 200,
//     //     "status": "SUCCEED",
//     //     "message": "",
//     //     "time": "2017-4-08 18:28:18",
//     //     "trace": "",
//     //     "authToken": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
//     //     "data": [
//     //         {
//     //             "quitInclinationType": "高",
//     //             "peoNum": "10",
//     //             "proportion": "15%"
//     //         },
//     //         {
//     //             "quitInclinationType": "中",
//     //             "peoNum": "20",
//     //             "proportion": "20%"
//     //         },
//     //         {
//     //             "quitInclinationType": "低",
//     //             "peoNum": "15",
//     //             "proportion": "15%"
//     //         },
//     //         {
//     //             "quitInclinationType": "无离职倾向",
//     //             "peoNum": "45",
//     //             "proportion": "50%"
//     //         }
//     //     ]
//     // };
//     // cbEmpDimissionProportion(jon);
//
//     // 2017-5-17 10:21:18 接口返回参数与样例不符
//     // var jon = {
//     //     "code": 200,
//     //     "status": "SUCCEED",
//     //     "message": "",
//     //     "time": "2017-4-08 18:28:18",
//     //     "trace": "",
//     //     "authToken": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
//     //     "data": [
//     //         {
//     //             "quitInclinationType": "高效",
//     //             "totalNum": "10"
//     //         },
//     //         {
//     //             "quitInclinationType": "勤奋",
//     //             "totalNum": "4"
//     //         },
//     //         {
//     //             "quitInclinationType": "慵懒",
//     //             "totalNum": "5"
//     //         },
//     //         {
//     //             "quitInclinationType": "低效",
//     //             "totalNum": "8"
//     //         },
//     //         {
//     //             "quitInclinationType": "普通",
//     //             "totalNum": "9"
//     //         }
//     //     ]
//     // };
//     // cbEmpDimissionInclination(jon);
//
// }


