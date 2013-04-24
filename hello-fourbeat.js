/*
function nativeFourBeatEvent(event, color) {
  alert(color);
  $(document).trigger('fourbeat', {'event': event, 'color': color});
}
*/

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to hello-fourbeat.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  $(document).on('mousedown', 'button', function(e) {
    var color = $(e.target).data('color');
    $(document).trigger('fourbeat', {'type': 'down', 'color': color});
  });

  $(document).on('mouseup', 'button', function(e) {
    var color = $(e.target).data('color');
    $(document).trigger('fourbeat', {'type': 'up', 'color': color});
  });

  // =======================================================================

  $(document).on('fourbeat', function(e, data) {
    $('body').css('background-color', data.color);
    /*
    $('body').addClass('.bk-'+data.color);
    setTimeout(function(){
      $('body').removeClass('.bk-'+data.color);
    }, 400);
     */
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
