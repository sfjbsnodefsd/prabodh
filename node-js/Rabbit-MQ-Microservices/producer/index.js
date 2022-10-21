const express = require("express");
const amqp = require("amqplib");

var channel, connection;

const app = express();

async function connect() {
    try {
        const amqpServer = "amqp://localhost:5672";
        connection = await amqp.connect(amqpServer);
        channel = await connection.createChannel();
        await channel.assertQueue("Rabbit");
    } catch (err) {
        console.log(err);
    }
}

connect();

app.get("/send", (req, res) => {

})

app.listen(5000, () => {
    console.log(`server is running at port 5000`);
})