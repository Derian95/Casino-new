// import { useEffect, useState } from "react"
import { NavBarMobile } from "../components/ui/NavBarMobile"
import { About, Advertisement, Contact, Home } from "../views"
import { Promotion } from "../views/principal/Promotion"

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
			<NavBarMobile />
			<Home />
           
			<div className="bg-white">
			<About />
			<Advertisement />
            <Promotion/>
			<Contact/>
			</div>
			
		</>
	)
}
