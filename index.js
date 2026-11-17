import express from 'express'
import cors from 'cors'
import { MongoClient, ObjectId } from 'mongodb';
import 'dotenv/config'


const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())

// Mongodb Connection
const client = new MongoClient(process.env.MONGO_DB_URI);

export async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("You successfully connected to MongoDB!");
        return client;
    } catch (err) {
        console.dir(err);
    }
}

const mongoClient = await connectToMongoDB()
const db = mongoClient.db('studiospace')
const studioCollection = db.collection('studio')
const bookingCollection= db.collection('bookings')

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.post('/add-studio', async (req, res) => {
    const data = req.body
    const result = await studioCollection.insertOne(data)
    res.send(result)
    console.log(result);
})

app.get('/studios', async(req, res) => {
    const result = await studioCollection.find().toArray()
    res.send(result)
})

app.get('/studio/:id', async (req, res) => {
    const {id} = await req.params
    const result = await studioCollection.findOne({_id: new ObjectId(id)})
    res.send(result)
})

app.patch('/studio/:id', async(req, res) => {
    const { _id, ...data } = await req.body
    const {id} = await req.params
    
    const result = await studioCollection.updateOne(
        {_id: new ObjectId(id)},
        {$set: data}
    )
    res.json(result)
})

app.delete('/studio/:id', async(req, res) => {
    const {id} = req.params
    const result  = await studioCollection.deleteOne(
        { _id: new ObjectId(id) }
    )
    res.json(result)
} )

app.post('/booking', async (req, res) =>{
    const data = req.body
    const result = await bookingCollection.insertOne(data)
    res.send(result)
})

app.get('/my-bookings/:email', async(req, res) => {
    const {email} = req.params
    const result = await bookingCollection.find({email: email}).toArray()
    res.send(result);
})

app.delete('/my-bookings/:id', async(req, res) => {
    const {id} = req.params
    const result = await bookingCollection.deleteOne({_id: id})
    res.send(result);
    
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})