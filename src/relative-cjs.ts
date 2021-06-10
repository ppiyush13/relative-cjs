import relative from "relative";

const unixify = (str: string) => str.replace(/[\\\/]+/g, "/");
export default (from: string, to: string) => {
  const relativePath = relative(from, to);
  const unixifiedPath = unixify(relativePath);

  if (unixifiedPath.length === 1 && unixifiedPath === ".") return "./.";
  else if (unixifiedPath.charAt(0) === ".") return unixifiedPath;
  else return "./" + unixifiedPath;
};
