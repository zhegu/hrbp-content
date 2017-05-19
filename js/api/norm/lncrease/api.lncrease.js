var apiReq = new Object();

/**
 * 2.1.25    用工增岗整体占比图.
 */
function workersZengGangProportion() {
    api('/empNorm/WorkersZengGangProportion', 3001, 'cbWorkersZengGangProportion', JSON.stringify(apiReq));

    // 2017-5-17 09:18:24 ok
    // var jon = {
    //     "code": 200,
    //     "status": "SUCCEED",
    //     "message": "",
    //     "time": "2017-4-08 18:28:18",
    //     "trace": "",
    //     "authToken": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
    //     "data": [
    //         {
    //             "increasingEmploymentNoRate": [
    //                 {
    //                     "proportion": "20%",
    //                     "totalNum": "160"
    //                 }
    //             ],
    //             "increasingEmploymentYesRate": [
    //                 {
    //                     "proportion": "80%",
    //                     "totalNum": "600"
    //                 }
    //             ]
    //         }
    //     ]
    // };
    // cbWorkersZengGangProportion(jon);

}

/**
 * 2.1.26    各地区用工增岗情况排名.
 *
 */
function regionWorkersZengGangRanking() {
    api('/empNorm/regionWorkersZengGangRanking', 3001, 'cbRegionWorkersZengGangRanking', JSON.stringify(apiReq));

    // 2017-5-17 09:24:48 ok
    // var jon = {
    //     "code": 200,
    //     "status": "SUCCEED",
    //     "message": "",
    //     "time": "2017-4-08 18:28:18",
    //     "trace": "",
    //     "authToken": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
    //     "data": [
    //         {
    //             "region": "朝阳区",
    //             "nonStandardNum": "60",
    //             "totalNum": "3",
    //             "proportion": "5%"
    //         },
    //         {
    //             "region": "东城区",
    //             "nonStandardNum": "48",
    //             "totalNum": "12",
    //             "proportion": "25%"
    //         },
    //         {
    //             "region": "西城区",
    //             "nonStandardNum": "40",
    //             "totalNum": "3",
    //             "proportion": "5%"
    //         },
    //         {
    //             "region": "通州区",
    //             "nonStandardNum": "38",
    //             "totalNum": "3",
    //             "proportion": "5%"
    //         },
    //         {
    //             "region": "顺义",
    //             "nonStandardNum": "28",
    //             "totalNum": "12",
    //             "proportion": "27%"
    //         }
    //     ]
    // };
    // cbRegionWorkersZengGangRanking(jon);


}

function normIncreaseApi(json) {
    // 1.顶部数据填充
    getHead(json, 'normIncreaseClick');
    // 2.
    apiReq = getApiReq(json);
    workersZengGangProportion();
}

function normIncreaseClick(region2, region3, post, month) {
    apiReq = clickApi(region2, region3, post, month);
    workersZengGangProportion();
}