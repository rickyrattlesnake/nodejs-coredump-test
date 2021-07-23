import http from "http";

const elementPerLoop = 1000;
const globalStore = [];

class Leaker {
  constructor(number) {
    this.number = number;
  }
}

const delay = async (ms) => new Promise((res) => setTimeout(() => res(), ms));

function blockingDelay(time) {
  var stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {}
}

async function addToStore() {
  console.log("[-] delaying 1000ms");
  // await delay(1000);
  blockingDelay(1);
  console.log("[-] delay done 1000ms");

  for (var i = 0; i < elementPerLoop; i++) {
    globalStore.push(new Leaker(i * elementPerLoop));
  }
  console.log(`[!] added ${elementPerLoop} elements to global store.`);
}

const server = http.createServer(async (req, res) => {
  console.log(`[-] received request  ${req.url} ...`);

  await addToStore();

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("added to global object");
  res.end();
  console.log(`[-] response sent for  ${req.url} ...`);
});

export { server };
