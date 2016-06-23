'use strict';

function Thermostat() {
  this._temperature = 20;
  this._MIN_TEMP = 10;
  this._powerSaving = true;
  this._maxTemp = 25;
  this._LOW_USAGE_THRESHOLD = 18;
  this._MEDIUM_USAGE_THRESHOLD = 25;
};

Thermostat.prototype = {
  checkTemp: function(){
    return this._temperature;
  },
  up: function(){
    if(this._temperature === this._maxTemp){
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
    if(this._powerSaving) { this._maxTemp = 25};
    if(!this._powerSaving) { this._maxTemp = 32};
    if(this._temperature > this._maxTemp) { this._temperature = this._maxTemp};
  },
  reset: function(){
    this._temperature = 20;
  },
  energyUsage: function(){
    if(this._temperature < this._LOW_USAGE_THRESHOLD){ return "low-usage" };
    if(this._temperature < this._MEDIUM_USAGE_THRESHOLD){ return "medium-usage" };
    return "high-usage";
  }

};
