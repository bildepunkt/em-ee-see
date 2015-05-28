var jQuery = $ = require('jquery');

/**
 * @class View
 * @param {string} template - the template markup
 * @param {object} data - the data
 */
var $win = $(window);

var Promotions = function() {
    this.$el = $('#promotions');
    this.$promos = this.$el.find('.promo');
    this.desktopLogoSize = 148;
    this.promoCount = this.$promos.length;

    $win.on('resize', $.proxy(this.resizeHandler, this));

    this.resizeHandler();
};

Promotions.prototype.resizeHandler = function() {
    var self = this;
    var winWidth = $win.width();
    var promotionsWidth;
    var promoWidth;
    var $this;
    var $img;
    var img;
    var scaleFactor;

    this.$el.hide();

    if (winWidth < 768) {
        this.$promos.each(function() {
            $(this).css('width', '100%');
        });
    } else {
        promotionsWidth = winWidth - this.desktopLogoSize;
        promoWidth = promotionsWidth / this.promoCount;

        this.$promos.each(function() {
            $this = $(this);
            $this.css('width', promoWidth + 'px');

            $img = $this.find('img');
            img = $img[0];
            if (img.width === 0) {
                img.onload = function() {
                    this.width = promoWidth;
                };
            } else {
                self.setImageDimensions($img, promoWidth);
            }
        });
    }

    this.$el.fadeIn('fast');
};

Promotions.prototype.setImageDimensions = function($img, promoWidth) {
    $img.attr({
        width: promoWidth
    });
};

module.exports = Promotions;