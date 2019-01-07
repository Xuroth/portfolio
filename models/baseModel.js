const   MongoClient = require('mongodb').MongoClient,
        assert = require('assert'),
        dbURI = 'mongodb://localhost:27017/portfolio';//;

MongoClient.connect(dbURI, (err, client) => {
    assert.equal(null, err);
    console.log('Successfully connected to DB!');

    //establish db = client.db(dbName)

    client.close();
});