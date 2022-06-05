import fs from "fs";
import zlib from "zlib";
import path from "path";
import url from "url";
import { pipeline } from "stream/promises";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const compress = async (pathToFile, destPath) => {
  await pipeline(
    fs.createReadStream(pathToFile),
    zlib.createGzip(),
    fs.createWriteStream(destPath)
  );
  fs.rm(pathToFile, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

compress(
  path.join(dirname, "files", "fileToCompress.txt"),
  path.join(dirname, "files", "archive.gz")
);
