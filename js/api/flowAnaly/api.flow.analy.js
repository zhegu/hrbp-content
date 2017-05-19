var apiReq = new Object();
function flowAnalyApi(json) {
    CTSI_API_JSON = json;

    apiReq = getAreaAndGrid(json)
    apiReq.date = CTSI_API_JSON.months[0];

    // 2.1.5    岗位稳定指数.
    api('/mobilityAnalysis/positionStabilityIndex', 3001, 'cbPositionStabilityIndex', JSON.stringify(apiReq));
}

function empInPostIndex() {
    // 2.1.6    员工在岗指数.
    api('/mobilityAnalysis/empInPostIndex', 3001, 'cbEmpInPostIndex', JSON.stringify(apiReq));
}
function turnoverIntentionIndex() {
// 2.1.7    离职倾向指数.
    api('/mobilityAnalysis/turnoverIntentionIndex', 3001, 'cbTurnoverIntentionIndex', JSON.stringify(apiReq));
}
function remainInCity() {
// 2.1.8    留在本市指数.
    api('/mobilityAnalysis/remainInCity', 3001, 'cbRemainInCity', JSON.stringify(apiReq));
}

// function flowAnalyApi() {
//     // 2017-5-17 09:40:21 ok
//     // var jon = {
//     //     "code": 200,
//     //     "status": "SUCCEED",
//     //     "message": "",
//     //     "time": "2017-4-08 18:28:18",
//     //     "trace": "",
//     //     "authToken": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
//     //     "data": [
//     //         {
//     //             "index": "1"
//     //         }
//     //     ]
//     // };
//     // cbPositionStabilityIndex(jon);
//
//     // 2017-5-17 09:41:43 ok
//     // var jon = {
//     //     "code": 200,
//     //     "status": "SUCCEED",
//     //     "message": "",
//     //     "time": "2017-4-08 18:28:18",
//     //     "trace": "",
//     //     "authToken": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
//     //     "data": [
//     //         {
//     //             "index": "2"
//     //         }
//     //     ]
//     // };
//     // cbEmpInPostIndex(jon);
//
//     // 2017-5-17 09:43:01 ok
//     // var jon = {
//     //     "code": 200,
//     //     "status": "SUCCEED",
//     //     "message": "",
//     //     "time": "2017-4-08 18:28:18",
//     //     "trace": "",
//     //     "authToken": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
//     //     "data": [
//     //         {
//     //             "index": "3"
//     //         }
//     //     ]
//     // };
//     // cbTurnoverIntentionIndex(jon);
//
//     // 2017-5-17 09:44:46 ok
//     // var jon = {
//     //     "code": 200,
//     //     "status": "SUCCEED",
//     //     "message": "",
//     //     "time": "2017-4-08 18:28:18",
//     //     "trace": "",
//     //     "authToken": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
//     //     "data": [
//     //         {
//     //             "index": "4"
//     //         }
//     //     ]
//     // };
//     // cbRemainInCity(jon);
// }