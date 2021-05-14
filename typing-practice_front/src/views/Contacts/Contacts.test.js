const faker = require('faker');
const puppeteer = require('puppeteer');

const data = {
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words()
};

describe('H1 Text', () => {
  test('h1 loads correctly', async () => {
    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('h1');
    const html = await page.$eval('h1', (e) => e.innerHTML);
    expect(html).toBe('Contacts');
    browser.close();
  }, 16000);
});

describe('Contact form', () => {
  test('Can submit contact form', async () => {
    const browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 250
    });

    const page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 900
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.contacts-page form');
    await page.click('input[name=fullname]');
    await page.type('input[name=fullname]', data.name);
    await page.click('input[name=email]');
    await page.type('input[name=email]', data.email);
    await page.click('textarea[name=message]');
    await page.type('textarea[name=message]', data.message);
    await page.click('input[type=checkbox]');
    await page.click('button[type=submit]');

    browser.close();
  }, 9000000);
});
