import process from "process";

export const parseEnv = () => {
  for (const entry of Object.entries(process.env)) {
    if (entry[0].match(/^RSS_/)) {
      console.log(entry.join("="));
    }
  }
};

parseEnv();
