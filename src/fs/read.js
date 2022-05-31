import fs from "fs/promises";
import path from "path";

export const read = async (fileToRead) => {
  try {
    const data = await fs.readFile(fileToRead, { encoding: "utf-8" });
    console.log(data);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

read(path.resolve("files", "fileToRead.txt"));
