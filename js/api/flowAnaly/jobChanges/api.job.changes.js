var apiReq = new Object();

function jobChangesApi(json) {
    getHead(json, 'jobChangeClick');
    apiReq = getApiReq(json);
    // 2.1.9	岗位变动整体占比图
    api('/mobilityAnalysis/positionChangeWhole', 3001, 'cbPositionChangeWhole', JSON.stringify(apiReq));
}
function regionPostChange() {
    // 2.1.10	各地区岗位变动情况排名
    api('/mobilityAnalysis/regionPostChange', 3001, 'cbRegionPostChange', JSON.stringify(apiReq));
}

function jobChangeClick(region2, region3, post, month) {
    apiReq = clickApi(region2, region3, post, month);
    // 2.1.9	岗位变动整体占比图
    api('/mobilityAnalysis/positionChangeWhole', 3001, 'cbPositionChangeWhole', JSON.stringify(apiReq));
}


// function jobChangesApi() {
//
//     // 2017-5-17 09:52:12 ok
//     // var jon = {
//     //     "code": 200,
//     //     "status": "SUCCEED",
//     //     "message": "",
//     //     "time": "2017-4-08 18:28:18",
//     //     "trace": "",
//     //     "authToken": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
//     //     "data": [
//     //         {
//     //             "inPostYesRate": [
//     //                 {
//     //                     "proportion": "30%",
//     //                     "totalNum": "63"
//     //                 }
//     //             ],
//     //             "inPostNoRate": [
//     //                 {
//     //                     "proportion": "70%",
//     //                     "totalNum": "742"
//     //                 }
//     //             ]
//     //         }
//     //     ]
//     // };
//     // cbPositionChangeWhole(jon);
//
//     // 2017-5-17 09:59:25 接口缺少返回值
//     // var jon = {
//     //     "code": 200,
//     //     "status": "SUCCEED",
//     //     "message": "",
//     //     "time": "2017-4-08 18:28:18",
//     //     "trace": "",
//     //     "authToken": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
//     //     "data": [
//     //         {
//     //             "region": "朝阳区",
//     //             "totalNum": "58"
//     //         },
//     //         {
//     //             "region": "东城区",
//     //             "totalNum": "48"
//     //         },
//     //         {
//     //             "region": "西城区",
//     //             "totalNum": "40"
//     //         },
//     //         {
//     //             "region": "通州区",
//     //             "totalNum": "38"
//     //         },
//     //         {
//     //             "region": "顺义区",
//     //             "totalNum": "28"
//     //         }
//     //     ]
//     // };
//     // cbRegionPostChange(jon);
//
//     // 2017-5-17 15:06:08 ok
//     // var jon = {
//     //         "code": 200,
//     //         "status": "SUCCEED",
//     //         "message": "",
//     //         "time": "2017-4-08 18:28:18",
//     //         "trace": "",
//     //         "data": [
//     //             {
//     //                 "warningValue": "49"
//     //             }
//     //         ]
//     //     }
//     // ;
//     // cbWarningValue(jon);
// }