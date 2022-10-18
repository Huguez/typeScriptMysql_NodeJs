import { DataTypes, literal } from "sequelize";
import db from "../db/config";

const Usuarios = db.define( 'usuarios', {
   name: {
      type: DataTypes.STRING
   },
   email: {
      type: DataTypes.STRING
   },
   password: {
      type: DataTypes.STRING
   },
   state: {
      type: DataTypes.BOOLEAN
   }, 
   createdAt: {
      type: DataTypes.DATE,
      defaultValue: literal('NOW()')
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: literal('NOW()')
    }
} )

export default Usuarios;