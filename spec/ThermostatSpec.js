'use strict'

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
});
