import { FC } from 'react'
import { Navbar } from '../components/Navbar'

import { Footer } from '../components/Footer'

interface Props {
	children: React.ReactNode
}
export const PrincipalLayout: FC<Props> = ({ children }) => {
	
	return (
		<div >
			<header>
				<Navbar />
			</header>
			<main  className='overflow-x-hidden'>
				{children}
			</main>
            <footer>
            <Footer />
            </footer>
		</div>
	)
}
