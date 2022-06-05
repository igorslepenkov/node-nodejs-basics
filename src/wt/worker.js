// n should be received from main thread
import { workerData, parentPort } from "worker_threads";

export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (data) => {
  const result = nthFibonacci(data);
  if (result) {
    parentPort.postMessage({ status: "resolved", data: result });
  } else {
    parentPort.postMessage({ status: "error", data: null });
  }
};

sendResult(workerData);
