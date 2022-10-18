import { Request,  Response } from "express";


export const postUser = ( req: Request, res: Response ) => {
   try {
      const data = req.body

      return res.json({ msg: "post user", ...data })
   } catch (error) {
      console.log( error );
      res.status(500).json( error )
   }
}

export const getUsers = ( req: Request, res: Response ) => {
   try {
      res.json({ msg: "post user" })
   } catch (error) {
      console.log( error );
      res.status(500).json( error )
   }
}

export const getUser = ( req: Request, res: Response ) => {
   try {
      res.json({ msg: "get user" })   
   } catch (error) {
      console.log( error );
      res.status(500).json( error )
   }
}

export const putUser = ( req: Request, res: Response ) => {
   try {
      res.json({ msg: "put user" })   
   } catch (error) {
      console.log( error );
      res.status(500).json( error )
   }
}

export const deleteUser = ( req: Request, res: Response ) => {
   try {
      res.json({ msg: "delete user" })   
   } catch (error) {
      console.log( error );
      res.status(500).json( error )
   }
}

