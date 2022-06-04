import fs from "fs";
import url from "url";
import path from "path";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const write = async (pathToFile) => {
  const ws = fs.createWriteStream(pathToFile);

  process.stdin.pipe(ws);

  process.stdin.on("data", (data) => {
    if (data.toString().includes("CLOSE")) {
      process.exit();
    }
  });
};

write(path.resolve(dirname, "files", "fileToWrite.txt"));
