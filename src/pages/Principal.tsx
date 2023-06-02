// import { useEffect, useState } from "react"
import { Loader } from "../components/ui/Loader"
import { About, Advertisement, Home } from "../views"
import { Club } from "../views/principal/Club"
import { Employed } from "../views/principal/Employed"
import { Hall } from "../views/principal/Hall"
import { Promotion } from "../views/principal/Promotion"
import { Services } from "../views/principal/Services"

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
    
	return (
		<>
			<Home />
           
			<div className="bg-white">
			<About />
			<Hall/>
            <Club/>
            <Employed/>
            <Services/>
            <Advertisement />
            <Promotion/>
			{/* <Contact/> */}
			</div>
			
		</>
	)
}
