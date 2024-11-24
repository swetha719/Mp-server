// import json server
const jsonServer=require('json-server')


// create server for media player appln

const Mpserver=jsonServer.create()

// create middleware

const middleware=jsonServer.defaults()

// setup router for json filr in server

const route=jsonServer.router('db.json')

// set up for running server app

const PORT=3000 || process.env.PORT


Mpserver.use(middleware)
Mpserver.use(route)

Mpserver.listen(PORT,()=>{
    console.log(`media player server running at port ${PORT} and waiting for client request` );
    
})