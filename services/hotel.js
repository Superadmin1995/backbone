const _ = require('lodash');
const Hotels = require('../models/hotel');

module.exports = {
  async create(hotelDetails) {
    const toPick = ['name', 'fullAddress', 'city', 'pincode', 'contactEmail', 'contactMobile'];
    let hotel = _.pick(hotelDetails, toPick);
    hotel = new Hotels(hotel);
    await hotel.save();
    return hotel;
  },
};
