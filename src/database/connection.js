import Sequelize from 'sequelize';
import dotenv from 'dotenv'

dotenv.config()

export const connection = new Sequelize(
    process.env.DB_URL,
    // process.env.DB_BASE,
    // process.env.DB_USER,
    // process.env.DB_PASS,
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)