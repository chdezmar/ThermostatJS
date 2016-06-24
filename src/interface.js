$(document).ready(function() {
  var thermostat = new Thermostat();
  tempBarUpdate(thermostat.checkTemp());
  var update = function(){
    $('#current').text(thermostat.checkTemp() + " power saving mode is " + thermostat._powerSaving);
    $('#temp-display').attr('class', thermostat.energyUsage());
  };
  update();
  $('#up').on('click', function(){
    thermostat.up();
    update();
    tempBarUpdate(thermostat.checkTemp());
  });
  $('#down').on('click', function(){
    thermostat.down();
    update();
    tempBarUpdate(thermostat.checkTemp());
  });
  $('#powersaving').on('click', function(){
    thermostat.togglePowerSaving();
    update();
  });
  $('#reset').on('click', function(){
    thermostat.reset();
    tempBarUpdate(thermostat.checkTemp());
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

  function tempBarUpdate(checkTemp) {
    $('#temp-bar').width(checkTemp / 32 * 100 + '%');
  }


});
