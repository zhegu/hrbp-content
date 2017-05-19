/**
 * Created by Administrator on 2017/5/10.
 */

//员工在干情况概览的进度条
// h_scale({
//     idname: "h-guard",
//     leftname: "h-ltwig",
//     centername: "h-rtwig",
//     lchar: 33,
//     zchar: 67
// });
// h_scale({
//     idname: "map-onguard",
//     leftname: "h-ltwig",
//     centername: "h-rtwig",
//     rightname: "h-rtwig",
//     lchar: 33,
//     zchar: 17,
//     rchar: 50
// });

//第一个参数传递的是显示标点的数据，第二个参数放地图的div的ID，第三个参数城市的名字，
// 第四个参数覆盖图片路径，第五个参数回调函数的名字
function showmap(data, idname, cityName, image, callback, callbackicon) {
    var map = new AMap.Map(idname, {resizeEnable: true});
    var markers = []; //province见Demo引用的JS文件
    map.setCity(cityName);
    googleLayer = new AMap.TileLayer({ //这是插入图片的方法
        zIndex: 2,
        getTileUrl: function (x, y, z) {
            return image;
        }
    });
    googleLayer.setMap(map);
    AMapUI.loadUI(['control/BasicControl'], function (BasicControl) { //这是放大缩小地图的

        //缩放控件
        map.addControl(new BasicControl.Zoom({
            position: {
                right: '10px',
                bottom: '30px',
            },

        }));

    });
    map.on('moveend', function (e) {  //这是地图移动结束获取事件
        var zoom = map.getZoom();  //获取到当前的缩放大小zoom值
        var center = map.getCenter();  //获取到中心点的坐标
        var bounds = map.getBounds();
        var southWest = bounds.getSouthWest();
        var NorthEast = bounds.getNorthEast();
        var size = map.getSize(); //这是获取地图窗口大小的函数
        // console.log(NorthEast);

        //获取左上角的坐标
        var leftTop_lng = southWest.lng;
        var leftTop_let = NorthEast.lat;
        var northWest = [leftTop_lng, leftTop_let]; //这是左上角坐标  西北坐标点

        //获取右下角的坐标
        var rightBottom_let = NorthEast.lng;
        var rightBottom_lng = southWest.lat;
        var southEast = [rightBottom_let, rightBottom_lng]; //这是右下角坐标 东南坐标点

        // 获取左下角坐标点
        var southwest = [southWest.lng, southWest.lat]; //这是左下角坐标点  西南坐标点
        // console.log(southwest);

        // 获取右上叫坐标点
        var Northeast = [NorthEast.lng, NorthEast.lat]; //这是右上角坐标点  东北坐标点
        // console.log(Northeast);
        callback(northWest, southwest, southEast, Northeast);
        if (zoom <= 16) {
            googleLayer = new AMap.TileLayer({ //这是插入图片的方法
                zIndex: 2,
                getTileUrl: function () {
                    return image;
                }
            });
            googleLayer.setMap(map);
        } else {
            for (var i = 0; i < data.length; i++) {
                marker = new AMap.Marker({
                    position: data.latitudeAndLongitud,
//            position: ["116.405" + Math.floor(Math.random() * 100) + "6", "39.905" + Math.floor(Math.random() * 100) + "9"],
                    title: ("dfadsf" + i) + "",
                    map: map,
                    icon: new AMap.Icon({
                        image: function () {
                            if (data.postName == "渠道人员" && data.isAbnormal == "是") {
                                return "../../img/qudaoiconblue.png"
                            } else if (data.postName == "渠道人员" && data.isAbnormal == "否") {
                                return "../../img/qudaoicon.png"
                            } else if (data.postName == "装维人员" && data.isAbnormal == "是") {
                                return "../../img/zhuangweiicon.png"
                            } else if (data.postName == "装维人员" && data.isAbnormal == "否") {
                                return "../../img/zhuangweired.png"
                            }
                        }(),
                        size: new AMap.Size(64, 64),  //图标大小
                        imageSize: new AMap.Size(32, 32)
                    }),
                    clickable: true,

                });
                AMap.event.addListener(marker, 'click', function (e) {

                    $(".h-popframe").show();
                    //此处点击弹出个人详情框，可在此发送请求取出数据
                    // callbackicon(northWest, southwest, southEast, Northeast);
                    viewEmpDetailsCB('手机号', '岗位');
                });
                markers.push(marker);
            }
        }


    });
    map.on('zoomend', function (e) { //这是放大缩小地图的事件
        var zoom = map.getZoom();
        var center = map.getCenter();
        var bounds = map.getBounds();
        var southWest = bounds.getSouthWest();
        var NorthEast = bounds.getNorthEast();
        var size = map.getSize(); //这是获取地图窗口大小的函数
        // console.log(NorthEast);

        //获取左上角的坐标
        var leftTop_lng = southWest.lng;
        var leftTop_let = NorthEast.lat;
        var northWest = [leftTop_lng, leftTop_let]; //这是左上角坐标  西北坐标点

        //获取右下角的坐标
        var rightBottom_let = NorthEast.lng;
        var rightBottom_lng = southWest.lat;
        var southEast = [rightBottom_let, rightBottom_lng]; //这是右下角坐标 东南坐标点

        // 获取左下角坐标点
        var southwest = [southWest.lng, southWest.lat]; //这是左下角坐标点  西南坐标点
        // console.log(southwest);

        // 获取右上叫坐标点
        var Northeast = [NorthEast.lng, NorthEast.lat]; //这是右上角坐标点  东北坐标点
        // console.log(Northeast);
        callback(northWest, southwest, southEast, Northeast);
        if (zoom <= 16) {
            googleLayer = new AMap.TileLayer({ //这是插入图片的方法
                zIndex: 2,
                getTileUrl: function () {
                    return image;
                }
            });
            googleLayer.setMap(map);
        } else {
            for (var i = 0; i < data.length; i++) {
                marker = new AMap.Marker({
                    position: data.latitudeAndLongitud,
//            position: ["116.405" + Math.floor(Math.random() * 100) + "6", "39.905" + Math.floor(Math.random() * 100) + "9"],
                    title: ("dfadsf" + i) + "",
                    map: map,
                    icon: new AMap.Icon({
                        image: function () {
                            if (data.postName == "渠道人员" && data.isAbnormal == "是") {
                                return "../../img/qudaoiconblue.png"
                            } else if (data.postName == "渠道人员" && data.isAbnormal == "否") {
                                return "../../img/qudaoicon.png"
                            } else if (data.postName == "装维人员" && data.isAbnormal == "是") {
                                return "../../img/zhuangweiicon.png"
                            } else if (data.postName == "装维人员" && data.isAbnormal == "否") {
                                return "../../img/zhuangweired.png"
                            }
                        }(),
                        size: new AMap.Size(64, 64),  //图标大小
                        imageSize: new AMap.Size(32, 32)
                    }),
                    clickable: true,

                });
                AMap.event.addListener(marker, 'click', function (e) {

                    $(".h-popframe").show();
                    //此处点击弹出个人详情框，可在此发送请求取出数据
                    // callbackicon(northWest, southwest, southEast, Northeast);
                    viewEmpDetailsCB('手机号', '岗位');
                });
                markers.push(marker);
            }
        }

    });

}


//    function addCluster() {
//        map.plugin(["AMap.MarkerClusterer"], function() {
//            var cluster = new AMap.MarkerClusterer(map, markers);
//        });
//    };
//    addCluster();
//    function _clsoeInfoWindow(){
//        if(map.getZoom()<13){
//            //alert("1");
//            infowindow.close();
//        };
//    }

//    var mapcenter = map.getCenter( );
//    console.log(map.getStatus( ));

//    console.log(mapcenter);


//console.log(provinces);
//
//for (var i = 0; i < provinces.length; i += 1) {
//        var marker;
//        if (provinces[i].type === 0) {
//            var icon = new AMap.Icon({
//                image: 'http://vdata.amap.com/icons/b18/1/2.png',
//                size: new AMap.Size(24, 24)
//            });
//            marker = new AMap.Marker({
//                icon: icon,
//                position: provinces[i].center.split(','),
//                offset: new AMap.Pixel(-1,-1),
//                zIndex: 101,
//                title: provinces[i].name,
//                map: map
//            });
//        } else {
//
//            marker = new AMap.Marker({
//                position: provinces[i].center.split(','),
//                title: provinces[i].name,
//                map: map
//            });
//
//            if (provinces[i].type === 2) {
//                var content= "<div class = 'taiwan'>宝岛台湾</div>";
//                baodao = new AMap.Marker({
//                    content: content,
//                    position: provinces[i].center.split(','),
//                    title: provinces[i].name,
//                    offset: new AMap.Pixel(0,0),
//                    map: map
//                });
//            }
//        }
//        markers.push(marker);
//    }

$(".h-frame").siblings().on("click", function () {
    $(".h-popframe").hide();
    h_scale1({
        idname: "infor-post",
        leftname: "h-llwig",
        centername: "h-zlwig",
        lchar: 0,
        zchar: 0,
    });
});

$(".h-analyse").on("click", function () {
    $(this).css("color", "#0f0f0f").siblings().css("color", "#666666");
    $(".h-person").stop().animate({"left": "0"}, 500);
    $(".h-potency").stop().animate({"left": "25rem"}, 500);
});
$(".h-estimate").on("click", function () {
    $(this).css("color", "#0f0f0f").siblings().css("color", "#666666");
    $(".h-person").stop().animate({"left": "-25rem"}, 500);
    $(".h-potency").stop().animate({"left": "0"}, 500);
    empWorkEfficiencyPercentageCB();
})


// //这是工作效能的柱状图
// columnar({
//     idname: "h-jobpote",
//     dataname: ["高效432", "勤奋", "普通", "低效", "慵懒"],
//     leftData: ["75", "30", "85", "49", "50"],
//     rightData: ["45", "135", "115", "30", "15"],
//     splitArea: true,
//     topshow: false,
//     nameone: "异常",
//     nametwo: "在岗",
//
// });

window.addEventListener("resize", function () {

    columnar({
        idname: "h-jobpote",
        dataname: ["高效", "勤奋", "普通", "低效", "慵懒"],
        leftData: ["75", "30", "85", "49", "50"],
        rightData: ["45", "135", "115", "30", "15"],
        splitArea: true,
        topshow: false,
        nameone: "异常",
        nametwo: "在岗",

    });
    option.chart.resize();
});


// 这是备注获取地图标点
//     for (var i = 0; i < data.length; i++) {
//         marker = new AMap.Marker({
//             position: data.latitudeAndLongitud,
// //            position: ["116.405" + Math.floor(Math.random() * 100) + "6", "39.905" + Math.floor(Math.random() * 100) + "9"],
//             title: ("dfadsf" + i) + "",
//             map: map,
//             icon: new AMap.Icon({
//                 image: function () {
//                     if (data.postName == "渠道人员" && data.isAbnormal == "是") {
//                         return "../../img/qudaoiconblue.png"
//                     } else if (data.postName == "渠道人员" && data.isAbnormal == "否") {
//                         return "../../img/qudaoicon.png"
//                     } else if (data.postName == "装维人员" && data.isAbnormal == "是") {
//                         return "../../img/zhuangweiicon.png"
//                     } else if (data.postName == "装维人员" && data.isAbnormal == "否") {
//                         return "../../img/zhuangweired.png"
//                     }
//                 }(),
//                 size: new AMap.Size(64, 64),  //图标大小
//                 imageSize: new AMap.Size(32, 32)
//             }),
//             clickable: true,
//
//         });
//         AMap.event.addListener(marker, 'click', function (e) {
//
//             $(".h-popframe").show();
//             //此处点击弹出个人详情框，可在此发送请求取出数据
//         });
//         markers.push(marker);
//     }
//    var map = new AMap.Map('container',{
//        resizeEnable: true,
//        zoom: 10,
//        center: [116.480983, 40.0958]
//    });
//加载BasicControl，loadUI的路径参数为模块名中 'ui/' 之后的部分


var map = new AMap.Map('container', {resizeEnable: true, zoom: 15, center: [116.400983, 39.905821]});
var markers = []; //province见Demo引用的JS文件
// AMapUI.setDomLibrary($);

AMapUI.loadUI(['control/BasicControl'], function (BasicControl) {

    //缩放控件
    map.addControl(new BasicControl.Zoom({
        position: {
            right: '10px',
            bottom: '30px',
        },

    }));

});
var num = 7;
var bounds = map.getBounds();
var southWest = bounds.getSouthWest(); //左下角坐标
var NorthEast = bounds.getNorthEast(); //右上角坐标
var leftTop_let = southWest.lat;
var leftTop_lng = NorthEast.lng;
var delta_lat = (NorthEast.lat - leftTop_let) / num;
var delta_lng = (southWest.lng - leftTop_lng) / num;
console.log(delta_lat);
console.log(delta_lng);
for (var i = 1; i <= num; i++) {

    for (var i = 0; i < 10; i++) {

        marker = new AMap.Marker({

            position: ["116.40" + Math.floor(Math.random() * 1000) + "6", "39.90" + Math.floor(Math.random() * 1000) + "9"],
//            position: ["116.405" + Math.floor(Math.random() * 100) + "6", "39.905" + Math.floor(Math.random() * 100) + "9"],
            title: ("dfadsf" + i) + "",
            map: map,
            icon: new AMap.Icon({
                image: "../../img/qudaoicon.png",
                size: new AMap.Size(64, 64),  //图标大小
                imageSize: new AMap.Size(32, 32)
            }),
            clickable: true,

        });

        markers.push(marker);

        AMap.event.addListener(marker, 'click', function (e) {
            $(".h-popframe").show();
            h_scale1({
                idname: "infor-post",
                leftname: "h-llwig",
                centername: "h-zlwig",
                lchar: 26,
                zchar: 74,
            });
            var position = marker.getPosition();
            // alert(position);
            //此处点击弹出个人详情框，可在此发送请求取出数据
        });

        markers.push(marker);
    }
}
map.on('zoomend', function (e) {
    console.log(1);
});
map.setFitView();

// map.on('moveend', function (e) {
//     var bounds = map.getBounds();
//     var southWest = bounds.getSouthWest( );
//     var NorthEast = bounds.getNorthEast( );
//     var size = map.getSize( ); //这是获取地图窗口大小的函数
//     // console.log(NorthEast);
//
//     //获取左上角的坐标
//     var leftTop_lng = southWest.lng;
//     var leftTop_let = NorthEast.lat;
//     var northWest = [leftTop_lng,leftTop_let]; //这是左上角坐标  西北坐标点
//
//         //获取右下角的坐标
//     var rightBottom_let = NorthEast.lng;
//     var rightBottom_lng = southWest.lat;
//     var southEast = [rightBottom_let,rightBottom_lng]; //这是右下角坐标 东南坐标点
//
//     // 获取左下角坐标点
//     var southwest = [southWest.lng,southWest.lat]; //这是左下角坐标点  西南坐标点
//     // console.log(southwest);
//
//     // 获取右上叫坐标点
//     var Northeast = [NorthEast.lng,NorthEast.lat]; //这是右上角坐标点  东北坐标点
//     // console.log(Northeast);
// });

//        for (var i = 0; i < 10; i++) {
//
//        marker = new AMap.Marker({
//
//            position: ["116.40" + Math.floor(Math.random() * 1000) + "6", "39.90" + Math.floor(Math.random() * 1000) + "9"],
// //            position: ["116.405" + Math.floor(Math.random() * 100) + "6", "39.905" + Math.floor(Math.random() * 100) + "9"],
//            title: ("dfadsf" + i) + "",
//            map: map,
//            icon : new AMap.Icon({
//                image: "../../img/qudaoicon.png",
//                size: new AMap.Size(64, 64),  //图标大小
//                imageSize: new AMap.Size(32,32)
//            }),
//            clickable: true,
//
//        });
//
//        markers.push(marker);
//    }