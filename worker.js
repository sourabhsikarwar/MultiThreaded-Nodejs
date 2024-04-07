import { parentPort } from "worker_threads";

// fibonacci function
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(45);

parentPort.postMessage(result);
