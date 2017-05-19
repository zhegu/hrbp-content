function cbPostAbnormalContrast(json) {

    alert('cbPostAbnormalContrast');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var dataName = new Array();
        var data = new Array();
        var topData = new Array();
        $.each(json.data.compareType, function (i, ct) {
            dataName[i] = ct;
        })
        $.each(json.data.data, function (j, d) {
            if (d.name == '异常') {
                $.each(d.value, function (k, d1) {
                    data[k] = d1;
                })
            }
            if (d.name == '正常') {
                $.each(d.value, function (l, d2) {
                    topData[l] = d2;
                })
            }
        })
        changeColumar('columar-area', dataName, data, topData);
    }
}
function cbWorkEfficiencyContrast(json) {

    alert('cbWorkEfficiencyContrast');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var dataName = new Array();
        var data1 = new Array();
        var data2 = new Array();
        var data3 = new Array();
        var data4 = new Array();
        var data5 = new Array();
        $.each(json.data.compareType, function (i, ct) {
            dataName[i] = ct;
        })
        $.each(json.data.data, function (j, d) {
            if (d.name == '高效') {
                $.each(d.value, function (k, d1) {
                    data1[k] = d1;
                })
            }
            if (d.name == '勤奋') {
                $.each(d.value, function (k, d2) {
                    data2[k] = d2;
                })
            }
            if (d.name == '普通') {
                $.each(d.value, function (k, d3) {
                    data3[k] = d3;
                })
            }
            if (d.name == '低效') {
                $.each(d.value, function (k, d4) {
                    data4[k] = d4;
                })
            }
            if (d.name == '慵懒') {
                $.each(d.value, function (k, d5) {
                    data5[k] = d5;
                })
            }
        })
        changeColumar5('columar-area', dataName, data1, data2, data3, data4, data5);
    }
}
function cbEmpStandardContrast(json) {

    alert('cbEmpStandardContrast');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var dataName = new Array();
        var data1 = new Array();
        var data2 = new Array();
        var data3 = new Array();
        $.each(json.data.compareType, function (i, ct) {
            dataName[i] = ct;
        })
        $.each(json.data.data, function (j, d) {
            if (d.name == '告警') {
                $.each(d.value, function (k, d1) {
                    data1[k] = d1;
                })
            }
            if (d.name == '提示') {
                $.each(d.value, function (l, d2) {
                    data2[l] = d2;
                })
            }
            if (d.name == '正常') {
                $.each(d.value, function (l, d3) {
                    data3[l] = d3;
                })
            }
        })

        changeColumar3('columar-area', dataName, data1, data2, data3);
    }
}
function cbEmpZangGangStandardContrast(json) {

    alert('cbEmpZangGangStandardContrast');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var dataName = new Array();
        var data = new Array();
        var topData = new Array();
        $.each(json.data.compareType, function (i, ct) {
            dataName[i] = ct;
        })
        $.each(json.data.data, function (j, d) {
            if (d.name == '稳定') {
                $.each(d.value, function (k, d1) {
                    data[k] = d1;
                })
            }
            if (d.name == '增岗') {
                $.each(d.value, function (l, d2) {
                    topData[l] = d2;
                })
            }
        })
        changeColumar('columar-area', dataName, data, topData);
    }
}
function cbEmpLiGangContrast(json) {

    alert('cbEmpLiGangContrast');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        var dataName = new Array();
        var data = new Array();
        var topData = new Array();
        $.each(json.data.compareType, function (i, ct) {
            dataName[i] = ct;
        })
        $.each(json.data.data, function (j, d) {
            if (d.name == '稳定') {
                $.each(d.value, function (k, d1) {
                    data[k] = d1;
                })
            }
            if (d.name == '增岗') {
                $.each(d.value, function (l, d2) {
                    topData[l] = d2;
                })
            }
        })
        changeColumar('columar-area', dataName, data, topData);
    }
}