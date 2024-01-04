const TextCollection = require("../models/textcollection.js");

module.exports.BaseService = class BaseService {
  async getData() {
    try {
      const data = await TextCollection.find();
      if (!data) {
        return data;
      }
      return data;
    } catch (error) {
      return error;
    }
  }
};
