import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this import
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import designReducer from './features/designSlice';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const store = configureStore({
    reducer: {
        design: designReducer,
    },
});

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // Use createRoot

root.render(
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
            <GlobalStyles />
            <App />
        </DndProvider>
    </Provider>
);