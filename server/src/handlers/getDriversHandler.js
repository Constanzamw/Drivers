const getDrivers = require("../controllers/getDrivers")

const getDriversHandler = async (req, res) => {
  try {
        const allDrivers = await getDrivers()
        //console.log(allDrivers, "drivers");
        return res.status(200).json(allDrivers)
  } catch (error) {
    return res.status(400).json({errorMessage: error.message})
  }
};

module.exports = getDriversHandler;