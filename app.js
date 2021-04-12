const fetch = require("node-fetch");

require("dotenv").config();

class Client
{
  constructor() {
    this.endpoint = "https://parseapi.back4app.com/classes/Italyzipcode_Italy_Postal_Code?limit=100000";
    this.headers_config = {headers: {"X-Parse-Application-Id": process.env.APP_ID, "X-Parse-REST-API-Key": process.env.APP_KEY}}
  }

  async getAllCodes() {
    const response = await fetch(this.endpoint, this.headers_config)
    const data = await response.json();

    return data["results"];
  }

  async getInfosByPostalCode(code) {
    let data = await this.getAllCodes();
    let toReturn = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].Postal_Code == code) {
        toReturn.push(data[i]);
      }
    }

    return toReturn;
  }

  async getInfosByCityCode(code) {
    let data = await this.getAllCodes();
    let toReturn = []

    for (let i = 0; i < data.length; i++) {
      if (data[i].Admin_Code2.toUpperCase() == code.toUpperCase()) {
        toReturn.push(data[i]);
      }
    }

    return toReturn;
  }

  async getInfosByPlaceName(name) {
    let data = await this.getAllCodes();
    let toReturn = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].Place_Name.toUpperCase() == name.toUpperCase()) {
        toReturn.push(data[i]);
      }
    }

    return toReturn;
  }

  async getInfosByAdminCode(code) {
    let data = await this.getAllCodes();
    let toReturn = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].Admin_Code == code) {
        
        toReturn.push(data[i]);
      }
    }

    return toReturn;
  }
}

module.exports = Client;