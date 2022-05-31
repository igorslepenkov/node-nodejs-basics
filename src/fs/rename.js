import fs from "fs/promises";
import path from "path";

export const rename = async (oldPath, newPath) => {
  try {
    await fs.rename(oldPath, newPath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

rename(
  path.resolve("files", "wrongFilename.txt"),
  path.resolve("files", "properFilename.md")
);
