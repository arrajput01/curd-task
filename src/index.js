const app= require('./app')

const cors=require('cors')
app.use(cors())
const port=process.env.PORT

app.listen(port,()=>{
    console.log('server is up on port '+port)
})
