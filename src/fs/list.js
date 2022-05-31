import fs from "fs/promises";
import path from "path";

export const list = async (pathToFolder) => {
  try {
    const files = await fs.readdir(pathToFolder, { withFileTypes: true });
    for (const file of files) {
      console.log(file.name);
    }
  } catch (arr) {
    throw new Error("FS operation failed");
  }
};

list(path.resolve("files"));
