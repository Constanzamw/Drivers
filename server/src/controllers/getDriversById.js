const axios = require("axios");
const { Driver, Team } = require("../db");
const getData = require("../utils/getData");
const getDb = require("../utils/getDb");

const baseUrl = "http://localhost:5000/drivers";

const getDriversById = async (id) => {

    if (id.toString().length > 4) {
        const driversDb = [await Driver.findByPk(id, { include: [ { model: Team }] })]
        
        const newDriver = driversDb.map((driver) => {
          return {
            id: data.id,
            driverRef: data.driverRef,
            number: data.number,
            code: data.code,
            name: data.name.forename,
            surname:data.name.surname,
            image: data.image.url,
            dob: data.dob,
            nationality: data.nationality,
            url: data.url,
            teams: data.teams ? data.teams.split(',').map((team) => team.trim()) : [],
            description: data.description,
          }
        })
        return newDriver[0];
      }
    
     //si no esta en la db, hacemos pticion a la api
          const newDriver = await axios
          .get(`${baseUrl}/${id}`)
          .then((response) => response.data)
          .then((data) => getData(data))
          .catch((error) => {
            console.warn(`Error fetching data: ${error.message}`);
          });
    
    
          return newDriver;
        
   


}
module.exports = getDriversById;