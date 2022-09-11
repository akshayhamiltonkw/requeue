const {sql,poolPromise}=require('../database')

const queueData=require('../data/events/index')

module.exports={
    queue: async (req,res)=>{
     try{

     }catch(error){
        console.log(error)

     }
    
        


    }
        
    ,
    GetByClient: async (req,res)=>{  
        try{

        }catch(error){
           console.log(error)
   
        }  

    },
    Hold: async (req,res)=>{    
        try{

        }catch(error){
           console.log(error)
   
        }

    },
    history: async (req,res)=>{  
        try{

        }catch(error){
           console.log(error)
   
        }  

    },
    Statistics: async (req,res)=>{
        try{

        }catch(error){
           console.log(error)
   
        }    

    },
    editChairs: async (req,res)=>{
        try{

        }catch(error){
           console.log(error)
   
        }    

    },
    editNote: async (req,res)=>{   
        try{

        }catch(error){
           console.log(error)
   
        } 

    },
    call: async (req,res)=>{    
        try{

        }catch(error){
           console.log(error)
   
        }

    },
    callStatus: async (req,res)=>{   
        try{

        }catch(error){
           console.log(error)
   
        } 

    },
    notify: async (req,res)=>{   
        try{

        }catch(error){
           console.log(error)
   
        } 

    },
    notifyReset: async (req,res)=>{    
        try{

        }catch(error){
           console.log(error)
   
        }

    },
    sendMessage: async (req,res)=>{    
        try{

        }catch(error){
           console.log(error)
   
        }

    },
    hold: async (req,res)=>{    
        try{

        }catch(error){
           console.log(error)
   
        }

    },
    cancel: async (req,res)=>{   
        try{

        }catch(error){
           console.log(error)
   
        } 

    },
    seat: async (req,res)=>{    
        try{

        }catch(error){
           console.log(error)
   
        }

    },
    add: async (req,res)=>{
            try {
                const data = req.body;
                const insert = await queueData.addQueue(data);
                res.send(insert);
                console.log(insert)
            } catch (error) {
                res.status(400).send(error.message);
            }
            //   .input('Id',sql.VarChar , req.body.Id)
            //   .input('Country',sql.VarChar , req.body.Country)
            //   .input('Phone',sql.VarChar,req.body.Phone)
            //   .input('Name',sql.VarChar,req.body.Name)
            //   .input('Gender',sql.VarChar,req.body.Gender)
            //   .query("INSERT INTO [dbo].[client] (Id,Country,Phone,Name,Gender) VALUES (@Id,@Country,@Phone,@Name,@Gender)")
            //   res.json(client);
            //   res.send('Please fill all the details!')

            //   console.log(client)
  
    }
        
    
} 
// "chairs": 1,
// "note": "test note",
// "clientId": 1303295,
// "tablePosition": "inside",
// "tagId": 2,
// "subTagId": -1,
// "client": {
//     "id": 1303295,
//     "country": 1,
//     "phone": "+96595001254",
//     "name": "abbas",
//     "gender": "Male"
// }