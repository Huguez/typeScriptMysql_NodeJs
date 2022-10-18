import { Request,  Response } from "express";
import User from '../model/user'

export const postUser = async ( req: Request, res: Response ) => {
   try {
      const data = req.body
      
      const existe = await User.findOne({ where: { email: data.email, state: true } })
   
      if( existe ){
         return res.status( 400 ).json( { msg: `ya existe un usuario con el email ${ data.email }` } )   
      }

      const user = await User.create( data )
      // await user.save()

      return res.status( 200 ).json( user )
   } catch (error) {
      console.log( error );
      res.status( 500 ).json( error )
   }
}

export const getUsers = async ( req: Request, res: Response ) => {
   try {
      const users = await User.findAll({where: { status: true } });
      
      return res.status(200).json( users )

   } catch (error) {
      console.log( error );
      return res.status(500).json( error )
   }
}

export const getUser = async ( req: Request, res: Response ) => {
   try {
      
      const { id } = req.params
      
      const user = await User.findOne( { where: { id, state: true }  } )
      
      if( !user ){
         return res.status(404).json( { msg: `No existe el usuario con id: ${ id }` } )   
      }

      return res.status( 200 ).json( user )
   } catch (error) {
      console.log( error );
      res.status(500).json( error )
   }
}

export const putUser = async ( req: Request, res: Response ) => {
   try {
      const { email, ...data } = req.body
      const { id } = req.params
      
      const user = await User.findOne( { where:{ id, state: true } } )
      
      if( !user ){
         return res.status( 404 ).json( { msg: `El usuario con el email ${ email } no existe` } )   
      }

      await user.update( { email, ...data } )
      
      return res.status( 200 ).json( user )
   } catch (error) {
      console.log( error );
      res.status(500).json( error )
   }
}

export const deleteUser = async ( req: Request, res: Response ) => {
   try {
      const { id } = req.params
      
      const user = await User.findOne( { where:{ id, state: true } } )
      
      if( !user ){
         return res.status( 404 ).json( { msg: `El usuario con el id ${ id } no existe` } )   
      }

      await user.update( { state: false } )
      
      return res.status( 200 ).json( user )
   } catch (error) {
      console.log( error );
      res.status(500).json( error )
   }
}

