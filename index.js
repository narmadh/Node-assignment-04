const express = require('express')
const app = express()
const port=8080
app.get("/", (req, resp) => {
  resp.send("Hello world")
})
app.post("/add",(req,resp)=>{
  const nums=req.query
  let n1=parseInt(nums['num1'])
  let n2=parseInt(nums['num2'])
  let sum=n1+n2
  resp.send(sum.toString())
  
  
})
app.post("/sub",(req,resp)=>{
  const nums=req.query
  let n1=parseInt(nums['num1'])
  let n2=parseInt(nums['num2'])
  let sum=n1-n2
  resp.send(sum.toString())
  
  
})
app.post("/multiply",(req,resp)=>{
  const nums=req.query
  let n1=parseInt(nums['num1'])
  let n2=parseInt(nums['num2'])
  let sum=n1*n2
  resp.send(sum.toString())
  
  
})
app.post("/divide",(req,resp)=>{
  const nums=req.query
  let n1=parseInt(nums['num1'])
  let n2=parseInt(nums['num2'])
  let sum=n1/n2
  resp.send(sum.toString())
  
  
})

app.listen(port,(req,resp)=>{
  console.log("listening at 8080")
})