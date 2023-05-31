import { NavLink } from 'react-router-dom'
import { useUiStore } from '../../store/uiStore'

export const NavBarMobile = () => {
	const { showMenu, changeStateMenu } = useUiStore()


	return (
		<div
			className={`fixed ${
				showMenu ? 'translate-x-0' : 'translate-x-full'
			} transition-transform duration-500 ease-in  w-screen h-[calc(100vh-6rem)] mt-24 bg-white z-40 `}>
			<div className='h-full w-24 bg-[#094998] absolute right-0 '>
				<p className=' cursor-vertical-text '></p>
			</div>
			<div className='h-full w-24  absolute right-28  flex flex-col items-center justify-center '>
				<p className=' text-8xl font-extrabold text-[#F1F1F1]  '>G</p>
				<p className=' text-8xl font-extrabold text-[#F1F1F1]  '>L</p>
				<p className=' text-8xl font-extrabold text-[#F1F1F1]  '>A</p>
				<p className=' text-8xl font-extrabold text-[#F1F1F1]  '>D</p>
				<p className=' text-8xl font-extrabold text-[#F1F1F1]  '>C</p>
				<p className=' text-8xl font-extrabold text-[#F1F1F1]  '>O</p>
				<p className=' text-8xl font-extrabold text-[#F1F1F1]  '>N</p>
			</div>

			<div className='h-full w-full gap-4  justify-center flex items-s '>

				<div className='flex flex-col gap-6 justify-center items-start max-w-7xl w-full'>
					
					<NavLink
						onClick={changeStateMenu}
						className={({ isActive }) =>
							`${isActive ? 'font-black underline' : ''} text-5xl text-[#333333] font-black  uppercase`
						}
						to={'/'}>
						Inicio
					</NavLink>
					<NavLink
						onClick={changeStateMenu}
						className={({ isActive }) =>
							`${isActive ? 'font-bold underline' : ''} text-5xl font-black  text-[#333333] uppercase`
						}
						to={'/anuncios'}>
						Anuncios
					</NavLink>
					<NavLink
						onClick={changeStateMenu}
						className={({ isActive }) =>
							`${isActive ? 'font-bold underline' : ''} text-5xl font-black  text-[#333333] uppercase`
						}
						to={'/anuncios'}>
						Anuncios
					</NavLink>
					<NavLink
						onClick={changeStateMenu}
						className={({ isActive }) =>
							`${isActive ? 'font-bold underline' : ''} text-5xl font-black  text-[#333333] uppercase`
						}
						to={'/anuncios'}>
						Anuncios
					</NavLink>
					<NavLink
						onClick={changeStateMenu}
						className={({ isActive }) =>
							`${isActive ? 'font-bold underline' : ''} text-5xl font-black  text-[#333333] uppercase`
						}
						to={'/anuncios'}>
						Anuncios
					</NavLink>
					<NavLink
						onClick={changeStateMenu}
						className={({ isActive }) =>
							`${isActive ? 'font-bold underline' : ''} text-5xl font-black  text-[#333333] uppercase`
						}
						to={'/anuncios'}>
						Anuncios
					</NavLink>
					<NavLink
						onClick={changeStateMenu}
						className={({ isActive }) =>
							`${isActive ? 'font-bold underline' : ''} text-5xl font-black  text-[#333333] uppercase`
						}
						to={'/anuncios'}>
						Anuncios
					</NavLink>
					<NavLink
						onClick={changeStateMenu}
						className={({ isActive }) =>
							`${isActive ? 'font-bold underline' : ''} text-5xl font-black  text-[#333333] uppercase`
						}
						to={'/anuncios'}>
						Anuncios
					</NavLink>
				
				</div>
			</div>
		</div>
	)
}
