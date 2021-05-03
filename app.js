const express = require('express');  
const app = express();  

const path = require('path');
const logtime=function(req,res,next){
  const date=new Date(Date.now())
  console.log(date)
  const day=date.getDay()
  const hours=date.getHours()
  if(day>0 && day<6 && hours>9 && hours < 17) next()
  else{
      console.log('website not available')
      res.redirect('/error.html')
    
  }
  }
  app.get('/error.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'myapp','error.html'))
  })
  app.use(logtime)
app.use(express.static(path.join((__dirname,'myapp'))))

app.get('/hello' , (req,res)=> {

  res.send('hello world')
})


 app.listen(8000)


 
/* 
app.get('/',  (req, res) => {  
  res.sendFile(path.join(__dirname,'myapp','nav.html'));  
});  


app.get('/contact',  (req, res) => {  
  res.sendFile(path.join(__dirname,'myapp','Contact.html'));  
}); 
  

app.get('/service',  (req, res) => {  
  res.sendFile(path.join(__dirname,'myapp','service.html'));  
}); 
 */
