const jsonServer =require ("json-server")
 const TDServer=jsonServer.create()
 const middleware=jsonServer.defaults()
 const PORT=5000
 const route =jsonServer.router('db.json')
 TDServer.use(middleware)
 TDServer.use(route)

 TDServer.listen(PORT,()=>{
    console.log(`TDServer started on ${PORT}`);
    
 })