import puppeteer from "puppeteer-core";
import github from "@actions/github"
// import os from "@actions/core";
// import io from "@actions/io";

const BROWSER_PATH = "/usr/bin/google-chrome";

async function main() {
  const browser = await puppeteer.launch({
    executablePath: BROWSER_PATH
  });
  const page = await browser.newPage();
  await page.goto("https://www.google.com", { waitUntil: "networkidle2" });
  await page.waitFor(3000);
  await page.screenshot({fullPage: true, path: "screenshot.png"});
  await browser.close();
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});