const { test, expect } = require('@playwright/test');

test('Check add book page', async ({ page }) => {
    await page.goto('https://ertan40-examprep-08042024.onrender.com/add-book');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  