const   MongoClient = require('mongodb').MongoClient,
        assert = require('assert'),
        dbURI = process.env.DATABASE_URI;

MongoClient.connect(dbURI, (err, client) => {
    assert.equal(null, err);
    console.log('Successfully connected to DB!');

    //establish db = client.db(dbName)

    client.close();
});