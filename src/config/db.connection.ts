import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
console.log('process.env.HOST');
console.log(process.env.USER);
console.log(process.env.DATABASE);
const pool = mysql.createPool({
    host            : process.env.HOST,
    port            : 3309,
    user            : 'ats', 
    password        : 'Ats112233', 
    database        : process.env.DATABASE,
    connectionLimit : 10,   
    multipleStatements : true,
});

export default pool;
