import fs from "fs/promises";
import { constants } from "fs";
import path from "path";

export const copy = async (srcPath, destPath) => {
  try {
    if (!path.extname(srcPath)) {
      await fs.mkdir(destPath);

      const files = await fs.readdir(srcPath, { withFileTypes: true });

      for (const file of files) {
        if (file.isFile()) {
          fs.copyFile(
            path.resolve(srcPath, file.name),
            path.resolve(destPath, file.name),
            constants.COPYFILE_EXCL
          );
        } else {
          copy(
            path.resolve(srcPath, file.name),
            path.resolve(destPath, file.name)
          );
        }
      }
    } else {
      fs.copyFile(
        path.resolve(srcPath),
        path.resolve(destPath),
        constants.COPYFILE_EXCL
      );
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

copy(path.resolve("files"), path.resolve("files", "..", "files_copy"));
