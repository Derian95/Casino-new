
import { NavLink  } from "react-router-dom"
import { HamburguerUi } from "../ui/HamburguerUi"
 import logo from '../../assets/logo.svg'

export const Navbar = () => {
	// const { scrollYProgress } = useScroll()
	// const initial = useTransform(scrollYProgress, (x) => x +0.9 )

	return (
		<nav className='w-full h-24 bg-white fixed z-20 border-b-[1px] px-5'>
			<div className="w-full h-full flex justify-center">
			<div className='w-full max-w-7xl h-full flex items-center justify-between  relative  '>
				<div >
					{/* <p className='text-2xl font-bold'>DAMASCO</p> */}
					<img src={logo} alt="" className="h-full " />
				</div>
				<div className='sm:flex gap-x-5 justify-around items-center hidden'>
					
					<NavLink className={({isActive})=>`${isActive? '':''} text-[#20407B] navLink `}  to={'/'} >Inicio</NavLink>
					<NavLink  className={({isActive})=>`${isActive? '':''} text-[#20407B] navLink `} to={'/'} >Conócenos</NavLink>
					<NavLink  className={({isActive})=>`${isActive? '':''} text-[#20407B] navLink `} to={'/'} >Novedades</NavLink>
					<NavLink  className={({isActive})=>`${isActive? '':''} text-[#20407B] navLink `} to={'/'} >Juego responsable</NavLink>
					<HamburguerUi/>

				</div>
			</div>
			</div>
		</nav>
	)
}
