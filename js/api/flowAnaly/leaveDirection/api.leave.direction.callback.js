function cbEmpDimissionWhereabouts(json) {

    alert('cbEmpDimissionWhereabouts');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var y_proportion = 0;
        var n_proportion = 0;
        $.each(json.data, function (i, item) {
            if (i == 0) {
                // 工作地变更识别为“ 否”
                $.each(item.quitDirInRate, function (i, qdir) {
                    y_proportion = substringChar(qdir.proportion); // 占比	proportion	必填	String
                    $('#y_totalNum').html(qdir.totalNum);// 总人数	totalNum	必填	String
                })
            } else {
                // 工作地变更识别为“ 是”
                $.each(item.quitDirOutRate, function (i, qdor) {
                    n_proportion = substringChar(qdor.proportion); // 占比	proportion	必填	String
                    $('#n_totalNum').html(qdor.totalNum);// 总人数	totalNum	必填	String
                })
            }
        })
        scaleMap2('leave_direction_twig', 'h-llwig', 'h-zlwig', y_proportion, n_proportion)

        empDimissionCityDetails();
    } else {
        alert(json.message);
    }
}

function cbEmpDimissionCityDetails(json) {

    alert('cbEmpDimissionCityDetails');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var v1 = 0;
        var v2 = 0;
        var v3 = 0;
        var v4 = 0;
        var v5 = 0;
        $.each(json.data, function (i, item) {
            if (item.cityLevel == '一线城市') {
                v1 = substringChar(item.proportion);
            }
            if (item.cityLevel == '二线城市') {
                v2 = substringChar(item.proportion);
            }
            if (item.cityLevel == '三线城市') {
                v3 = substringChar(item.proportion);
            }
            if (item.cityLevel == '四线城市') {
                v4 = substringChar(item.proportion);
            }
            if (item.cityLevel == '五线城市') {
                v5 = substringChar(item.proportion);
            }
            // item.totalNum; // 总人数	totalNum	必填	String
        })
        changeHRing5(v1, v2, v3, v4, v5);
    } else {
        alert(json.message);
    }
}