import os from "os";
import { Worker } from "worker_threads";
import path from "path";
import url from "url";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const performCalculations = async () => {
  const initThread = (n) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(path.join(dirname, "worker.js"), {
        workerData: 10 + n,
      });
      worker.on("message", (data) => resolve(data));
    });
  };

  const runThreads = async () => {
    const cpus = os.cpus();
    return Promise.all(
      cpus.map((cpu, index) => {
        return initThread(index);
      })
    );
  };

  const res = await runThreads();
  return res;
};

performCalculations().then((res) => console.log(res));
