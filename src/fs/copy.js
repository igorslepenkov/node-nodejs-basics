import fs from "fs/promises";
import { constants } from "fs";
import path from "path";
import url from "url";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const copy = async (srcPath, destPath) => {
  try {
    if (!path.extname(srcPath)) {
      await fs.mkdir(destPath);

      const files = await fs.readdir(srcPath, { withFileTypes: true });

      for (const file of files) {
        if (file.isFile()) {
          fs.copyFile(
            path.join(srcPath, file.name),
            path.join(destPath, file.name),
            constants.COPYFILE_EXCL
          );
        } else {
          copy(path.join(srcPath, file.name), path.join(destPath, file.name));
        }
      }
    } else {
      fs.copyFile(srcPath, destPath, constants.COPYFILE_EXCL);
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

copy(path.join(dirname, "files"), path.join(dirname, "files_copy"));
