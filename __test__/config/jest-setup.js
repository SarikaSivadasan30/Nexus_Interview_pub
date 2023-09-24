import "@testing-library/jest-dom";

/**
 * Mock Next/Link and router
 */
jest.mock("next/dist/client/router", () => require("next-router-mock"));
jest.mock("next/dist/shared/lib/router-context", () => {
  const { createContext } = require("react");
  const router = require("next-router-mock").default;
  const RouterContext = createContext(router);
  return { RouterContext };
});
