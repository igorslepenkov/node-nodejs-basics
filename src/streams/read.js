import fs from "fs";
import url from "url";
import path from "path";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const read = async (pathToFile) => {
  const rs = fs.createReadStream(pathToFile);
  rs.pipe(process.stdout);
};

read(path.join(dirname, "files", "fileToRead.txt"));
