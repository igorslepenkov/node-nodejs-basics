import { createHash } from "crypto";
import path from "path";
import url from "url";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const calculateHash = async () => {
  const hash = createHash("sha256");
  hash.update(path.join(dirname, "files", "fileToCalculateHashFor.txt"));
  const hex = hash.digest("hex");
  return hex;
};

calculateHash().then((hex) => console.log(hex));
