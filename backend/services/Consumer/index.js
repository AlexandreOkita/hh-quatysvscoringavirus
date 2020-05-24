const connection = require('../../db_connection/dbConnection');
const util = require('util');

const query = util.promisify(connection.query).bind(connection);

class Consumer{
    
    static async registerConsumer({name, email}){
        try{
            q = query(
                "INSERT INTO consumer(name, email) VALUES (?, ?)",
                [name, email]
            );

            return {message: 'Success', status: 200};

        } catch(error){
            throw error;
        }
    }
}

module.exports = Consumer;