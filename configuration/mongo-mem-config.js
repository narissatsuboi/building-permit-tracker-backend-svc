const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer = undefined;

async function connectDB() {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  mongoose.connect(mongoUri);

  mongoose.connection.on("error", (e) => {
    if (e.message.code === "ETIMEDOUT") {
      console.log(e);
      mongoose.connect(mongoUri);
    }
    console.log(e);
  });

  mongoose.connection.once("open", () => {
    console.log(`MongoDB successfully connected to ${mongoUri}`);
  });
}

const dropDB = async () => {
  if (mongoServer) {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
  }
};

const dropCollections = async () => {
  if (mongoServer) {
    const collections = await mongoose.connection.collections;
    if (collections) {
      for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany(); 
      }
    } 
  }
};

module.exports = {
  connectDB,
  dropDB,
  dropCollections,
};
