
import { NavLink  } from "react-router-dom"
import { HamburguerUi } from "../ui/HamburguerUi"

export const Navbar = () => {
	// const { scrollYProgress } = useScroll()
	// const initial = useTransform(scrollYProgress, (x) => x +0.9 )

	return (
		<nav className='w-full h-16 bg-white fixed z-20 border-b-[1px]'>
			<div className='px-5 w-full h-full flex items-center justify-between relative sm:justify-around'>
				<div>
					<p className='text-2xl font-bold'>D</p>
				</div>
				<div className='sm:flex gap-x-9 justify-around items-center hidden'>
					<NavLink className={({isActive})=>`${isActive? 'font-bold underline':''}`}  to={'/'} >Inicio</NavLink>
					<NavLink  className={({isActive})=>`${isActive? 'font-bold underline':''}`} to={'/anuncios'} >Anuncios</NavLink>
					
					<button className='bg-black text-white p-2 rounded-md'>
					<NavLink   to={'/contacto'} >Contacto</NavLink>
					</button>
					
				</div>
				<div className="sm:hidden">
						<HamburguerUi/>
					</div>
				{/* <motion.div
					style={{
						width: 300,
						height: 3,
						scaleX: initial,
                        backgroundColor:'red',
                        position:'absolute',
                        left:0,
                        bottom:0
					}}></motion.div> */}
			</div>
		</nav>
	)
}
