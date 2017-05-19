var apiReq = new Object();

function leaveDirectionApi(json) {
    getHead(json, 'leaveDirectionClick');
    apiReq = getApiReq(json);
    // 2.1.16	离职去向占比
    api('/mobilityAnalysis/empDimissionWhereabouts', 3001, 'cbEmpDimissionWhereabouts', JSON.stringify(apiReq));
}

function empDimissionCityDetails() {
    // 2.1.17	离职去往城市详情
    api('/mobilityAnalysis/empDimissionCityDetails', 3001, 'cbEmpDimissionCityDetails', JSON.stringify(apiReq));

}

function leaveDirectionClick(region2, region3, post, month) {
    apiReq = clickApi(region2, region3, post, month);
    // 2.1.16	离职去向占比
    api('/mobilityAnalysis/empDimissionWhereabouts', 3001, 'cbEmpDimissionWhereabouts', JSON.stringify(apiReq));
}

// function leaveDirectionApi(json) {
//     // 2017-5-17 10:28:16 ok
//     // var jon = {
//     //     "code": 200,
//     //     "status": "SUCCEED",
//     //     "message": "",
//     //     "time": "2017-4-08 18:28:18",
//     //     "trace": "",
//     //     "authToken": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
//     //     "data": [
//     //         {
//     //             "quitDirInRate": [
//     //                 {
//     //                     "proportion": "20%",
//     //                     "totalNum": "160"
//     //                 }
//     //             ]
//     //         },
//     //         {
//     //             "quitDirOutRate": [
//     //                 {
//     //                     "proportion": "80%",
//     //                     "totalNum": "600"
//     //                 }
//     //             ]
//     //         }
//     //     ]
//     // };
//     // cbEmpDimissionWhereabouts(jon);
//
//     // obj.postAbnormalDuration = '';// 在岗异常时长	postAbnormalDuration	必填	String
//     // // 2.1.17	离职去往城市详情
//     // api('/mobilityAnalysis/empDimissionCityDetails', 3001, 'cbEmpDimissionCityDetails', JSON.stringify(obj));
//
//     // 2017-5-17 10:40:19 ok
//     // var jon = {
//     //     "code": 200,
//     //     "status": "SUCCEED",
//     //     "message": "",
//     //     "time": "2017-4-08 18:28:18",
//     //     "trace": "",
//     //     "authToken": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
//     //     "data": [
//     //         {
//     //             "cityLevel": "一线城市",
//     //             "totalNum": "20",
//     //             "proportion": "10%"
//     //         },
//     //         {
//     //             "cityLevel": "二线城市",
//     //             "totalNum": "20",
//     //             "proportion": "15%"
//     //         },
//     //         {
//     //             "cityLevel": "三线城市",
//     //             "totalNum": "20",
//     //             "proportion": "25%"
//     //         },
//     //         {
//     //             "cityLevel": "四线城市",
//     //             "totalNum": "20",
//     //             "proportion": "5%"
//     //         },
//     //         {
//     //             "cityLevel": "五线城市",
//     //             "totalNum": "50",
//     //             "proportion": "45%"
//     //         }
//     //     ]
//     // };
//     // cbEmpDimissionCityDetails(jon);
// }


