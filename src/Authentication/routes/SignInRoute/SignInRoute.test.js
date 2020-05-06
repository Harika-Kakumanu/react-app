/*global jest*/
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";

import {
  E_COMMERCE_SIGN_IN_PATH,
  E_COMMERCE_PRODUCTS_PATH
} from "../../../constants/RouteConstants";

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
  
  test("should render username empty error message", () => {
    const { getByText, getByRole} = render(
      <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
    );
    const signInButton =  getByRole("button", { name: "Sign In" });
    fireEvent.click(signInButton);
    getByText(/Please enter username/i);
  });
 
  
  test("should render password empty error message", () => {
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
  
  
  test("should submit sign-in on press enter", () => {
    const { getByLabelText, getByPlaceholderText, getByRole } = render(
      <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
    );
    const username = "test-user";
    const password = "test-password";

    const usernameField = getByPlaceholderText("UserName");
    const passwordField = getByPlaceholderText("Password");
    const signInButton = getByRole("button", { name: "Sign In" });

    fireEvent.change(usernameField, { target: { value: username } });
    fireEvent.change(passwordField, { target: { value: password } });
    fireEvent.keyPress(signInButton, { key: "Enter", code: "Enter" });

    waitFor(() => getByLabelText("audio-loading"));
  });
  
  
  test("should render signInRoute loading state", async() => {
    const { getByLabelText, getByPlaceholderText, getByRole,debug,getByText,queryByText } = render(
      <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
    );
    const username = "test-user";
    const password = "test-password";

    const usernameField = getByPlaceholderText("UserName");
    const passwordField = getByPlaceholderText("Password");
    const signInButton = getByText(/Sign In/)

    const mockLoadingPromise = new Promise(function(resolve, reject) {});
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockLoadingPromise);
    authAPI.signInAPI = mockSignInAPI;
    
    fireEvent.change(usernameField, { target: { value: username } });
    fireEvent.change(passwordField, { target: { value: password } });
    fireEvent.click(signInButton);
    expect(queryByText(/Sign In/)).toBeNull();
    getByRole("button", { disabled: true });
  });
    
    
    test('Should render Sign-In Route success state',()=>{
        const history=createMemoryHistory();
        const route=E_COMMERCE_SIGN_IN_PATH;
        history.push(route);
        
        const {getByPlaceholderText,
              getByRole,
              queryByRole,
              getByTestId,
              queryByLabelText,
               }=render(
                 <Provider authStore={authStore}>
                    <Router history={history}>
                        <Route path={E_COMMERCE_SIGN_IN_PATH}>
                            <SignInRoute/>
                        </Route>
                        <Route path={E_COMMERCE_PRODUCTS_PATH}>
                            <LocationDisplay/>
                        </Route>
                    </Router>
                 </Provider>
                 );
        const username='test-user';
        const password='test-password';
        
        const usernameField=getByPlaceholderText('UserName');
        const passwordField=getByPlaceholderText('Password');
        const signInButton=getByRole('button',{name:'Sign In'});
        
        const mockSuccessPromise=new Promise(function(resolve,reject){
          resolve(getUserSignInResponse);
        });
        
        const mockSignInAPI=jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI=mockSignInAPI;
        
        fireEvent.change(usernameField)
        
    });
    
    
});