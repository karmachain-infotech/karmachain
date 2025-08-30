// api-troubleshoot.js
import axios from "axios";

const API_URL = process.env.API_URL || "https://karamaserver.onrender.com/api/works";
const TOTAL_CALLS = parseInt(process.env.CALLS || 10, 10); // number of requests to send
const DELAY_MS = parseInt(process.env.DELAY || 500, 10); // delay between calls in ms

let successCount = 0;
let failCount = 0;
let totalTime = 0;

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function testCall(callNumber) {
  const start = Date.now();
  try {
    const response = await axios.get(API_URL, { timeout: 5000 });
    const duration = Date.now() - start;

    if (response.status === 200) {
      successCount++;
      totalTime += duration;
      console.log(`✅ Call #${callNumber} OK (${duration}ms)`);
    } else {
      failCount++;
      console.error(`⚠️ Call #${callNumber} Unexpected Status: ${response.status}`);
    }
  } catch (error) {
    failCount++;
    console.error(`❌ Call #${callNumber} FAILED: ${error.message}`);
  }
}

async function runTest() {
  console.log(`🚀 Starting API Troubleshoot Test`);
  console.log(`📍 API: ${API_URL}`);
  console.log(`🔁 Total Calls: ${TOTAL_CALLS}, Delay: ${DELAY_MS}ms`);

  for (let i = 1; i <= TOTAL_CALLS; i++) {
    await testCall(i);
    if (i < TOTAL_CALLS) await delay(DELAY_MS);
  }

  console.log("\n📊 Test Summary:");
  console.log(`✅ Success: ${successCount}`);
  console.log(`❌ Failures: ${failCount}`);
  if (successCount > 0) {
    console.log(`⏱ Average Response Time: ${(totalTime / successCount).toFixed(2)}ms`);
  }
}

runTest();
