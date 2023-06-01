import image from '../../assets/Mail.svg'
import image2 from '../../assets/Phone.svg'

export const Footer = () => {
	return (
		<div className='min-w-screen min-h-[50vh] bg-[#094998] flex justify-center items-center py-20'>
			<div className='max-w-7xl w-full  text-white h-full flex justify-center px-5'>
				<div className='grid grid-cols-1  gap-6 sm:grid-cols-2 md:grid-cols-3  '>
					<div>
						<p className='text-3xl mb-6'>DAMASCO</p>
						<p className='text-[#E3E3E3] font-extralight'>
							Ubiquenos en al calle Av. Siempre viva Sprinfitd
						</p>
					</div>
					<div className='flex flex-col gap-4'>
						<p className='text-lg mb-6'>Medios de contacto</p>
						<p className='text-[#E3E3E3] font-extralight flex gap-2'>
						 <img src={image} alt="" />	damasco@hello.com
						</p>
						<p className='text-[#E3E3E3] font-extralight flex gap-2'>
						 <img src={image2} alt="" />	+51 989745454
						</p>
					</div>
					<div>
						<p className='text-lg mb-6'>Nuestras redes</p>
						<p className='text-[#E3E3E3] font-extralight'>
							Ubiquenos en al calle Av. Siempre viva Sprinfitd
						</p>
					</div>
				
				</div>
			</div>
		</div>
	)
}
