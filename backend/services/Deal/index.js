const connection = require('../../db_connection/dbConnection');
const util = require('util');

const query = util.promisify(connection.query).bind(connection);

class Deal{

    static async getDeal({id}){
        try{
            let q = await query(
                "SELECT * FROM consumer WHERE iddeal = ?",
                [id]
            );
            console.log({message: 'Success', status: 200, deal: {id: q[0].idconsumer, name: q[0].name}});
            return {message: 'Success', status: 200, deal: {interest_count: q[0].actualbuyers,
                                                            interest_target: q[0].targetbuyers,
                                                            target_price: q[0].targetprice,
                                                            prazo: q[0].expiration}};
        } catch (error){
            console.log(error);
            throw error;
        }
    }
}

module.exports = Deal;