import { useUiStore } from "../../store/uiStore"

export const NavBarMobile = () => {
	
    const { showMenu } = useUiStore()

    return (
		<div className={`fixed ${showMenu ? 'translate-x-0':'translate-x-full' } transition-all duration-300 ease-in  w-screen h-screen bg-white z-40 mt-16`}>
			<div className="h-full w-full gap-4 bg-white justify-center flex items-center pb-16">
				<div className="flex flex-col gap-14 ">
                <a href='#home' className="text-4xl">Inicio</a>
				<a href='#about' className="text-4xl">Nosotros</a>
				<a href='#anun' className="text-4xl">Anuncios</a>
				<button className='bg-black text-white p-2 rounded-md'>
					<a href='#contact' className="text-4xl">Contacto</a>
				</button>
                </div>
			</div>
		</div>
	)
}
