/*global jest*/
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";
// //import {
//   E_COMMERCE_SIGN_IN_PATH,
//   E_COMMERCE_PRODUCTS_PATH
// } from "../../../constants/RouteConstants";

import AuthService from "../../services/AuthServices/index.api.js";
import AuthStore from "../../stores/AuthStore/";
import getUserSignInResponse from "../../../fixtures/AuthFixtures/getUserSignInResponse.json";

import SignInRoute from ".";

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));


describe ('SignInRoute tests',()=>{
    let authAPI;
  let authStore;

  beforeEach(() => {
    authAPI = new AuthService();
    authStore = new AuthStore(authAPI);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  
  it("should render username empty error message", () => {
    const { getByText, getByRole} = render(
      <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
    );
    const signInButton =  getByRole("button", { name: "Sign In" });
    fireEvent.click(signInButton);
    getByText(/Please enter username/i);
  });
 
  
  it("should render password empty error message", () => {
    const { getByText, getByPlaceholderText, getByRole } = render(
      <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
    );
    const username = "test-user";
    const usernameField = getByPlaceholderText("UserName");
    const signInButton = getByRole("button", { name: "Sign In" });

    fireEvent.change(usernameField, { target: { value: username } });
    fireEvent.click(signInButton);

    getByText(/Please enter password/i);
  });
  
    
});