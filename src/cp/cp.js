import { fork } from "child_process";
import url from "url";
import path from "path";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const spawnChildProcess = async (args) => {
  const cp = fork(path.join(dirname, "files/script.js"), args, {
    stdio: "pipe",
  });
  process.stdin.pipe(cp.stdin);
  cp.stdout.pipe(process.stdout);
};

spawnChildProcess(["apple", "banana"]);
