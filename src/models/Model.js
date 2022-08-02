const conn = require("./DBConnect");
const DBConnect = require("./DBConnect");

class Model {
    conn;

    constructor() {
        this.conn = DBConnect.createConnect();
    }

    querySQL(sql) {
        return new Promise((resolve, reject) => {
            this.conn.query(sql, (err, result) => {
                if (err) {
                    reject(err.message);
                }
                resolve(result)
            })
        })
    }
}

module.exports = Model
