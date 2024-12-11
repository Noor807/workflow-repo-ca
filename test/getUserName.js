// utils.js (or wherever you define your utility functions)
export function getUserName() {
  const user = JSON.parse(localStorage.getItem("user")); // Retrieve the user object from storage
  return user ? user.name : null; // Return the name if user exists, otherwise null
}
