import React, {Component} from 'react';
import {render} from '@testing-library/react';
import {HelloMessage} from '.';

describe('HelloMessage test',()=>{
    it('should render message',()=>{
        const {getByText}=render(<HelloMessage message='World'/>);
        getByText(/World/i);
        
        // debug();
        
    })
})
