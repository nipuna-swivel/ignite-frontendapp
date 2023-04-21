import React from 'react';
import {screen,render} from '@testing-library/react'
import AppLayout from './appLayout';

describe('AppLayout', ()=>{
    it('applayout component should render correctly'),()=>{
        render(<AppLayout/>);
    }
});