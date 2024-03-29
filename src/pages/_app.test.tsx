import React from 'react';
import { render } from '@testing-library/react';
import App from './_app';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import "@testing-library/jest-dom";

describe('With React Testing Library', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    it('Shows "Hello world!"', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(getByText('Hello World!')).not.toBeNull();
    });
});