import fs from "fs/promises";
import path from "path";

export const remove = async (pathToFile) => {
  try {
    await fs.rm(pathToFile);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

remove(path.resolve("files", "fileToRemove_copy.txt"));
