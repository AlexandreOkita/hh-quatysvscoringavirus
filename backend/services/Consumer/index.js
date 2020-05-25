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

    static async getCredit({id}){
        try{
            let q = await query(
                "SELECT idconsumer, credit FROM consumer WHERE idconsumer = ?",
                [id]
            );
            console.log('RESULTS', q);
            console.log({message: 'Success', status: 200, consumer: {id: q[0].idconsumer, credit: q[0].credit}});
            return {message: 'Success', status: 200, consumer: {credit: q[0].credit}};
        } catch (error){
            console.log(error);
            throw error;
        }
    }

    static async buyProduct({idproduct, idconsumer, price}){
        try{
            await this.changeCredit({id: idconsumer, diffCredit: -1*price});
            let q = await query(
                "INSERT INTO consumer_buy_product(product_idproduct, price) VALUES (?, ?) WHERE idconsumer = ?",
                [idproduct, price, idconsumer]
            );
            return {message: 'Success', status: 200};
        } catch(error){
            console.log(error);
            throw error;
        }
    }


    static async changeCredit({id, diffcredit}){
        try{
            let q0 = await query(
                "SELECT credit FROM consumer WHERE idconsumer = ?",
                [id]
            );
            let newCredit = q0[0].credit + diffcredit;
            let q1 = await query(
                "UPDATE consumer SET credit = ? WHERE idconsumer = ?",
                [newCredit, id]
            );
            console.log({message: 'Success', status: 200, consumer: {id: id, credit: newCredit}})
            return {message: 'Success', status: 200, consumer: {id: id, credit: newCredit}};
        } catch (error){
            console.log(error);
            throw error;
        }
    }
}

module.exports = Consumer;