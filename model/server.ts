import express, { Application } from "express";
import cors from 'cors'
import userRoutes from '../routes/user' // import * as userRoutes from '../routes/user'
import db from '../db/config'

class Server {
   
   private app: Application ;
   private port: string;
   private apiPath = {
      users: "/api/users"
   }

   constructor(){
      this.app = express();
      this.port = process.env.PORT || "8000";
      
      this.middlewares()

      this.routes()

      this.connectDB()
   }

   async connectDB(){
      try {
         await db.authenticate()
         console.log( "connection DB" );
         
      } catch (error) {
         console.log(error);
         throw new Error("Trono connectionBD");
      }
   }

   routes(){
      this.app.use( this.apiPath["users"], userRoutes ) // userRoutes.default
   }

   middlewares(){
      this.app.use( cors() )
   
      this.app.use( express.static( 'public' ) )

      this.app.use( express.json() )
   }
   
   start(){
      this.app.listen( this.port,  () => {
         console.log(`Server stared!!!`);
         console.log(`Go to http://localhost:${ this.port }/`);
      } )
   }
   
}

export default Server;