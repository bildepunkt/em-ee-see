var jQuery = $ = require('jquery');
var Mustache = require('mustache');

/**
 * @class Promo
 * @param {string} template - the template markup
 * @param {object} data - the data
 */
var Promo = function(template, data) {
    data.open_new_tab = data.open_new_tab ? '_blank' : '';
    this.rendered = Mustache.render(template, data);
};

/**
 * @method render
 * @param {object} $target - the jQuery wrapped object
 */
Promo.prototype.render = function($target) {
    $target.append(this.rendered);
}

module.exports = Promo;