import { NavLink } from 'react-router-dom'
import { HamburguerUi } from '../ui/HamburguerUi'
import logo from '../../assets/logo.svg'
import { Variants, motion } from 'framer-motion'

const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.8,
			delayChildren: 0.8,
		},
	},
}

export const Navbar = () => {
	// const { scrollYProgress } = useScroll()
	// const initial = useTransform(scrollYProgress, (x) => x +0.9 )

	return (
		<nav className='w-full h-20 bg-white fixed z-20 border-b-[1px] px-5'>
			<div className='w-full h-full flex justify-center'>
				<div className='w-full max-w-7xl h-full flex items-center justify-between  relative  '>
					<div>
						{/* <p className='text-2xl font-bold'>DAMASCO</p> */}
						<img src={logo} alt='' className=' h-14 lg:h-16 ' />
					</div>
					<motion.div
						variants={container}
						initial='hidden'
						whileInView='show'
						className='sm:flex gap-x-5 justify-around items-center hidden'>
						<motion.div
							initial={{ opacity: 0, translateY: -35 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{duration:1.5}}
							>
							<NavLink
								className={({ isActive }) =>
									`${isActive ? '' : ''} text-[#20407B] navLink `
								}
								to={'/'}>
								Inicio
							</NavLink>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, translateY: -35 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{duration:1.5, delay:.5}}
							>
							<NavLink
								className={({ isActive }) =>
									`${isActive ? '' : ''} text-[#20407B] navLink `
								}
								to={'/'}>
								Conócenos
							</NavLink>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, translateY: -35 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{duration:1.5, delay:1}}
							>
						<NavLink
							className={({ isActive }) =>
								`${isActive ? '' : ''} text-[#20407B] navLink `
							}
							to={'/'}>
							Novedades
						</NavLink>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, translateY: -35 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{duration:1.5, delay:1.5}}
							>
						<NavLink
							className={({ isActive }) =>
								`${isActive ? '' : ''} text-[#20407B] navLink `
							}
							to={'/'}>
							Juego responsable
						</NavLink>
						</motion.div>
						<HamburguerUi />
					</motion.div>
				</div>
			</div>
		</nav>
	)
}
