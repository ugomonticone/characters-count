    (function ($) {
      $.fn.CharsCount = function (params) {
        var _this = this;
        var defaults = {
          MaxLength: 100,
          CssClass: "chars-count",
          CssAlertClass: "chars-count-danger",
          Target: "",
          PreventOverflow: true,
          CssWarningClass: "chars-count-warning",
          WarningLength: 20
        };
        var options = $.extend({}, defaults, params);
        if (options.MaxLength != defaults.MaxLength) {
          if (options.WarningLength == defaults.WarningLength) {
            options.WarningLength = options.MaxLength / 5;
          }
        }
        var tag = _this.attr("id");
        var lbl = document.createElement('span');
        var _l = $(lbl);
        _l.attr("id", tag + "__counting");
        _l.addClass(options.CssClass);
        _l.html(options.MaxLength + "/" + options.MaxLength);
        if (options.Target == "") {
          _this.after(_l);
        }
        else {
          var targetID = "#" + options.Target;
          var targetElem = $(targetID);
          targetElem.html(_l);
        }
        _this.on('input propertychange', function (event) {
          var valueChanged = false;
          if (event.type == 'propertychange') {
            valueChanged = event.originalEvent.propertyName == 'value';
          }
          else {
            valueChanged = true;
          }
          if (valueChanged) {
            var used = _this.val().length;
            if (used < options.MaxLength) {
              var diff = options.MaxLength - used;
              if (diff > (options.WarningLength)) {
                if (_l.hasClass(options.CssAlertClass))
                  _l.removeClass(options.CssAlertClass);
                if (_l.hasClass(options.CssWarningClass))
                  _l.removeClass(options.CssWarningClass);
              }
              else {
                if (_l.hasClass(options.CssAlertClass))
                  _l.removeClass(options.CssAlertClass);
                  _l.addClass(options.CssWarningClass);
              }
            }
            else {
              _l.addClass(options.CssAlertClass);
              if (options.PreventOverflow) {
                used = options.MaxLength;
                var accepted = _this.val().substr(0, options.MaxLength);
                _this.val(accepted);
              }
              else {
                var used = _this.val().length;
              }
            }
          }
          _l.html(options.MaxLength - used + "/" + options.MaxLength);
        });
        return _this;
      }
    }(jQuery));
