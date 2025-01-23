import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import './index.css';
import { Rotas } from './Routes';
import { useNotification } from './shared/hooks/useNotification';

const router = createBrowserRouter(Rotas);

function App() {
    const { contextHolder } = useNotification();

    return (
        <>
            {contextHolder}
            <RouterProvider router={router} />
        </>
    );
}

export default App;
