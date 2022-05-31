import fs from "fs/promises";
import path from "path";

export const create = async (path, text) => {
  try {
    await fs.writeFile(path, text, { flag: "wx" });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

create(path.resolve("files", "fresh.txt"), "I am fresh and young");
