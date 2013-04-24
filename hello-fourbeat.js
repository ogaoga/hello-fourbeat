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

  // =======================================================================

  $(document).on('touchstart', 'button', function(e) {
    var color = $(e.target).data('color');
    $(document).trigger('fourbeat', {'event': 'PRESS', 'color': color});
  });

  $(document).on('touchend', 'button', function(e) {
    var color = $(e.target).data('color');
    $(document).trigger('fourbeat', {'event': 'RELEASE', 'color': color});
  });

  // =======================================================================

  $(document).on('fourbeat', function(e, data) {
    console.log(data);
    if ( data.event == 'PRESS' ) {
      $('body').css('background-color', data.color);
    }
    else {
      $('body').css('background-color', 'white');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
