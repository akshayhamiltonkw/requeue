const {sql,poolPromise}=require('../database')

module.exports={
    CountryList:{
        
    }
}



router.post('addNewHost',async (req,res)=>{
    try {
        if(req.body.RestaurantID != null && req.body.Username != null && req.body.Password != null) {
          const pool = await poolPromise
          const result = await pool.request()
          .input('RestaurantID',sql.VarChar , req.body.RestaurantID)
          .input('Username',sql.VarChar , req.body.Username)
          .input('Password',sql.VarChar,req.body.Password)
          .query("INSERT INTO [dbo].[host] (RestaurantID,Username,Password) VALUES (@RestaurantID,@Username,@Password)")
          res.json(result);
        } else {
          res.send('Please fill all the details!')
        }
      } catch (error) {
        res.status(500)
        res.send(error.message)
    }
})