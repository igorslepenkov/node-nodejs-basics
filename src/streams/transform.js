import { Transform } from "stream";

export const transform = async () => {
  const ts = new Transform({
    transform(chunk, encoding, callback) {
      const result = chunk.toString().split("").reverse().join("");
      callback(null, result);
    },
  });

  process.stdin.on("data", (data) => {
    if (data.toString().includes("--close--")) {
      process.stdin.push(null);
      process.stdout.push(null);
    }
  });

  process.stdin.pipe(ts).pipe(process.stdout);
};

transform();
