function cbPositionStabilityIndex(json) {

    alert('cbPositionStabilityIndex');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        $.each(json.data, function (i, item) {
            $('#position_stability_index').html(item.index);
        })
        empInPostIndex();
    } else {
        alert(json.message);
    }
}

function cbEmpInPostIndex(json) {

    alert('cbEmpInPostIndex');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        $.each(json.data, function (i, item) {
            $('#emp_in_post_index').html(item.index);
        })
        turnoverIntentionIndex();
    } else {
        alert(json.message);
    }
}

function cbTurnoverIntentionIndex(json) {

    alert('cbTurnoverIntentionIndex');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        $.each(json.data, function (i, item) {
            $('#turnover_intention_index').html(item.index);
        })
        remainInCity();
    } else {
        alert(json.message);
    }
}

function cbRemainInCity(json) {

    alert('cbRemainInCity');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        $.each(json.data, function (i, item) {
            $('#remain_in_city').html(item.index);
        })
    } else {
        alert(json.message);
    }
}