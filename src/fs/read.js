import fs from "fs/promises";
import path from "path";
import url from "url";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const read = async (fileToRead) => {
  try {
    const data = await fs.readFile(fileToRead, { encoding: "utf-8" });
    console.log(data);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

read(path.join(dirname, "files", "fileToRead.txt"));
