import fs from "fs";
import zlib from "zlib";
import path from "path";
import url from "url";
import { pipeline } from "stream/promises";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const decompress = async (pathToFile, destPath) => {
  await pipeline(
    fs.createReadStream(pathToFile),
    zlib.createGunzip(),
    fs.createWriteStream(destPath)
  );
  fs.rm(pathToFile, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

decompress(
  path.join(dirname, "files", "archive.gz"),
  path.join(dirname, "files", "fileToCompress.txt")
);
