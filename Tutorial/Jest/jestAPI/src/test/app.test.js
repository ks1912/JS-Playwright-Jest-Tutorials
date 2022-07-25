const axios = require("axios");
jest.mock("axios");

describe("mock api calls", () => {
  test("mocking api 1", () => {
    // arramge
    const mockedResponse = {
      data: { username: "test-user", address: "India" },
    };

    // asserts
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith("https://reqres.in/api/users/2");
  });

  test("mocking api 2", () => {
    // arramge
    const mockedResponse = {
      data: { username: "test-user", address: "India" },
    };
    axios.get.mockResolvedValue(mockedResponse);
    const app = require("../app");

    // act
    app.getUserData();
  });

  test("mocking api 3", () => {
    // arramge
    const mockedResponse = {
      data: { username: "test-user", address: "India" },
    };
    axios.get.mockResolvedValue(mockedResponse);
    const app = require("../app");

    // act
    app.getUserData();

    // asserts
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith("https://reqres.in/api/users/2");
  });
});
