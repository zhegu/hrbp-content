function cbSpecificationIndex(json) {

    alert('cbSpecificationIndex');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        $.each(json.data, function (i, item) {
            $('#specification_index').html(item.index);
        })
        zengGangIndex();
    } else {
        alert(json.message);
    }
}

function cbZengGangIndex(json) {

    alert('cbZengGangIndex');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        $.each(json.data, function (i, item) {
            $('#zenggang_index').html(item.index);
        })
        demobilizedIndex();
    } else {
        alert(json.message);
    }
}

function cbDemobilizedIndex(json) {

    alert('cbDemobilizedIndex');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        $.each(json.data, function (i, item) {
            $('#demobilized_index').html(item.index);
        })
    } else {
        alert(json.message);
    }
}