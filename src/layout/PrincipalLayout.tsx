import { Navbar } from '../components/common/Navbar'
import { Footer } from '../components/common/Footer'

import {Outlet} from 'react-router-dom'
import { NavBarMobile } from '../components/ui/NavBarMobile'

export const PrincipalLayout = () => {
	
	return (
		<div >
			<header>
				<Navbar />
			</header>
			<main  className='overflow-x-hidden'>
			<NavBarMobile />
				<Outlet/>
			</main>
            <footer>
            <Footer />
            </footer>
		</div>
	)
}
