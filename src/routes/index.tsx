import { createBrowserRouter } from "react-router-dom";
import { PrincipalLayout } from "../layout";
import { Detail } from "../pages/Detail";
import { Principal } from "../pages/Principal";
import { Announcement } from "../pages/Announcement";
import { Contact } from "../views";





export const route = createBrowserRouter([
	{
		path: '/',
		element: <PrincipalLayout />,
		children: [
			{
				path: '/',
				element: <Principal />,
			},
			
			{
				path: '/anuncio-detalle',
				element: <Detail />,
			},
            {
				path: '/anuncios',
				element: <Announcement />,
			},
			{
				path: '/contacto',
				element: <Contact />,
			},
		],
	}
	
	
])