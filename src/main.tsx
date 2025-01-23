import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import './index.css';
import { Rotas } from './Routes';
import { GlobalProvider } from './shared/hooks/UserGlobalContext';

const router = createBrowserRouter(Rotas);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalProvider>
            <RouterProvider router={router} />
        </GlobalProvider>
    </StrictMode>,
);
