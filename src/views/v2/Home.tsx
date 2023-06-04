import video from '../../assets/video.mp4'

export const Home = () => {
	return (
		<div className='w-full flex justify-center items-center mt-32 py-12 px-5'>
			<div className='max-w-7xl flex-col flex justify-center items-center gap-8'>
				<p className='max-w-3xl text-5xl text-center font-semibold text-[#212529] leading-[60px]'>
					Gladcon: Líderes en Juego y Entretenimiento con 30 años de Experiencia
				</p>
				<p className='max-w-lg text-[#999999] tracking-normal text-center font-normal text-base leading-7'>
					Descubre la emoción, la diversión y las mejores experiencias en
					nuestros casinos de clase mundial
				</p>
				<div className='flex gap-14 mb-14'>
					<button className='shadow-lg shadow-orange-200 bg-gradient-to-r from-[#FF720C] to-[#FF0C0C] px-6 py-4 text-white rounded-[45px] text-sm'>
						Conoce nuestros casinos
					</button>
					<button className='shadow-lg shadow-orange-100 bg-transparent border border-[#FF0C0C]  px-6 py-4 text-[#FF0C0C] rounded-[45px] text-sm'>
						Trabaje con nosotros
					</button>
				</div>
				<video autoPlay loop muted playsInline className='imgShadow max-w-6xl rounded-3xl shadow-[#FF993A]'>
					<source src={video} type='video/mp4' />
				</video>
			</div>
		</div>
	)
}
