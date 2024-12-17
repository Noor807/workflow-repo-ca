// getUserName.test.js
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getUserName } from "./getUserName"; // Adjust path based on your project structure

describe("getUserName", () => {
  // Clear localStorage before and after each test to avoid side effects between tests
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage when user exists", () => {
    // Save a user object to localStorage
    const user = { name: "John Doe", age: 30 };
    localStorage.setItem("user", JSON.stringify(user));

    // Test if the getUserName function returns the correct name
    expect(getUserName()).toBe("John Doe");
  });

  it("returns null when no user object exists in storage", () => {
    // Test if getUserName returns null when no user is stored in localStorage
    expect(getUserName()).toBeNull();
  });
});
