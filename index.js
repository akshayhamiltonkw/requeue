const express =require('express');
const cors=require('cors');
require('dotenv').config();

const HostRoute=require('./routes/API');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/',HostRoute);
const port =process.env.PORT;


app.listen(process.env.PORT || port , (err) => {
  if(err)
console.log('Unable to start the server!')
else
console.log('Server started running on : ' + port)
})

//github token
// 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