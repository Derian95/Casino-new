import { NavLink } from 'react-router-dom'
import { useUiStore } from '../../store/uiStore'
import { motion } from 'framer-motion'
import arrow from '../../assets/arrowMenu.svg'
export const NavBarMobile = () => {
	const { showMenu, changeStateMenu, menuOption, changeMenuOption } =
		useUiStore()

	return (
		<motion.div
			animate={{ backgroundColor: showMenu ? '#00000050' : 'transparent' }}
			transition={{ delay: 0.4, duration: 1 }}
			className={`fixed ${
				showMenu ? '-translate-x-0 bg-[#00000050]' : 'translate-x-full bg-transparent'
			} w-full  h-[calc(100vh-5rem)] mt-20 z-40 sidebar right-0`}>
			<motion.div className='h-full w-full gap-4  justify-center flex items-s right-0 absolute bg-white  md:w-96'>
				<div className='flex flex-col gap-6 justify-center items-center max-w-7xl w-full'>
					<div className=' flex gap-4 group'>
						<NavLink
							onClick={changeStateMenu}
							className={({ isActive }) =>
								`${
									isActive ? ' ' : ''
								} text-2xl font-extrabold  text-[#333333] uppercase  group-hover:translate-x-3 group-hover:duration-300 group-hover:ease-in-out `
							}
							to={'/'}
							onMouseEnter={() => changeMenuOption('INICIO')}
							onMouseLeave={() => changeMenuOption('')}>
							Inicio
						</NavLink>
						<img
							src={arrow}
							alt=''
							className='w-7 group-hover:translate-x-5 group-hover:duration-300 group-hover:ease-in-out'
						/>
					</div>
					<div className='flex gap-4 group'>
						<NavLink
							onClick={changeStateMenu}
							className={({ isActive }) =>
								`${
									isActive ? '' : ''
								} text-2xl font-extrabold  text-[#333333] uppercase group-hover:translate-x-3 group-hover:duration-300 group-hover:ease-in-out `
							}
							to={'/anuncios'}
							onMouseEnter={() => changeMenuOption('ANUNCIOS')}
							onMouseLeave={() => changeMenuOption('')}>
							Anuncios
						</NavLink>
						<img
							src={arrow}
							alt=''
							className='w-7 group-hover:translate-x-5 group-hover:duration-300 group-hover:ease-in-out'
						/>
					</div>

					<div className='flex gap-4 group '>
						<NavLink
							onClick={changeStateMenu}
							className={({ isActive }) =>
								`${
									isActive ? '' : ''
								} text-2xl font-extrabold  text-[#333333] uppercase  group-hover:translate-x-3 group-hover:duration-300 group-hover:ease-in-out`
							}
							to={'/detalle'}
							onMouseEnter={() => changeMenuOption('INTRANET')}
							onMouseLeave={() => changeMenuOption('')}>
							Intranet
						</NavLink>
						<img
							src={arrow}
							alt=''
							className='w-7 group-hover:translate-x-5 group-hover:duration-300 group-hover:ease-in-out'
						/>
					</div>
				</div>
				<div className='absolute w-full h-full -z-10 flex justify-center items-center text-[3.5rem] text-[#fde9dd] font-black transition-all duration-500'>
					{menuOption}
				</div>
			</motion.div>
		</motion.div>
	)
}
