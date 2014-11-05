(function(window, undefined) {
    'use strict';

    window.skrollr.init({
        forceHeight: false
    });

    var map = L.map('map', {scrollWheelZoom: false}).setView([43.69, 7.24], 12);

    var marker = L.marker([43.6769624, 7.2234259]).addTo(map);

    marker.bindPopup("<b>SASU Élagage et Paysage d’Azur</b>").openPopup();

    L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'mathroc.jp9g2pf9'
    }).addTo(map);

}) (window);
