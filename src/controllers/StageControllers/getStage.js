const { Stage, Child } = require("../../DB");

module.exports = async () => {
  try {
    const allStage = await Stage.findAll({
      include: Child,
    });
    return allStage;
  } catch (error) {
    console.log(error);
    throw new Error("Error in the server get");
  }
};
