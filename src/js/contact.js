// let curLocation;
/*global google*/
/* eslint-disable no-unused-vars */
let map;

function initMap(lat_ = 0, lng_ = 0) {
    map = new google.maps.Map(document.getElementById("map"),{
        center: {
            lat: lat_, 
            lng: lng_,
        },
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    const marker = new google.maps.Marker({
        center: {
            lat: lat_, 
            lng: lng_
        },
        map: map,
    });

    const offices = [
        {
            position: new google.maps.LatLng(41.73263, 44.6984256),
        },
        {
            position: new google.maps.LatLng(50.4021351, 30.2518243),
        },
        {
            position: new google.maps.LatLng(41.6223982, 41.5823478),
        },
        {
            position: new google.maps.LatLng(55.5807419, 36.8237679),
        }
    ];

     // Create markers.
     for (let i = 0; i < offices.length; i++) {
        const marker = new google.maps.Marker({
          position: offices[i].position,
          icon: "img/icons/marker.svg",
          map: map,
        });
      }

    jQuery("#map").show();

    google.maps.event.trigger(map, "resize");
}

/* eslint-enable no-unused-vars */

const btnGeorgia = document.getElementById("contacts__mapController_btn-Georgia");
const btnUkraine = document.getElementById("contacts__mapController_btn-Ukraine");
const btnRussia = document.getElementById("contacts__mapController_btn-Russia");


btnUkraine.addEventListener("click", function(){
    // curLocation = {lat: 50.4016974, lng: 30.2518283};
    initMap(50.4021351, 30.2518243);
    $(".contacts__mapController_btn.active").removeClass("active");
    $(this).addClass("active");
    $(".contacts__info_item.active").removeClass("active");
    $(".contacts__info_item.Ukraine").addClass("active");
    $(".contacts__intro").removeClass("Georgia", "russia");
    $(".contacts__intro").addClass("Ukraine");
});

btnGeorgia.addEventListener("click", function(){
    // curLocation = {lat: 50.4016974, lng: 30.251828};
    initMap(41.73263, 44.6984256);
    $(".contacts__mapController_btn.active").removeClass("active");
    $(this).addClass("active");
    $(".contacts__info_item.active").removeClass("active");
    $(".contacts__info_item.Georgia").addClass("active");
    $(".contacts__intro").removeClass("Ukraine", "russia");
    $(".contacts__intro").addClass("Georgia");
});

btnRussia.addEventListener("click", function(){
    // curLocation = {lat: 55.5807419, lng: 36.8237679};
    initMap(55.5807419, 36.8237679);
    $(".contacts__mapController_btn.active").removeClass("active");
    $(this).addClass("active");
    $(".contacts__info_item.active").removeClass("active");
    $(".contacts__info_item.Russia").addClass("active");
    $(".contacts__intro").removeClass("Ukraine", "Georgia");
    $(".contacts__intro").addClass("russia");
});

jQuery(document).ready(function() {
	// Show google map for first adrress
    initMap(41.73263, 44.6984256);
});

