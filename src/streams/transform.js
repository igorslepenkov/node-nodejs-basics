import { Transform } from "stream";

export const transform = async () => {
  const ts = new Transform({
    transform(chunk, encoding, callback) {
      const result = chunk.toString().split("").reverse().join("") + "\n";
      callback(null, result);
    },
  });

  process.stdin.on("data", (data) => {
    if (data.toString().includes("CLOSE")) {
      process.exit();
    }
  });

  process.stdin.pipe(ts).pipe(process.stdout);
};

transform();
