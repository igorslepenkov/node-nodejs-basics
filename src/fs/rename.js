import fs from "fs/promises";
import path from "path";
import url from "url";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const rename = async (oldPath, newPath) => {
  try {
    await fs.rename(oldPath, newPath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

rename(
  path.join(dirname, "files", "wrongFilename.txt"),
  path.join(dirname, "files", "properFilename.md")
);
