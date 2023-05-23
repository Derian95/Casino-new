
import { NavLink  } from "react-router-dom"
import { HamburguerUi } from "../ui/HamburguerUi"
// import logo from '../../assets/damasco-logo.png'

export const Navbar = () => {
	// const { scrollYProgress } = useScroll()
	// const initial = useTransform(scrollYProgress, (x) => x +0.9 )

	return (
		<nav className='w-full h-16 bg-white fixed z-20 border-b-[1px] px-5'>
			<div className="w-full h-full flex justify-center">
			<div className='w-full max-w-5xl h-full flex items-center justify-between  relative  '>
				<div >
					<p className='text-2xl font-bold'>D</p>
					{/* <img src={logo} alt="" className="h-full w-28" /> */}
				</div>
				<div className='sm:flex gap-x-9 justify-around items-center hidden'>
					<NavLink className={({isActive})=>`${isActive? 'font-bold underline':''}`}  to={'/'} >Inicio</NavLink>
					<NavLink  className={({isActive})=>`${isActive? 'font-bold underline':''}`} to={'/anuncios'} >Anuncios</NavLink>
					<button className='bg-[#0A47C9] text-white p-2 px-4 rounded-md'>
					<NavLink   to={'/contacto'} >Contacto</NavLink>
					</button>
				</div>
				<div className="sm:hidden">
						<HamburguerUi/>
					</div>
			</div>
			</div>
		</nav>
	)
}
