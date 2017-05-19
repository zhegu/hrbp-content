function cbWorkersZengGangProportion(json) {
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var y_proportion = 0;
        var n_proportion = 0;
        $.each(json.data, function (i, item) {
            // 增岗
            $.each(item.increasingEmploymentYesRate, function (i, iey) {
                $('#y_totalNum').html(iey.totalNum);
                y_proportion = substringChar(iey.proportion);
            })
            // 稳定
            $.each(item.increasingEmploymentNoRate, function (i, ien) {
                $('#n_totalNum').html(ien.totalNum);
                n_proportion = substringChar(ien.proportion);
            })
        })
        scaleMap3('norm_increase_twig', 'h-ltwig', 'h-ztwig', 'h-rtwig', y_proportion, n_proportion, getRProportion(y_proportion, n_proportion));

        regionWorkersZengGangRanking();
    } else {
        alert(json.message);
    }
}

function cbRegionWorkersZengGangRanking(json) {
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var dataName = new Array();
        var data = new Array();
        $.each(json.data, function (i, item) {
            dataName[i] = item.region + '\n' + Number(item.totalNum);
            data[i] = substringChar(item.proportion);
            // item.nonStandardNum;// 用工规范为“离岗”总人数	nonStandardNum	必填	String
        })
        changeHColumar('增岗百分比', 'h-norchart', dataName, data);
    } else {
        alert(json.message);
    }
}