$(document).ready(function() {
  var thermostat = new Thermostat();
  var update = function(){
    $('#current').text(thermostat.checkTemp() + " power saving mode is " + thermostat._powerSaving);
    $('#temp-display').attr('class', thermostat.energyUsage());
  };
  update();
  $('#up').on('click', function(){
    thermostat.up();
    update();
  });
  $('#down').on('click', function(){
    thermostat.down();
    update();
  });
  $('#powersaving').on('click', function(){
    thermostat.togglePowerSaving();
    update();
  });
  $('#reset').on('click', function(){
    thermostat.reset();
    update();
  });

  function updateWeather(cityCode){
    var url = "http://api.wunderground.com/api/9565f9e305247628/conditions/q/"+cityCode+".json";
    $.get(url, function(data){
      $('#weather-display').text(data.current_observation.temperature_string);
    });
  }


  $('#city-form').on('submit', function(event){
    event.preventDefault();
    updateWeather($('#city-form option:selected').val());
  });


});
