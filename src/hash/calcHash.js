import { createHash } from "crypto";
import path from "path";
import url from "url";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const calculateHash = async () => {
  const hash = createHash("sha256");
  hash.update(path.join(dirname, "files", "fileToCalculateHashFor.txt"));
  const hashResult = hash.digest("hex");
  console.log(hashResult);
};

calculateHash();
