import { test, expect } from '@playwright/test';

const UI_URL = "http://localhost:5173/";

try{
  test("should allow the user to sign in", async ({ page }) => {
    await page.goto(UI_URL);
  
    // get the sign in button
    await page.getByRole("link", { name: "Sign In" }).click();
  
    await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
  
    await page.locator("[name=email]").fill("1@1.com");
    await page.locator("[name=password]").fill("password123");
  
    await page.getByRole("button", { name: "Login" }).click();
  
    await expect(page.getByText("Sign in Successful!")).toBeVisible();
    await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
    await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
  });
}catch (error) {
  console.error("Test failed:", error);
  throw error;
}

try{

  test("Should allow user to register", async({page})=>{
    const testEmail = `test_register_${Math.floor(Math.random() * 90000)+ 10000}@test.com`
    await page.goto(UI_URL);

    // get the sign in button
    await page.getByRole("link", { name: "Sign In" }).click();

    // get the register link
    await page.getByRole("link", { name: "Create an account here" }).click();

    //check header
    await expect(page.getByRole("heading", { name: "Create an Account" })).toBeVisible();
 
    //inser details into form
    await page.locator("[name=firstName]").fill("chathu");
    await page.locator("[name=lastName]").fill("chathu");
    await page.locator("[name=email]").fill(testEmail);
    await page.locator("[name=password]").fill("password123");
    await page.locator("[name=confirmPassword]").fill("password123");

    //click create an account button
    await page.getByRole("button", { name: "Create an Account" }).click();

    await expect(page.getByText("Registration Success!")).toBeVisible();
    await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
    await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
  });

}catch (error){
  console.error("Test failed:", error)
}

try{

  test("Check user already signin", async({page})=>{
    await page.goto(UI_URL);

    // get the sign in button
    await page.getByRole("link", { name: "Sign In" }).click();

    // get the register link
    await page.getByRole("link", { name: "Create an account here" }).click();

    //check header
    await expect(page.getByRole("heading", { name: "Create an Account" })).toBeVisible();
 
    //inser details into form
    await page.locator("[name=firstName]").fill("chathu");
    await page.locator("[name=lastName]").fill("chathu");
    await page.locator("[name=email]").fill("chathuNew1@gmail.com");
    await page.locator("[name=password]").fill("password123");
    await page.locator("[name=confirmPassword]").fill("password123");

    //click create an account button
    await page.getByRole("button", { name: "Create an Account" }).click();

    await expect(page.getByText("User already exists")).toBeVisible();
  });

}catch (error){
  console.error("Test failed:", error)
}

