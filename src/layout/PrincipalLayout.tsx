import { Navbar } from '../components/common/Navbar'
import { Footer } from '../components/common/Footer'

import {Outlet} from 'react-router-dom'
import { NavBarMobile } from '../components/ui/NavBarMobile'
import { Loader } from '../components/ui/Loader'
// import { useEffect } from 'react'
// import { useCorporationData } from '../hooks/useDataCorporate'
// import { useCorporateStore } from '../store/CorporateStore'

export const PrincipalLayout = () => {
	
	// const { dataisSuccess } = useCorporationData()
	// const { setDataCorporate } = useCorporateStore()

	// useEffect(() => {
		
	// 	if(isSuccess){
	// 		setDataCorporate(data.data)
	// 	}
	// }, [data,isSuccess])
	

	// if (isLoading) {
	// 	return <p>Loading...</p>;
	//   }
	
	//   if (isError) {
	// 	return <p>Error: ubo error</p>;
	//   }
	return (
		<div className='relative'>
			<Loader/>

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
