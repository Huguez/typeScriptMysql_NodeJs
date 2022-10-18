import express,{ Application } from "express";

import userRoutes from '../routes/user'
// import * as userRoutes from '../routes/user'


class Server {
   
   private app: Application ;
   private port: string;
   private apiPath = {
      users: "/api/users"
   }

   constructor(){
      this.app = express();
      this.port = process.env.PORT || "8000";
      
      this.routes()
   }

   routes(){
      this.app.use( this.apiPath["users"], userRoutes ) // userRoutes.default
      
   }

   start(){
      this.app.listen( this.port,  () => {
         console.log(`Server stared!!!`);
         console.log(`Go to http://localhost:${ this.port }/`);
      } )
   }
   
}

export default Server;