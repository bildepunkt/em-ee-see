var jQuery = $ = require('jquery');

// private
var $win = $(window);

/**
 * @class View
 * @param {string} template - the template markup
 * @param {object} data - the data
 * @author Chris Peters
 */
var Promotions = function() {
    this.$el = $('#promotions');
    this.$promos = this.$el.find('.promo');
    this.tabletWidth = 768;
    this.desktopWidth = 1024;
    this.tabletLogoSize = 100;
    this.desktopLogoSize = 152;
    this.promoCount = this.$promos.length;

    $win.on('resize', $.proxy(this.resizeHandler, this));

    this.resizeHandler();
};

/**
 * resizes promo images with/without margins based on screen width
 * @method resizeHandler
 * @author Chris Peters
 */
Promotions.prototype.resizeHandler = function() {
    var self = this;
    var winWidth = $win.width();
    var marginWidth = (winWidth <= this.desktopWidth ? 18 : 0); 
    var promotionsWidth;
    var promoWidth;

    if (winWidth < this.tabletWidth) {
        this.$promos.each(function() {
            $(this).css({
                width: '100%',
                marginLeft: 0
            });
        });
    } else {
        promotionsWidth = winWidth - (winWidth <= this.desktopWidth ? this.tabletLogoSize : this.desktopLogoSize);
        promoWidth = promotionsWidth / this.promoCount - marginWidth;

        this.$promos.each(function() {
            $(this).css({
                marginLeft: marginWidth + 'px',
                width: promoWidth + 'px'
            }).find('.promo-image').css({
                backgroundSize: promoWidth + 'px'
            });
        });
    }
};

module.exports = Promotions;