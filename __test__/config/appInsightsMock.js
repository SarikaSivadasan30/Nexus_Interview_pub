jest.mock("applicationinsights", () => ({
  setup: jest.fn(() => {
    return {
      setAutoCollectConsole: jest.fn(() => {
        return {
          start: jest.fn(),
        };
      }),
    };
  }),
  defaultClient: { 
    setAutoPopulateAzureProperties: jest.fn(),
    context: {
      tags:{},
      keys: {
        cloudRole: "cloudRole"
      }
    } 
  },
}));
