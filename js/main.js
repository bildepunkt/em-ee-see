var jQuery = $ = require('jquery');
var Promo = require('./view/promo');

$(document).ready(function() {
    var $target = $('#promotions');
    var template;
    var promoData;

    // CORS via heroku
    jQuery.support.cors = true;
    jQuery.ajaxPrefilter( function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            var protocol = (window.location.protocol === 'http:' ? 'http:' : 'https:');
            options.url = protocol + '//cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    $.get('./template/promo.mst', function(data) {
        template = data;
    });

    $.get('http://mec.ca/api/v1/shop/promotions', function(data) {
        for(var i = 0, len = data.promotions.length; i < len; i += 1) {
            promoData = data.promotions[i];
            new Promo(template, promoData).render($target);
        }
    });
});