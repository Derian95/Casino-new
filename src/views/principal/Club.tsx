import React from 'react'
import imgAbout from '../../assets/aboutImg.svg'

export const Club = () => {
  return (
    <div
			className='w-screen h-auto flex flex-col justify-center items-center py-28 pb-56 bg-[#F5FAFF]'
			>
				<p className='text-[#094998] font-medium text-sm mb-20'>Club</p>
			<div className='max-w-7xl h-auto w-full grid grid-cols-1 md:grid-cols-2 px-5 gap-10'>
				<div className='aboutImage h-full w-full aboutImage flex justify-center items-center order-2 '>
				<img src={imgAbout} alt='' className=' w-4/5 h-[95%] object-cover'/>

				</div>
				<div className='flex flex-col gap-5 '>
						<p className='font-extrabold text-[#313131] text-4xl pb-5'>Beneficio club/socios</p>
						<p className='text-[#1F589E] font-normal text-lg'>Que los clientes logren la mejor experiencia de entretenimiento. Brindar a nuestros colaboradores un medio para su desarrollo y bienestar. Incrementar el valor de la Corporación.Que los clientes logren la mejor experiencia de entretenimiento. Brindar a nuestros colaboradores un medio para su desarrollo y bienestar. Incrementar el valor de la Corporación.Que los clientes logren la mejor experiencia de entretenimiento. Brindar a nuestros colaboradores un medio para su desarrollo y bienestar. Incrementar el valor de la.</p>
					
				</div>
			</div>
		</div>
  )
}
