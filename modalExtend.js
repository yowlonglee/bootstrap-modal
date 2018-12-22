(function ($) {
  $.fn.modalExtend = function (options, callback) {
    var options = options || false;
    var callback = callback || false;
    console.log(this);

    // custom values
    var message = options.message || false;
    var primary = options.primary || "確定";
    var secondary = options.secondary || "取消";

    return this;
  };
})(jQuery);