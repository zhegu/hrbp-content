function postAbnormalContrast(region, post, month, type) {
    var obj = getContrastAreaArray(type, region);
    obj.post = getContrastPostArray(type, post);
    obj.date = getContrastMonthArray(type, month);
    obj.compareType = getContrastCompareTypeByType(type);
    // 2.1.46	  在岗异常对比-区域对比/岗位对比/时间对
    api('/mobilityAnalysis/postAbnormalContrast', 3001, 'cbPostAbnormalContrast', JSON.stringify(obj));
}

function workEfficiencyContrast(region, post, month, type) {
    var obj = getContrastAreaArray(type, region);
    obj.post = getContrastPostArray(type, post);
    obj.date = getContrastMonthArray(type, month);
    obj.compareType = getContrastCompareTypeByType(type);
    // 2.1.47	员工工作效能评估对比-区域对比/岗位对比/时间对比
    api('/mobilityAnalysis/workEfficiencyContrast', 3001, 'cbWorkEfficiencyContrast', JSON.stringify(obj));
}
function empStandardContrast(region, post, month, type) {
    var obj = getContrastAreaArray(type, region);
    obj.post = getContrastPostArray(type, post);
    obj.date = getContrastMonthArray(type, month);
    obj.compareType = getContrastCompareTypeByType(type);
    // 2.1.48	用工规范对比-区域对比/岗位对比/时间对比
    api('/empNorm/empStandardContrast', 3001, 'cbEmpStandardContrast', JSON.stringify(obj));
}
function empZangGangStandardContrast(region, post, month, type) {
    var obj = getContrastAreaArray(type, region);
    obj.post = getContrastPostArray(type, post);
    obj.date = getContrastMonthArray(type, month);
    obj.compareType = getContrastCompareTypeByType(type);
    // 2.1.49	用工增岗对比-区域对比/岗位对比/时间对比
    api('/empNorm/empZangGangStandardContrast', 3001, 'cbEmpZangGangStandardContrast', JSON.stringify(obj));
}
function empLiGangContrast(region, post, month, type) {
    var obj = getContrastAreaArray(type, region);
    obj.post = getContrastPostArray(type, post);
    obj.date = getContrastMonthArray(type, month);
    obj.compareType = getContrastCompareTypeByType(type);
    // 2.1.50	用工离岗对比-区域对比/岗位对比/时间对比
    api('/empNorm/empLiGangContrast', 3001, 'cbEmpLiGangContrast', JSON.stringify(obj));
}