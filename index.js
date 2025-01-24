const jsonServer =require ("json-server")
 const TDServer=jsonServer.create()
 const middleware=jsonServer.defaults()
 const PORT=5000
 const route =jsonServer.router('db.json')
 MPServer.use(middleware)
 MPServer.use(route)

 TDServer.listen(PORT,()=>{
    console.log(`MPServer started on ${PORT}`);
    
 })