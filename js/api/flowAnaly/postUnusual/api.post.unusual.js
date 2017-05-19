var apiReq = new Object();

function postUnusualApi(json) {

    // var jon = {
    //     "regionalScope": [
    //         {
    //             "region1": "连云港市",
    //             "region2": "海州区",
    //             "region3": "海州街道、幸福路街道、朐阳街道、洪门街道、新坝镇、锦屏镇、板浦镇、宁海街道、浦东街道、浦西街道、新东街道、新南街道、路南街道、新海街道、花果山街道、南城街道、云台街道、浦南镇；云台农场、南云台林场、岗埠农场"
    //         },
    //         {
    //             "region1": "连云港市",
    //             "region2": "连云区",
    //             "region3": "墟沟街道、海州湾街道、连云街道、连岛街道、板桥街道、徐圩街道、朝阳街道、云山街道、宿城街道、高公岛街道、中云街道、猴嘴街道、东辛农场"
    //         },
    //         {
    //             "region1": "连云港市",
    //             "region2": "赣榆区",
    //             "region3": "青口镇、柘汪镇、石桥镇、金山镇、黑林镇、厉庄镇、海头镇、塔山镇、赣马镇、班庄镇、城头镇、城西镇、宋庄镇、沙河镇、墩尚镇"
    //         }
    //     ],
    //     "postList": [
    //         "装维人员",
    //         "渠道人员",
    //         "全部人员"
    //     ],
    //     "months": [
    //         "2017.05",
    //         "2017.04",
    //         "2017.03",
    //         "2017.02",
    //         "2017.01",
    //         "2016.12",
    //         "2016.11",
    //         "2016.10",
    //         "2016.09",
    //         "2016.08",
    //         "2016.07",
    //         "2016.06"
    //     ],
    //     "baseInfo": {
    //         "name": "张三",
    //         "userAccountNum": "18500000000",
    //         "province": "江苏省",
    //         "city": "连云港市",
    //         "district": "",
    //         "street": "",
    //         "position": "总经理"
    //     }
    // };

    getHead(json, 'postUnusualClick');
    apiReq = getApiReq(json);
    // 2.1.12	员工在岗情况整体占比图
    api('/mobilityAnalysis/empPostOverallSituation', 3001, 'cbEmpPostOverallSituation', JSON.stringify(apiReq));

}
function postAbnormalRanking() {
    // 在岗异常时长	postAbnormalDuration	必填	String
    apiReq.postAbnormalDuration = ''; // TODO 获取页面默认值-时间
    // 2.1.13	在岗异常情况排名表
    api('/mobilityAnalysis/postAbnormalRanking', 3001, 'cbPostAbnormalRanking', JSON.stringify(obj));
}
function postUnusualClick(region2, region3, post, month) {
    apiReq = clickApi(region2, region3, post, month);
    // 2.1.12	员工在岗情况整体占比图
    api('/mobilityAnalysis/empPostOverallSituation', 3001, 'cbEmpPostOverallSituation', JSON.stringify(apiReq));
}


// function postUnusualApi() {
//     // 2017-5-17 10:04:33 ok
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
//     // cbEmpPostOverallSituation(jon);
//
//     // 2017-5-17 10:14:17 缺少参数.
//     // var jon = {
//     //     "code": 200,
//     //     "status": "SUCCEED",
//     //     "message": "",
//     //     "time": "2017-4-08 18:28:18",
//     //     "trace": "",
//     //     "authToken": "4cdbc040-657a-4847-b266-7e31d9e2c3d9",
//     //     "data": [
//     //         {
//     //             "region": "东城区",
//     //             "totalNum": "300",
//     //             "abnormalNum": "19"
//     //         },
//     //         {
//     //             "region": "西城区",
//     //             "totalNum": "320",
//     //             "abnormalNum": "29"
//     //         },
//     //         {
//     //             "region": "海淀区",
//     //             "totalNum": "300",
//     //             "abnormalNum": "19"
//     //         },
//     //         {
//     //             "region": "顺义区",
//     //             "totalNum": "100",
//     //             "abnormalNum": "19"
//     //         },
//     //         {
//     //             "region": "朝阳区",
//     //             "totalNum": "400",
//     //             "abnormalNum": "39"
//     //         }
//     //     ]
//     // };
//     // cbPostAbnormalRanking(jon);
//
// }



