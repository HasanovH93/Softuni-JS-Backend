const Hotel = require("../models/Hotel");

async function getAll() {
  return Hotel.find({}).lean();
}

async function getById(id) {
  return Hotel.findById(id).lean();
}

async function getByUserBooking(userId){
  return await  Hotel.find({bookings: userId}).lean()
}

async function create(hotel) {
  return await Hotel.create(hotel);
}
async function update(id, hotel) {
  const existing = await Hotel.findById(id);

  existing.name = hotel.name;
  existing.city = hotel.city;
  existing.rooms = hotel.rooms;
  existing.imageUrl = hotel.imageUrl;

  await existing.save();
}
async function deleteById(id) {
  await Hotel.findByIdAndDelete(id);
}
async function bookRoom(hotelId, userId) {
  const hotel = await Hotel.findById(hotelId);

  if (hotel.bookings.includes(userId)) {
    throw new Error("Cannot book twice");
  }

  hotel.bookings.push(userId);
  await hotel.save();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  bookRoom,
  getByUserBooking,
};
