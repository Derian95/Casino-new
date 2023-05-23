import { NavLink } from 'react-router-dom'
import { useUiStore } from '../../store/uiStore'

export const NavBarMobile = () => {
	const { showMenu, changeStateMenu } = useUiStore()


	return (
		<div
			className={`fixed ${
				showMenu ? 'translate-x-0' : 'translate-x-full'
			} transition-transform duration-300 ease-in  w-screen h-screen bg-white z-40 mt-16`}>
			<div className='h-full w-full gap-4 bg-white justify-center flex items-center pb-16'>
				<div className='flex flex-col gap-14 justify-center items-center '>
					<NavLink
						onClick={changeStateMenu}
						className={({ isActive }) =>
							`${isActive ? 'font-bold underline' : ''} text-2xl`
						}
						to={'/'}>
						Inicio
					</NavLink>
					<NavLink
						onClick={changeStateMenu}
						className={({ isActive }) =>
							`${isActive ? 'font-bold underline' : ''} text-2xl`
						}
						to={'/anuncios'}>
						Anuncios
					</NavLink>
					<button className='bg-[#0A47C9] text-white p-2 px-4 rounded-md'>
						<NavLink 
						onClick={changeStateMenu}
						to={'/contacto'} className='text-2xl'>
							Contacto
						</NavLink>
					</button>
				</div>
			</div>
		</div>
	)
}
