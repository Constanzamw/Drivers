const getDriversById = require("../controllers/getDriversById")

const getDriversByIdHandler = async (req, res) => {
  try {
         const {id} = req.params;
        const driver = await getDriversById(id)
        //console.log(allDrivers, "drivers");
        return res.status(200).json(driver)
  } catch (error) {
    return res.status(400).json({errorMessage: error.message})
  }
};

module.exports = getDriversByIdHandler;