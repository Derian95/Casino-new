import { Navbar } from '../components/common/Navbar'
import { Footer } from '../components/common/Footer'

import {Outlet} from 'react-router-dom'
import { NavBarMobile } from '../components/ui/NavBarMobile'
import { Loader } from '../components/ui/Loader'
import { useEffect } from 'react'
import { useCorporationData } from '../hooks/useDataCorporate'
import { useCorporateStore } from '../store/CorporateStore'

export const PrincipalLayout = () => {
	
	const { data, isSuccess  } = useCorporationData()
	const { setDataCorporate} = useCorporateStore()

	useEffect(() => {
		
		if(isSuccess){
			setDataCorporate(data.data)
		}
	}, [data,isSuccess])
	

	console.log('rsa')
	
	return (
		<div className='relative'>
			 <Loader/> 

			<header>
				<Navbar  />
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
