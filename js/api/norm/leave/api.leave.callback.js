function cbWorkersDemobilizedProportion(json) {
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var y_proportion = 0;
        var n_proportion = 0;
        $.each(json.data, function (i, item) {
            // 离岗
            $.each(item.quitEmploymentYesRate, function (i, qeyr) {
                $('#y_totalNum').html(qeyr.totalNum);
                y_proportion = substringChar(qeyr.proportion);
            })
            // 稳定
            $.each(item.quitEmploymentNoRate, function (i, qenr) {
                $('#n_totalNum').html(qenr.totalNum);
                n_proportion = substringChar(qenr.proportion);
            })
        })
        scaleMap2('norm_leave_twig', 'h-llwig', 'h-zlwig', y_proportion, n_proportion);

        regionWorkersDemobilizedRanking();
    } else {
        alert(json.message);
    }
}

function cbRegionWorkersDemobilizedRanking(json) {
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var dataName = new Array();
        var data = new Array();
        $.each(json.data, function (i, item) {
            dataName[i] = item.region + '\n' + Number(item.totalNum);
            data[i] = substringChar(item.proportion);
            // item.nonStandardNum;// 用工规范为“离岗”总人数	nonStandardNum	必填	String
        })
        changeHColumar('离岗百分比', 'h-norchart', dataName, data);
    } else {
        alert(json.message);
    }
}