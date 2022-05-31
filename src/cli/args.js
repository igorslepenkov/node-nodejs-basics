import process from "process";

export const parseArgs = () => {
  const args = process.argv;
  for (let i = 2, j = 3; i < args.length, j < args.length; i += 2, j += 2) {
    console.log(`${args[i].replace(/--/, "")} is ${args[j]}`);
  }
};

parseArgs();
