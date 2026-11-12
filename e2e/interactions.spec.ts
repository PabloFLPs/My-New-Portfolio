import { expect, test } from "@playwright/test";

test("the phone menu opens, closes with Escape, and closes after picking a section", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "menu" });
  const menu = page.getByRole("dialog", { name: "menu" });

  await toggle.click();
  await expect(menu).toBeVisible();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toBeHidden();

  await toggle.click();
  await menu.getByRole("link").first().click();
  await expect(menu).toBeHidden();
  await expect(page).toHaveURL(/#/);
});

test("the language switch keeps you on the same page", async ({ page }) => {
  await page.goto("/projects/zollama");
  await page.getByRole("link", { name: "Ver em português" }).first().click();
  await expect(page).toHaveURL(/\/pt-br\/projects\/zollama$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");

  await page.getByRole("link", { name: "View in English" }).first().click();
  await expect(page).toHaveURL(/\/projects\/zollama$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("earlier projects stay collapsed until asked for", async ({ page }) => {
  await page.goto("/");
  const details = page.locator("#work details");
  await expect(details).not.toHaveAttribute("open");
  await expect(details.getByRole("link").first()).toBeHidden();

  await details.locator("summary").click();
  await expect(details).toHaveAttribute("open");
  await expect(details.getByRole("link").first()).toBeVisible();
});

test("an unknown page answers 404", async ({ page }) => {
  const response = await page.goto("/projects/does-not-exist");
  expect(response?.status()).toBe(404);
});
