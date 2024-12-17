// utils.js (or any file where you keep utility functions)

export function isActivePath(currentPath, href) {
  // Root path check
  if (currentPath === "/" && (href === "/" || href === "/index.html")) {
    return true;
  }

  // Exact path match
  if (currentPath === href) {
    return true;
  }

  // Check if current path includes href
  if (currentPath.includes(href)) {
    return true;
  }

  return false;
}
