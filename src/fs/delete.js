import fs from "fs/promises";
import path from "path";
import url from "url";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const remove = async (pathToFile) => {
  try {
    await fs.rm(pathToFile);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

remove(path.join(dirname, "files", "fileToRemove.txt"));
