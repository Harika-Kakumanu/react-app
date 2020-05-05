import React,{Component} from 'react';
import {render} from '@testing-library/react';
import SignInForm from '.';

describe('SignInForm',()=>{
    test('Checking username',()=>{
         const username = "test-user";
         const { getByPlaceholderText }=render(
            <SignInForm username={username} onChangeUserName={() => {}} />
             );
             const usernameField = getByPlaceholderText("UserName");
             expect(usernameField.value).toBe(username);
    });
    
    test('Checking Password',()=>{
        const password='test-password';
        const {getByPlaceholderText}=render(
            <SignInForm password={password} onChangePassword={()=>{}}/>
            );
            const passwordField=getByPlaceholderText('Password');
            expect(passwordField.value).toBe(password);
    });
    
    test("should render given error message", () => {
        const { getByText } = render(
          <SignInForm errorMessage="Please enter Valid data" />
        );
    getByText(/Please enter Valid data/i);
    
  });

});

