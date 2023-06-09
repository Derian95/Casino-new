// import { useEffect, useState } from "react"
// import { useEffect } from 'react'
// import { useCorporationData } from '../hooks/useDataCorporate'

import { Advertisement } from '../views'
import { Hall } from '../views/principal/Hall'
import { Promotion } from '../views/principal/Promotion'
import { About } from '../views/v2/About'
import { Club } from '../views/v2/Club'
import { Employed } from '../views/v2/Employed'
import { Home } from '../views/v2/Home'
import { Services } from '../views/v2/Services'
import { VideoBackground } from '../views/v2/VideoBackground'

export const Principal = () => {
	// const [mobile, setMobile] = useState(false)

	// //let navegador = navigator.userAgent;

	// useEffect(() => {
	//     if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
	//         setMobile(true)
	//     } else {
	//         setMobile(false)

	//     }
	// }, [])
	// const { data, isFetching, isLoading, isSuccess } = useCorporationData()

	// useEffect(() => {
	// 	console.log(data)
	// }, [])
	// console.log('isFetching')
	// console.log(isFetching)
	// console.log('isLoading')
	// console.log(isSuccess)
	// console.log(data)



	return (
		<div>
			<Home/>
			<VideoBackground />
			<About />
			<Hall />
			<Club />
			<Services />
			<Employed />
			<Advertisement />
			<Promotion />
			{/* <Contact/> */}
		</div>
	)
}
