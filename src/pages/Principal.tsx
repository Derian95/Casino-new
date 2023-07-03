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
