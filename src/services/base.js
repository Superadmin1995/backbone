class BaseService {
  model
  
  constructor (model) {
    this.model = model;
  }

  get (query) {
    return this.model.find(query).lean();
  }

  getById (id) {
    return this.model.findById(id).lean();
  }

  async post (entityBody) {
    const entity = new this.model(entityBody);
    await entity.save();
    const entityObject = entity.toObject();
    return entityObject;
  }
}

module.exports = BaseService;
