import { createBrowserRouter } from "react-router-dom";
import { PrincipalLayout } from "../layout";
import { Principal } from "../pages/Principal";
import { Announcement } from "../pages/Announcement";
import { Contact, DetailAnnouncement } from "../views";





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
				element: <DetailAnnouncement />,
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