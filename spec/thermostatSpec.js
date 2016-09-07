'use strict';

describe("Thermostat", function() {
  describe("checkTemp", function() {
    it("Starts at 20 degrees", function(){
      expect(thermostat.checkTemp()).toEqual(20);
    });
  });
  describe("up", function(){
    it("increases temperature by 1", function(){
      thermostat.up();
      expect(thermostat.checkTemp()).toEqual(21);
    });
    it("increases temperature by 2", function(){
      thermostat.up();
      thermostat.up();
      expect(thermostat.checkTemp()).toEqual(22);
    });
  });
  describe("down", function(){
    it("decreases temperature by 1", function(){
      thermostat.down();
      expect(thermostat.checkTemp()).toEqual(19);
    });
    it("decreases temperature by 2", function(){
      thermostat.down();
      thermostat.down();
      expect(thermostat.checkTemp()).toEqual(18);
    });
  });

  describe("minimum value:", function(){
    it("refuses to go below the minimum", function(){
      for(var i = 1; i < 21; i++){
        thermostat.down();
      }
      expect(thermostat.checkTemp()).toEqual(10);
    });
  });

  describe("Power Saving Mode", function() {
    it("it is On by default", function() {
      expect(thermostat._powerSaving).toBe(true)
    });

    it("when On, max temp is 25", function() {
      for(var i = 1; i < 21; i++){
        thermostat.up();
      }
      expect(thermostat.checkTemp()).toEqual(25)
    });
    it("when Off, max temp is 32", function() {
      thermostat.togglePowerSaving();
      for(var i = 1; i < 21; i++){
        thermostat.up();
      }
      expect(thermostat.checkTemp()).toEqual(32)
    });
  });

  describe("Reset", function() {
    it("resets the temperature to 20", function() {
      for(var i = 1; i < 21; i++){
        thermostat.up();
      }
      thermostat.reset();
      expect(thermostat.checkTemp()).toEqual(20);
    });
  });

  describe("Energy usage",function() {
    it("returns low usage when temperature is below 18", function(){
      for(var i = 1; i < 5; i++){
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });
    it("returns medium usage when temperature is below 25", function(){
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });
    it("returns high usage when temperature is 25 or higher", function(){
      for(var i = 1; i < 10; i++){
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });
});
