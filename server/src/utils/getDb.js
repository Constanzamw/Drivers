const getDriverDB = (data) => {
    const formattedDbDrivers = data.map((driver) => ({
      id: driver.id,
      driverRef: driver.driverRef,
      number: driver.number,
      code: driver.code,
      name: driver.name,
      surname: driver.surname,
      image: driver.image,
      dob: driver.dob,
      nationality: driver.nationality,
      url: driver.url,
      teams: driver.teams,
      description: driver.description,
    }));
  
    return formattedDbDrivers;
  };
  
  module.exports = getDriverDB;