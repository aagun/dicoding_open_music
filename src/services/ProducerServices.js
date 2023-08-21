const amqp = require("amqplib");

const ProducerServices = {
  sendMessage: async (queue, message) => {
    const connection = await amqp.connect(process.env.RABBITMQ_SERVER);
    const channel = await connection.createChannel();

    channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));

    setTimeout(() => connection.close(), 1000);
  },
};

module.exports = ProducerServices;
