import { Client } from 'appwrite';

const client = new Client();
client
  .setEndpoint('http://localhost:80/') // Change to your Appwrite endpoint
  .setProject('663a8a4100283781637d'); // Replace with your Appwrite project ID

export default client;