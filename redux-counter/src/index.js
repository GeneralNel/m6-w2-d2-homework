import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const store = configureStore({
    reducer: counterReducer
});

const App = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
