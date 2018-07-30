// importing orm to interact with database
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(req, res) {
            cb(res);
        });
    },

    // creating columns and values
    create: function(cols, vals, cb) {
        orm.create("cats", cols, vals, function(res) {
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },

    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;