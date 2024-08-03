const axios = require("axios");

module.exports.index = async (req, res) => {
    const response = await axios.get("https://randomuser.me/api/?results=10");
    const users = response.data.results;
    // console.log(users);

    const objectPaginationInit = {
        limitPage: 10,
        currentPage: 1,
        totalPage: 10,
    }

    if(req.query.page) {
        objectPaginationInit.currentPage = req.query.page;
    }


    res.render("client/pages/users/index", {
        pageTitle: "Danh sách người dùng",
        users: users,
        objectPaginationInit: objectPaginationInit
    });

}