var apiReq = new Object();

/**
 * 2.1.23    用工离岗整体占比图.
 */
function workersDemobilizedProportion() {
    api('/empNorm/workersDemobilizedProportion', 3001, 'cbWorkersDemobilizedProportion', JSON.stringify(apiReq));

    // 2017-5-17 09:29:06 ok
    // var jon = {
    //     "code": 200,
    //     "status": "SUCCEED",
    //     "message": "",
    //     "time": "2017-4-08 18:28:18",
    //     "trace": "",
    //     "authToken": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
    //     "data": [
    //         {
    //             "quitEmploymentYesRate": [
    //                 {
    //                     "proportion": "20%",
    //                     "totalNum": "160"
    //                 }
    //             ],
    //             "quitEmploymentNoRate": [
    //                 {
    //                     "proportion": "80%",
    //                     "totalNum": "600"
    //                 }
    //             ]
    //         }
    //     ]
    // };
    // cbWorkersDemobilizedProportion(jon);

}

/**
 * 2.1.24    各地区用工离岗情况排.
 *
 * @param obj
 */
function regionWorkersDemobilizedRanking() {
    api('/empNorm/regionWorkersDemobilizedRanking', 3001, 'cbRegionWorkersDemobilizedRanking', JSON.stringify(apiReq));

    // 2017-5-17 09:35:59 ok
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
    //             "nonStandardNum": " 60",
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
    // cbRegionWorkersDemobilizedRanking(jon);

}

function normLeaveApi(json) {
    // 1.顶部数据填充
    getHead(json, 'normLeaveClick');
    // 2.
    apiReq = getApiReq(json);
    workersDemobilizedProportion();
}

function normLeaveClick(region2, region3, post, month) {
    apiReq = clickApi(region2, region3, post, month);
    workersDemobilizedProportion();
}