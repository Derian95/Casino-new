import { NavBarMobile } from "../components/ui/NavBarMobile"
import { About, Advertisement, Contact, Home } from "../views"
import { Promotion } from "../views/principal/Promotion"

export const Principal = () => {
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
