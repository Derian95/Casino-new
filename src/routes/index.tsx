import { createBrowserRouter } from "react-router-dom";
import { PrincipalLayout } from "../layout";
import App from "../App";
import { Detail } from "../pages/Detail";
import { Advertisement, Contact } from "../pages";





export const route = createBrowserRouter([
	{
		path: '/',
		element: <PrincipalLayout />,
		children: [
			{
				path: '/',
				element: <App />,
			},
			
			{
				path: '/anuncio-detalle',
				element: <Detail />,
			},
            {
				path: '/anuncios',
				element: <Advertisement />,
			},
			{
				path: '/contacto',
				element: <Contact />,
			},
		],
	}
	
	
])