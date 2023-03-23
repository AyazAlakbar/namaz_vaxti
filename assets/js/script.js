$(document).ready(function() {
    $('form').submit(function(e) {
      e.preventDefault();
      let city=$('#city').val();
      let day = $('#day').val();
      let month = $('#month').val();
      
      $.ajax({
        url: 'http://api.aladhan.com/v1/calendar/2023/' + month + '?latitude=40.1431&longitude=47.5769&method=2',
        type: 'GET',
        success: function(data) {
          var timings = data.data[day-1].timings;
          $('.time').eq(0).text(timings.Imsak);
          $('.time').eq(1).text(timings.Sunrise);
          $('.time').eq(2).text(timings.Dhuhr);
          $('.time').eq(3).text(timings.Asr);
          $('.time').eq(4).text(timings.Maghrib);
          $('.time').eq(5).text(timings.Isha);
          $('.time').eq(6).text(timings.Midnight);
        },
        
      });
    });
  });
  