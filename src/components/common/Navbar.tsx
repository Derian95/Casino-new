import {  NavLink, useLocation } from 'react-router-dom'
import { HamburguerUi } from '../ui/HamburguerUi'
import logo from '../../assets/logo.svg'
import { Variants, motion } from 'framer-motion'
import {  useMemo } from 'react'
import { useUiStore } from '../../store/uiStore'

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

const children: Variants = {
	hidden: { opacity: 0, translateY: -35 },
	show: {
		opacity: 1,
		translateY: 0,
		transition: {
			staggerChildren: 0.8,
			delayChildren: 0.8,
		},
	},
}

export const Navbar = () => {
	const { loading } = useUiStore()

	const { pathname } = useLocation()

	const path = useMemo(() => {
		if (pathname.includes('anuncio-detalle') || pathname.includes('anuncios')) {
			return true
		}
		return false
	}, [pathname])

	const navigateToTop = () => {
		window.scrollTo({ top: 0 })
	}

	return (
		<nav className='w-full h-20 bg-white fixed z-20 border-b-[1px] px-5'>
			<div className='w-full h-full flex justify-center'>
				<div className='w-full max-w-7xl h-full flex items-center  justify-between  relative  '>
					<div>
						<img src={logo} alt='' className=' h-11 lg:h-16 ' />
					</div>
					{path ? (
						<NavLink
							className={({ isActive }) =>
								`${isActive ? '' : ''}  navLink `
							}
							to={'/'}>
							Inicio
						</NavLink>
					) : (
						<motion.div
							variants={container}
							initial={loading ? '' : 'hidden'}
							whileInView={loading ? '' : 'show'}
							className='sm:flex gap-x-5 justify-around items-center hidden'>
							<motion.div
								variants={children}
								initial={loading ? '' : 'hidden'}
								whileInView={loading ? '' : 'show'}
								transition={{ duration: 1.5, delay: 10 }}>
								<NavLink
									className={({ isActive }) =>
										`${isActive ? '' : ''} text-[#454545] navLink `
									}
									to={'/'}
									onClick={navigateToTop}>
									Inicio
								</NavLink>
							</motion.div>
							<motion.div
								variants={children}
								initial={loading ? '' : 'hidden'}
								whileInView={loading ? '' : 'show'}
								transition={{ duration: 1.5, delay: 0.5 }}>
								<a href='#about' className='navLink'>
									Conócenos
								</a>
							</motion.div>

							<motion.div
								variants={children}
								initial={loading ? '' : 'hidden'}
								whileInView={loading ? '' : 'show'}
								transition={{ duration: 1.5, delay: 1 }}>
								<a href='#hall' className='navLink'>
									Casinos
								</a>
							</motion.div>
							<motion.div
								variants={children}
								initial={loading ? '' : 'hidden'}
								whileInView={loading ? '' : 'show'}
								transition={{ duration: 1.5, delay: 1.5 }}>
								<a href='#club' className='navLink'>
									Club
								</a>
							</motion.div>
							<motion.div
								variants={children}
								initial={loading ? '' : 'hidden'}
								whileInView={loading ? '' : 'show'}
								transition={{ duration: 1.5, delay: 1.5 }}>
								<a href='#services' className='navLink'>
									Servicios
								</a>
							</motion.div>
							<motion.div
								variants={children}
								initial={loading ? '' : 'hidden'}
								whileInView={loading ? '' : 'show'}
								transition={{ duration: 1.5, delay: 1.5 }}>
								<a href='#announcement' className='navLink'>
									Anuncios
								</a>
							</motion.div>
						</motion.div>
					)}

					<HamburguerUi />
				</div>
			</div>
		</nav>
	)
}
