import { Navbar } from '../components/common/Navbar'
import { Footer } from '../components/common/Footer'

import {Outlet} from 'react-router-dom'

export const PrincipalLayout = () => {
	
	return (
		<div >
			<header>
				<Navbar />
			</header>
			<main  className='overflow-x-hidden'>
				<Outlet/>
			</main>
            <footer>
            <Footer />
            </footer>
		</div>
	)
}
