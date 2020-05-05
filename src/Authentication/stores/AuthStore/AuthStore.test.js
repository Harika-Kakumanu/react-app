import Cookie from "js-cookie";

import { API_SUCCESS, API_FAILED, API_FETCHING, API_INITIAL } from "@ib/api-constants";

import AuthService from "../../services/AuthServices/index.api.js";
import getUserSignInResponse from "../../../fixtures/AuthFixtures/getUserSignInResponse.json";

import AuthStore from ".";

/* Mocking js-cookie library */

let mockSetCookie = jest.fn();
let mockRemoveCookie = jest.fn();

Cookie.set = mockSetCookie;
Cookie.remove = mockRemoveCookie;

describe("AuthStore Tests", () => {
  let authAPI;
  let authStore;

  beforeEach(() => {
    authAPI = new AuthService();
    authStore = new AuthStore(authAPI);
  });

  it("should test initialising auth store", () => {
    expect(authStore.getSignInStatus).toBe('API_INITIAL');
    expect(authStore.getSignInError).toBe(null);
  });

  it("should test userSignInAPI data fetching state", () => {
    const onSuccess = jest.fn();
    const onFailure = jest.fn();

    const requestObject = {
      username: "test-user",
      password: "test-password",
    };

    const mockLoadingPromise = new Promise(function (resolve, reject) {});
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockLoadingPromise);
    authAPI.signInAPI = mockSignInAPI;

    authStore.userSignIn();
   expect(authStore.getSignInStatus).toBe(100);
  });

  it("should test userSignInAPI success state", async () => {
    const onSuccess = jest.fn();
    const onFailure = jest.fn();

    const requestObject = {
      username: "test-user",
      password: "test-password",
    };

    const mockSuccessPromise = Promise.resolve(getUserSignInResponse);
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockSuccessPromise);
    authAPI.signInAPI = mockSignInAPI;

    await authStore.userSignIn(requestObject, onSuccess, onFailure);
    expect(authStore.getSignInStatus).toBe(200);
    expect(mockSetCookie).toBeCalled();
  });

  it("should test userSignInAPI failure state", async () => {
    const onSuccess = jest.fn();
    const onFailure = jest.fn();
    const requestObject = {
      username: "test-user",
      password: "test-password",
    };

    jest
      .spyOn(authAPI, "signInAPI")
      .mockImplementation(() => Promise.reject());

    authStore = new AuthStore(authAPI);
    await authStore.userSignIn(requestObject, onSuccess, onFailure);
    expect(authStore.getSignInStatus).toBe(400);
  });

  it("should test user sign-out", () => {
    authStore.userSignOut();
    expect(mockRemoveCookie).toBeCalled();
    expect(authStore.getSignInStatus).toBe('API_INITIAL');
    expect(authStore.getSignInError).toBe(null);
  });
});