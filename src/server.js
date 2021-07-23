import { server } from "./arrayLeakOnRequest.js";

console.log("[-] starting server.js script");

server.listen(3001, () => {
  console.log("[-] started server on port 3001 ...");
});
