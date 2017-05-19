function cbEmpPostOverallSituation(json) {
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var y_proportion = 0;
        var n_proportion = 0;
        $.each(json.data, function (i, item) {
            // 异常
            $.each(item.inPostYesRate, function (i, iptr) {
                $('#y_totalNum').html(iptr.totalNum);
                y_proportion = substringChar(iptr.proportion);
            })
            // 稳定
            $.each(item.inPostNoRate, function (i, ipnr) {
                $('#n_totalNum').html(ipnr.totalNum);
                n_proportion = substringChar(ipnr.proportion);
            })
        })
        scaleMap2('h-unusprog', 'h-llwig', 'h-zlwig', y_proportion, n_proportion);

        postAbnormalRanking();
    } else {
        alert(json.message);
    }
}

function cbPostAbnormalRanking(json) {
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var dataName = new Array();
        var data = new Array();
        $.each(json.data, function (i, item) {
            dataName[i] = item.region + '\n' + Number(item.totalNum);
            data[i] = getProportion(item.abnormalNum, item.totalNum);
        })
        changeHColumar('百分比', 'h-norchart', dataName, data);

        warningValue();
    } else {
        alert(json.message);
    }
}