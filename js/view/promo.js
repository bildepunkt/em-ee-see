var jQuery = $ = require('jquery');
var Mustache = require('mustache');

/**
 * @class View
 * @param {string} template - the template markup
 * @param {object} data - the data
 */
var View = function(template, data) {
    this.rendered = Mustache.render(template, data);
};

/**
 * @method render
 * @param {object} $target - the jQuery wrapped object
 */
View.prototype.render = function($target) {
    $target.append(this.rendered);
}

module.exports = View;