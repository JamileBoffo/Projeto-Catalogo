import Sequelize from 'sequelize'
import { connection } from '../database/connection.js'

export const variados = connection.define("variados", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    ano: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    autores: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    sinopse: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    img: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updateAt: false,
    timestamps: false
})

const initTable = async () => {
    await variados.sync()
}

<<<<<<< HEAD
initTable()
=======
initTable()
>>>>>>> 971676bc950aed979d5760c9ae50e4c1bc5f38de
