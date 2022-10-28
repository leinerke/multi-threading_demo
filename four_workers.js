const { workerData, parentPort } = require("worker_threads");
console.time("blocking");
let counter = 0;
for (let i = 0; i < 200_000_000_000 / workerData.thread_count; i++) {
  counter++;
}
console.timeEnd("blocking");
parentPort.postMessage(counter);
