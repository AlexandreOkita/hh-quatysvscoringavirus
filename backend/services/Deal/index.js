const connection = require('../../db_connection/dbConnection');
const util = require('util');

const query = util.promisify(connection.query).bind(connection);

class Deal{

    static async createDeal({idproduct, targetbuyers, targetprice, expiration}){
        try{
            let q = await query(
                "INSERT INTO deal(idproduct, targetbuyers, targetprice, expiration) VALUES (?, ?)",
                [idproduct, targetbuyers, targetprice, expiration]
            );
            console.log({message: 'Success', status: 200});
            return {message: 'Success', status: 200}
        } catch (error){
            console.log(error);
            throw error;
        }
    }

    static async getDeal({id}){
        try{
            let q = await query(
                "SELECT * FROM consumer WHERE iddeal = ?",
                [id]
            );
            console.log({message: 'Success', status: 200, deal: {idproduct: q[0].idproduct}});
            return {message: 'Success', status: 200, deal: {interest_count: q[0].actualbuyers,
                                                            interest_target: q[0].targetbuyers,
                                                            target_price: q[0].targetprice,
                                                            prazo: q[0].expiration}};
        } catch (error){
            console.log(error);
            throw error;
        }
    }

    static async participateDeal({iddeal, idconsumer}){
        try{
            let q0 = await query(
                "INSERT INTO consumer_wants_deal(deal_iddeal, consumer_idconsumer) VALUES (?, ?)",
                [iddeal, idconsumer]
            );
            let q1 = await query(
                "SELECT iddeal FROM deal WHERE iddeal = ?",
                [actualbuyers]
            );
            let newNum = q1[0].actualbuyers + 1;
            let q2 = await query(
                "UPDATE deal SET actualbuyers = ? WHERE iddeal = ?",
                [newNum, actualbuyers]
            );
            return {message: 'Success', status: 200};
        } catch(error){
            throw error;
        }
    }
}

module.exports = Deal;