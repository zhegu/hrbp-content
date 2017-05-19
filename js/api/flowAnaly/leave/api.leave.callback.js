function cbEmpDimissionProportion(json) {
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var v1 = 0;
        var v2 = 0;
        var v3 = 0;
        var v4 = 0;
        $.each(json.data, function (i, item) {
            // dataname[i] = item.quitInclinationType; // 离职倾向类型	quitInclination Type	必填	String	高/中/低
            // data[i] = item.peoNum; // 人数	peoNum	必填	String
            // proportion[i] = substringChar(item.proportion);// 占比	proportion	必填	String
            if (item.quitInclinationType == '高') {
                v1 = substringChar(item.proportion);
            }
            if (item.quitInclinationType == '中') {
                v2 = substringChar(item.proportion);
            }
            if (item.quitInclinationType == '低') {
                v3 = substringChar(item.proportion);
            }
            if (item.quitInclinationType == '无离职倾向') {
                v4 = substringChar(item.proportion);
            }
        })
        changeHRing(v1, v2, v3, v4);

        EmpDimissionInclination();
    } else {
        alert(json.message);
    }
}

function cbEmpDimissionInclination(json) {
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var dataName = new Array();
        var data = new Array();
        $.each(json.data, function (i, item) {
            dataName[i] = item.workEfficiency + '\n' + Number(item.totalNum); // 区域\n总人数
            data[i] = getProportion(item.turnoverInttalNum,item.totalNum); // 离职倾向总人数,总人数
        })
        changeHColumar('单位：人数', 'h-columnar', dataName, data);
    } else {
        alert(json.message);
    }
}