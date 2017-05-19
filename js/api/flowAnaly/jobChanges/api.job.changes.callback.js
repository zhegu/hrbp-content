function cbPositionChangeWhole(json) {

    alert('cbPositionChangeWhole');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var y_proportion = 0;
        var n_proportion = 0;
        $.each(json.data, function (i, item) {
            // 稳定	inPostNoRate	必填	String
            $.each(item.inPostNoRate, function (i, ipor) {
                $('#y_totalNum').html(ipor.totalNum);
                y_proportion = substringChar(ipor.proportion);
            })
            // 变动	inPostYesRate	必填	String
            $.each(item.inPostYesRate, function (i, ipyr) {
                $('#n_totalNum').html(ipyr.totalNum);
                n_proportion = substringChar(ipyr.proportion);
            })
        })
        scaleMap2('h-unusprog', 'h-llwig', 'h-zlwig', n_proportion, y_proportion)

        regionPostChange();
    } else {
        alert(json.message);
    }
}

function cbRegionPostChange(json) {

    alert('cbRegionPostChange');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var dataName = new Array();
        var data = new Array();
        $.each(json.data, function (i, item) {
            dataName[i] = item.region + '\n' + Number(item.regionNum); // 区域\n区域人数
            data[i] = substringChar(item.proportion); // 占比
            // item.postYesNum; // 岗位变动识别为“是”人数	postYesNum	必填	string
        })
        changeHColumar('百分比', 'h-norchart', dataName, data)

        warningValue();
    } else {
        alert(json.message);
    }
}

