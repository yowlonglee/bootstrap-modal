(function ($) {
  $.fn.modalExtend = function (options, callback) {
    if(!options){
      console.log("options is undefined");
      return;
    }
    var callback = callback || false;


    this.find(".message").html(options.message);
    if(options.title){
      this.find(".modal-title").html(options.title);
    }
    if(options.primary){
      this.find(".modal-footer button.primary").html(options.primary);
    }
    if(options.secondary){
      this.find(".modal-footer button.secondary").html(options.secondary);
    }

    if(callback){
      this.on("click", ".modal-footer button.primary", function(event){
        callback();
        $(event.delegateTarget).modal("hide");
      });
    }

    return this;
  };
})(jQuery);