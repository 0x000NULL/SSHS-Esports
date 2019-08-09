(function ($) {
    "use strict";
    var pluginName = 'jqLeaderboard';
    var defaults = {};
    var exclude = ".title, .rank";
    function jqLeaderboard(element, options) {
        this._container = $(element);
        this._options = $.extend({}, defaults, options);
        this._name = pluginName;
        this._defaults = defaults;
        // initialize
        this.init();
    };
    // initialize
    jqLeaderboard.prototype.init = function () {
        var _this = this;
        _this._tsort();
        _this._generate_markup();
        _this._select_first();
    };
    // get the data node only
    jqLeaderboard.prototype._get_data_node = function () {
        return this._container.find("ul li").not(exclude);
    };
    // tsort
    jqLeaderboard.prototype._tsort = function () {
        var _this = this;
        _this._container.find("ul").each(function () {
            var parent = $(this);
            var nodes = parent.find("li").toArray();
            // remove first
            parent.find("li").remove();
            nodes.sort(function (a, b) {
                return $(b).attr("data-value") - $(a).attr("data-value");
            });
            $.each(nodes, function (idx, node) {
                parent.append(node);
            });
        });
    };
    // generate baisc markup
    jqLeaderboard.prototype._generate_markup = function () {
        var _this = this;
        _this._get_data_node().each(function () {
            $(this).append('<span class="value">$' + $(this).attr('data-value') + '</span>');
        });
        _this._get_data_node().bind('mouseover', function () {
            var code = $(this).attr("data-rel");
            _this._get_data_node().each(function () {
                if ($(this).attr('data-rel').toUpperCase() == code.toUpperCase()) {
                    $(this).toggleClass("hover");
                } else {
                    $(this).removeClass("hover");
                }
            });
        });
        _this._get_data_node().bind('click', function () {
            var total = 0;
            var code = $(this).attr("data-rel");
            _this._select(code);
        });
        return _this;
    };
    jqLeaderboard.prototype._select = function (code) {
        var _this = this;
        var total = 0;
        _this._get_data_node().each(function () {
            if ($(this).attr('data-rel').toUpperCase() == code.toUpperCase()) {
                $(this).toggleClass("selected");
                total += $(this).attr('data-value') * 1;
                $(this).parent().children(".rank").first().css('display', 'block').html($(this).prevAll().length - 1);
            } else {
                $(this).removeClass("selected");
            }
        });
        _this._container.find(".total").html("Total: $" + total);
        return _this;
    }
    jqLeaderboard.prototype._hover = function (code) {
        var _this = this;
        _this._get_data_node().each(function () {
            if ($(this).attr('data-rel').toUpperCase() == code.toUpperCase()) {
                $(this).toggleClass("hover");
                $(this).removeClass("selected");
            } else {
                $(this).removeClass("hover");
            }
        });
        return _this;
    }
    jqLeaderboard.prototype._select_first = function (e) {
        this._get_data_node().first().trigger('click');
        return this;
    };
    // public methods
    jqLeaderboard.prototype.leaderboard_highlight = function (code) {
        return this._hover(code);
    }
    jqLeaderboard.prototype.leaderboard_select = function (code) {
        return this._select(code);
    }
    $.fn.jqleaderboard = function (options) {
        return this.each(function () {
            var element = $(this);
            // already done
            if (element.data("leaderboard")) return;
            var leaderboard = new jqLeaderboard(this, options);
            element.data("leaderboard", leaderboard);
        });
    };
}(jQuery, window));