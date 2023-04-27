const jsonserver= require('json-server')

const server= jsonserver.create()

//setup path for db.json

const router= jsonserver.router('db.json')

const middleware = jsonserver.defaults()

//setupport

const port= process.env.port || 4000

server.use(middleware)
server.use(router)



server.listen(port,()=>{
    console.log(port);
})