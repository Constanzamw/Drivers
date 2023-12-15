const axios = require("axios");
const { Driver, Team } = require("../db");
const getData = require("../utils/getData");
const getDb = require("../utils/getDb");

const baseUrl = "http://localhost:5000/drivers";
const getDrivers = async () => {

    const response = await axios.get(baseUrl);
    const driversData = response.data;

    const promiseDrivers= await Promise.all(
          driversData.map((driver) => getData(driver))
  );
        
    // drivers almacenados en la base de datos local
    const dbDrivers = await Driver.findAll({ include: Team });
    const dbDriversFiltered = getDb(dbDrivers);


    const allDrivers = [...dbDriversFiltered, ...promiseDrivers];

    return allDrivers;


}
module.exports = getDrivers;