'use strict';

function Thermostat() {
  this._temperature = 20;
  this._MIN_TEMP = 10;
  this._powerSaving = true;
  this._MAX_TEMP = 25;
};

Thermostat.prototype = {
  checkTemp: function(){
    return this._temperature;
  },
  up: function(){
    if(this._temperature === this._MAX_TEMP){
      this._temperature;
    } else {
      this._temperature += 1;
    }
  },
  down: function(){
    if(this._temperature === this._MIN_TEMP){
      this._temperature;
    } else {
      this._temperature -= 1;
    }
  },
  togglePowerSaving: function(){
    this._powerSaving = !this._powerSaving;
    if(this._powerSaving) { this._MAX_TEMP= 25};
    if(!this._powerSaving) { this._MAX_TEMP = 32};
  },
  reset: function(){
    this._temperature = 20;
  }
};
