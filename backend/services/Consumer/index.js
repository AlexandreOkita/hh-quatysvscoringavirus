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

    static async loginConsumer({email}){
        try{
            q = query(
                "SELECT idconsumer, name FROM consumer WHERE email = ?",
                [email]
            );

            return {message: 'Succes', status: 200, consumer: {id: q[0].id, name: q[0].name}};
        } catch (error){
            throw error;
        }
    }
}

module.exports = Consumer;