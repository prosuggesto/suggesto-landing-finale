
import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function captureScreenshot() {
    const port = process.env.PORT || 5174;
    const url = `http://localhost:${port}`;
    console.log(`Connecting to ${url}...`);

    try {
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });

        const page = await browser.newPage();

        await page.setViewport({
            width: 1200,
            height: 630,
            deviceScaleFactor: 2,
        });

        console.log('Navigating...');
        await page.goto(url, {
            waitUntil: 'networkidle0',
            timeout: 30000,
        });

        await wait(2000); // Wait for animations

        const outputDir = path.join(process.cwd(), 'public');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const outputPath = path.join(outputDir, 'og-image.png');

        console.log(`Capturing to ${outputPath}...`);
        await page.screenshot({
            path: outputPath,
            type: 'png',
        });

        console.log('Success!');
        await browser.close();
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

captureScreenshot();
