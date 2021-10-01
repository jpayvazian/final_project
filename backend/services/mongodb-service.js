const { MongoClient, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBHOST}`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let collectionUsers= null
let collectionRooms = null

const connectDB = async function() {
    await client.connect()
    console.log('Successfully connected to MemoryDB')
    collectionUsers = client.db("MemoryDB").collection("Users");
    collectionRooms = client.db("MemoryDB").collection("Rooms");
}

connectDB()

exports.getUser = async function(id){
    const db_queryresults = await collectionUsers.findOne({ _id : ObjectId(id) })
    return db_queryresults
}

exports.updateUser = async function(data){
    const db_queryresults = await collectionUsers.updateOne({ _id : ObjectId(data.id)}, {
      $set: {
        highscore: data.highscore,
        gamesplayed: data.gamesplayed
      }  
    })
    return db_queryresults
}

exports.getLeaderboard = async function(){
    const db_queryresults = await collectionUsers.find({ }).toArray()
    return db_queryresults
}

exports.createRoom = async function(key){
    const db_queryresults = await collectionRooms.insertOne({ roomkey: key, players:[] }).toArray()
    return db_queryresults
}

exports.updateRoomPlayers = async function(data){
    const db_queryresults = await collectionRooms.updateOne({ _id : ObjectId(data.id)}, {
        $push: {
          players: {
              playerName: data.name,
          }
        }  
      })
      return db_queryresults
}

exports.updateRoomScores = async function(data){
    const db_queryresults = await collectionRooms.updateOne({ _id : ObjectId(data.id), "players.playerName" : data.name}, {
        $set: {
          "players.playerScore": data.score
        } 
      })
      return db_queryresults
}

exports.deleteRoom = async function(data){
    const db_queryresults = await collectionRooms.deleteOne({ _id: ObjectId(data.id) }).toArray()
    return db_queryresults
}

