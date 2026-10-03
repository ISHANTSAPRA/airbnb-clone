// Core Modules
const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/pathUtil");

const bookingDataPath = path.join(rootDir, "data", "booking.json");

module.exports = class Booking {

  static addToBooking(homeId, callback) {

    Booking.getBookings((bookings) => {

      if (bookings.includes(Number(homeId))) {
        callback("Home is already booked");
      } else {

        bookings.push(Number(homeId));

        fs.writeFile(
          bookingDataPath,
          JSON.stringify(bookings),
          callback
        );
      }

    });
  }

  static getBookings(callback) {

    fs.readFile(bookingDataPath, (err, data) => {

      callback(!err ? JSON.parse(data) : []);

    });

  }

  static deleteById(delHomeId, callback) {

    Booking.getBookings(homeIds => {

      homeIds = homeIds.filter(
        homeId => Number(delHomeId) !== homeId
      );

      fs.writeFile(
        bookingDataPath,
        JSON.stringify(homeIds),
        callback
      );

    });

  }

};
