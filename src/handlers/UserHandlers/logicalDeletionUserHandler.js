const { logicalDeletionUser } = require("../../controllers/UserControllers/logicalDeletionUser");

module.exports = async (req, res) => {
    const { id } = req.params;
    try {
        await logicalDeletionUser(id);
        res.send({ message: 'User local deletion' });
    } catch (e) {
        res.send({ message: e.message });
    };
};