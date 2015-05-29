var jQuery = $ = require('jquery');
var PromoView = require('./view/promo');
var PromotionsView = require('./view/promotions');
var PromoMenuController = require('./controller/promo-menu');

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

    new PromoMenuController();

    $.get('./template/promo.mst', function(data) {
        template = data;
    });

    $.get('http://mec.ca/api/v1/shop/promotions', function(data) {
        // remove loading
        $target.html('');

        for(var i = 0, len = data.promotions.length; i < len; i += 1) {
            promoData = data.promotions[i];
            //console.log(promoData);
            new PromoView(template, promoData).render($target);
        }

        // AFTER .promos have populated
        new PromotionsView();
    });
});