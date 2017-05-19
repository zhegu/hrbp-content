function cbSpecificationIndex(json) {
    alert('cbSpecificationIndex');
    alert(json);
    if (checkCallBackJsonIsNotNull(json) && checkJsonDateIsNotNull(json.data)) {
        $.each(json.data, function (i, item) {
            $('#specification_index').html(item.index);
            alert(item.index);
            alert(getRProportion(item.index, 0));
            scaleMap2('norm_index_twig', 'h-ltwig', 'h-rtwig', item.index, getRProportion(item.index, 0));
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
            scaleMap2('norm_increase_twig', 'h-ltwig', 'h-rtwig', item.index, getRProportion(item.index, 0));
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
            scaleMap2('norm_leave_twig', 'h-ltwig', 'h-rtwig', item.index, getRProportion(item.index, 0));
        })
    } else {
        alert(json.message);
    }
}