import express from "express";
import { Worker } from "worker_threads";

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).send("Non blocking page");
});

app.get("/blocking", (req, res) => {
  // Constructing a worker, where we pass the path of the worker file
  const worker = new Worker("./worker.js");

  // handle when worker thread sends a message to parent
  worker.on("message", (data) => {
    res.status(200).send(`Fibonacci of 45 is ${data}`);
  });

  // handle when worker thread sends a err to parent
  worker.on("error", () => {
    res.status(200).send(`Failed to perform: ${error}`);
  });
});

app.listen(PORT, () => {
  console.log(`Multithreading app running on ${PORT}`);
});
