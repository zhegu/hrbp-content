var apiReq = new Object();

/**
 * 2.1.21    用工规范整体占比图.
 */
function empSpecification() {
    api('/empNorm/empSpecification', 3001, 'cbEmpSpecification', JSON.stringify(apiReq));

    // 2017-5-16 15:35:30 ok
    // var jon = {
    //     "code": 200,
    //     "status": "SUCCEED",
    //     "message": "",
    //     "time": "2017-4-08 18:28:18",
    //     "trace": "",
    //     "authToken": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
    //     "data": [
    //         {
    //             "normYesRate": [
    //                 {
    //                     "proportion": "20%",
    //                     "totalNum": "160"
    //                 }
    //             ]
    //         },
    //         {
    //             "normNoRate": [
    //                 {
    //                     "proportion": "80%",
    //                     "totalNum": "600"
    //                 }
    //             ]
    //         }
    //     ]
    // };
    // cbEmpSpecification(jon);
}

/**
 * 2.1.22    各地区用工规范情况排名.
 */
function regionSpecificationRanking() {
    api('/empNorm/regionSpecificationRanking', 3001, 'cbRegionSpecificationRanking', JSON.stringify(apiReq));

    // 2017-5-16 16:11:33 ok
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
    // cbRegionSpecificationRanking(jon);

}

function normIndexApi(json) {
    // 1.顶部数据填充
    getHead(json, 'normIndexClick');
    // 2.
    apiReq = getApiReq(json);
    empSpecification();
}

function normIndexClick(region2, region3, post, month) {
    apiReq = clickApi(region2, region3, post, month);
    empSpecification();
}