module.exports = {
    default: (req, res) => {
        res.render("user/dashboard");
    },
    cars: (req, res) => res.render("user/cars"),
    carAdd: (req, res) => res.render("user/carAdd"),
};
