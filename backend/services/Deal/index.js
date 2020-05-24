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
                "SELECT * FROM deal WHERE iddeal = ?",
                [id]
            );
            let q1 = await query(
                `SELECT p.original_price as original_price, p.name as product_name, p.image as image, m.name as merchant_name
                 FROM deal d JOIN product p ON d.product_idproduct = p.idproduct JOIN merchant m ON m.idmerchant = p.merchant_idmerchant
                 WHERE iddeal = ?`, [id]
            );
            console.log({message: 'Success', status: 200, deal: {idproduct: q[0].idproduct}});
            return {message: 'Success', status: 200, deal: {interest_count: q[0].actual_buyers,
                                                            interest_target: q[0].target_buyers,
                                                            target_price: q[0].target_price,
                                                            prazo: q[0].expiration,
                                                            original_price: q1[0].original_price,
                                                            product_name: q1[0].product_name,
                                                            image: q1[0].image,
                                                            merchant_name: q1[0].merchant_name
                                                        }};
        } catch (error){
            console.log(error);
            throw error;
        }
    }

    static async participateDeal({iddeal, idconsumer}){
        try{
            //let q0 = await query(
            //    "INSERT INTO consumer_wants_deal(deal_iddeal, consumer_idconsumer) VALUES (?, ?)",
            //    [iddeal, idconsumer]
            //);
            console.log('IDDEAL', iddeal)
            let q1 = await query(
                "SELECT * FROM deal WHERE iddeal = ?",
                [iddeal]
            );
            console.log('RETURNS', q1)
            let newNum = q1[0].actual_buyers + 1;
            let q2 = await query(
                "UPDATE deal SET actual_buyers = ? WHERE iddeal = ?",
                [newNum, iddeal]
            );
            return {message: 'Success', status: 200};
        } catch(error){
            throw error;
        }
    }
}

module.exports = Deal;