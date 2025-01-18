const { StatusCodes } = require("http-status-codes");

const Info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "Api is live",
    error: {},
    data: {},
  });
};

module.exports = {
  Info,
};
