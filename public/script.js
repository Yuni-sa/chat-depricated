
window.addEventListener("DOMContentLoaded", (_) => {
  let websocket = new WebSocket("ws://" + window.location.host + "/websocket");

  websocket.addEventListener("message", function (e) {
    console.log("recieved");
    let data = JSON.parse(e.data);
    msg = data.text;
    console.log(msg);
    if ($.trim(msg) == '') {
      console.log("oof");
      return false;
    }
    $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    $('.message-input').val(null);
    updateScrollbar();
  });

  var $messages = $('.messages-content'),
    d, h, m;

  $(window).load(function () {
    $messages.mCustomScrollbar();
  });


  function updateScrollbar() {
    $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
      scrollInertia: 10,
      timeout: 0
    });
  }

  function setDate() {
    d = new Date()
    if (m != d.getMinutes()) {
      m = d.getMinutes();
      $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
      $('<div class="checkmark-sent-delivered">&check;</div>').appendTo($('.message:last'));
      $('<div class="checkmark-read">&check;</div>').appendTo($('.message:last'));
    }
  }

  $('.message-submit').click(function () {
    console.log($('.message-input').val());
    let text = $('.message-input').val();
    websocket.send(
      JSON.stringify({
        username: "user",
        text: text,

      })
    );
  });

  $('.button').click(function () {
    $('.menu .items span').toggleClass('active');
    $('.menu .button').toggleClass('active');
  });
});

