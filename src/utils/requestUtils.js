const listResources = async function (req, res) {
  let resourceService = req.service;
  try {
    const data = await resourceService.getData();
    if (!data) {
      res.status(400).json({ message: "bad request" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  listResources,
};
