// function cbUserAuthInfo(json) {
//     if (checkJsonIsNotNull(json)) {
//         var cb = JSON.parse(json);
//         if (checkJosnData(cb.code)) {
//             if (checkJsonDateIsNotNull(cb.data)) {
//                 var dataname = new Array();
//                 var data = new Array();
//                 var topdata = new Array();
//                 $.each(cb.data, function (i, item) {
//                     dataname[i] = item.assessment;
//                     data[i] = item.proNum;
//                     topdata[i] = item.proportion;
//                 })
//
//             }
//         } else {
//             alert(cb.message);
//         }
//     }
// }

function cbEmpSpecification(json) {
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var y_proportion;
        var n_proportion;
        var r_proportion;
        $.each(json.data, function (i, item) {
            if (i == 0) {
                // 用工规范为“是”
                $.each(item.normYesRate, function (i, nyr) {
                    $('#y_totalNum').html(nyr.totalNum);
                    y_proportion = substringChar(nyr.proportion);
                })
            }
            if (i == 1) {
                // 用工规范为“否”
                $.each(item.normNoRate, function (i, nnr) {
                    $('#n_totalNum').html(nnr.totalNum);
                    n_proportion = substringChar(nnr.proportion);
                })
            }
            if (i == 2) {
                // 用工提醒
                $.each(item.normRemind, function (i, nr) {
                    // nr.totalNum;
                    r_proportion = substringChar(nr.proportion);
                })
            }
        })
        scaleMap3('emp_specification', 'h-ltwig', 'h-ztwig', 'h-rtwig', n_proportion, r_proportion, y_proportion);

        regionSpecificationRanking();
    } else {
        alert(json.message);
    }
}

function cbRegionSpecificationRanking(json) {
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var dataName = new Array();
        var data = new Array();
        $.each(json.data, function (i, item) {
            dataName[i] = item.region + '\n' + Number(item.totalNum); // 区域\n用工规范总人数
            data[i] = substringChar(item.proportion);
            // item.nonStandardNum; // 用工规范为“否”总人数	nonStandardNum	必填	String
        })
        changeHColumar('不同规范百分比', 'h-norchart', dataName, data);
    } else {
        alert(json.message);
    }
}