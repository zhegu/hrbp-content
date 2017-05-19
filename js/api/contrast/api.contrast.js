function postAbnormalContrast(region, post, month, type) {

    clickApi()
    var obj = new Object();
    obj.province = '';
    var region = getRegionByRegion2(region2);

    if (type == 1) {
        var regionStr = null;
        $.each(region, function (i, item) {
            if (null != regionStr) {
                regionStr += "," + item;
            } else {
                regionStr = item;
            }
        })

    }
    if (type == 2) {
        var postStr = null;
        $.each(post, function (i, item) {
            if (null != postStr) {
                postStr += "," + item;
            } else {
                postStr = item;
            }
        })
    }
    if (type == 3) {
        var monthStr = null;
        $.each(month, function (i, item) {
            if (null != monthStr) {
                monthStr += "," + item;
            } else {
                monthStr = item;
            }
        })
    }

    // 2.1.46	  在岗异常对比-区域对比/岗位对比/时间对
    api('/mobilityAnalysis/postAbnormalContrast', 3001, 'cbPostAbnormalContrast', JSON.stringify(obj));
}
function workEfficiencyContrast(region2, post, month) {
    // 2.1.47	员工工作效能评估对比-区域对比/岗位对比/时间对比
    api('/mobilityAnalysis/workEfficiencyContrast', 3001, 'cbWorkEfficiencyContrast', JSON.stringify(obj));
}
function empStandardContrast(region2, post, month) {
    // 2.1.48	用工规范对比-区域对比/岗位对比/时间对比
    api('/empNorm/empStandardContrast', 3001, 'cbEmpStandardContrast', JSON.stringify(obj));
}
function empZangGangStandardContrast(region2, post, month) {
    // 2.1.49	用工增岗对比-区域对比/岗位对比/时间对比
    api('/empNorm/empZangGangStandardContrast', 3001, 'cbEmpZangGangStandardContrast', JSON.stringify(obj));
}
function empLiGangContrast(region2, post, month) {
    // 2.1.50	用工离岗对比-区域对比/岗位对比/时间对比
    api('/empNorm/empLiGangContrast', 3001, 'cbEmpLiGangContrast', JSON.stringify(obj));
}