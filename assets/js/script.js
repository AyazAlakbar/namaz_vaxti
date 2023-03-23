$(document).ready(function() {
    $('form').submit(function(e) {
      e.preventDefault();
      var city = $('#city').val();
      var day = $('#day').val();
      var month = $('#month').val();
      
      $.ajax({
        url: 'http://api.aladhan.com/v1/calendar/2023/' + month + '?latitude=40.1431&longitude=47.5769&method=2',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
          var timings = data.data[day-1].timings;
          $('.sag').eq(0).text(timings.Imsak);
          $('.sag').eq(1).text(timings.Sunrise);
          $('.sag').eq(2).text(timings.Dhuhr);
          $('.sag').eq(3).text(timings.Asr);
          $('.sag').eq(4).text(timings.Maghrib);
          $('.sag').eq(5).text(timings.Isha);
          $('.sag').eq(6).text(timings.Midnight);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus + ': ' + errorThrown);
        }
      });
    });
  });
  