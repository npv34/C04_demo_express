const Model = require('./Model')

class UserModel extends Model {

    async getAllUsers() {
        const sql = "SELECT * FROM users";
        return await this.querySQL(sql);
    }

    async delete(id) {
        const sql = `DELETE FROM users WHERE id = ${id}`;
        return await this.querySQL(sql);
    }
}

module.exports = UserModel
