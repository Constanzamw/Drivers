const getData = async (data) => {
    const obj = {
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
    };
    // console.log(obj, "obj")
    // console.log(data, "datita")
  
     
    if (!obj) throw new Error("Error getting data");
  
    return obj;
  };
  
  module.exports = getData;