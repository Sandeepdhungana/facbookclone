import express from 'express';



const app = express();
app.use(express.json());




app.get('/', (req, res) => {
    res.send("server is up and running");
})







const PORT = 5000 || process.env.PORT
app.listen(PORT, () => {
    console.log('server is up and running');
})