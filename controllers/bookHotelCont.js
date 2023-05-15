const BookHotel = require("../models/bookhotel");

/* GET HOTEL BOOKING */
exports.getBookHotels = (req, res) => {
  const bookhotel = BookHotel
  .find()
  .populate("user", ["name", "email"])
  .populate("pets", ["name", "pet_type", "age"])
  .then((bookhotel) => {
    res.status(200).json({
      status: true,
      message: "List of Hotel Booking",
      data: {
        bookhotel,
      },
    });
  });
};

/* ADD BOOK HOTEL */
exports.addBookHotel = async (req, res) => {
  
    const bookhotel = new BookHotel({
      user: req.body.user,
      pets: req.body.pets,
      firstdate: req.body.firstdate,
      lastdate: req.body.lastdate,
    });
    await bookhotel.save().then((result) => {
      res.json({
        message: "You have successfully booked a hotel",
      });
    });
};

/* UPDATE BOOK HOTEL */
exports.patchBookHotel = (req, res) => {
  const bookhotel = BookHotel.findByIdAndUpdate(
    req.query.id, 
    req.body,
     {new: true}
     ).then((bookhotel) => {
    console.log(req.query.id);
    res.json({
      bookhotel,
    });
  });
};

/* DELETE BOOK HOTEL */
exports.deleteBookHotel = (req, res) => {
  const bookhotel = BookHotel.findByIdAndRemove(
    req.query.id
    ).then((message) => {
    res.json({
      message: "You have successfully removed a book hotel",
    });
  });
};
