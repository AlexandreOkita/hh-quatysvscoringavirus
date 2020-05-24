const connection = require('../../db_connection/dbConnection');
const util = require('util');

const query = util.promisify(connection.query).bind(connection);

class Consumer{
    
    static async registerConsumer({name, email}){
        try{
            let q = await query(
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
            let q = await query(
                "SELECT idconsumer, name FROM consumer WHERE email = ?",
                [email]
            );
            console.log({message: 'Success', status: 200, consumer: {id: q[0].idconsumer, name: q[0].name}});
            return {message: 'Success', status: 200, consumer: {id: q[0].idconsumer, name: q[0].name}};
        } catch (error){
            console.log(error);
            throw error;
        }
    }

    static async buyProduct({idproduct, idconsumer, price}){
        try{
            await this.changeCredit({idconsumer: idconsumer, diffCredit: -1*price});
            let q = await query(
                "INSERT INTO consumer_buy_product(consumer_idconsumer, product_idproduct, price) VALUES (?, ?, ?)",
                [idconsumer, idproduct, price]
            );
            return {message: 'Success', status: 200};
        } catch(error){
            console.log(error);
            throw error;
        }
        

    }
}

module.exports = Consumer;