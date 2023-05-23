

import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Slider } from '../../components/detail/Slider'




export const DetailAnnouncement = () => {
	
    const { pathname } = useLocation()

	
    useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [pathname])
	
    


    return (
		<div className='w-screen h-auto flex justify-center pt-36 bg-white px-5'>
			<div className='max-w-5xl h-auto w-full '>
				<Link to={'/'}>
					<div>
						{' '}
						<span className='text-2xl'>{'<  '}</span> Regresar
					</div>
				</Link>

				<p className='text-xs mb-6 text-[#0A47C9] font-semibold m-auto max-w-fit'>19 Dic - 27 Ene</p>
				<p className='text-3xl text-center font-bold text-[#333333]'>Promocion de bebidas</p>
				<p className='m-auto my-6 text-[10px] text-center font-semibold bg-[#BDD2FF] text-[#0A47C9] max-w-fit px-2 py-1'>EVENTO</p>
				
				<div className='  '>
					<Slider />
				</div>
				<div className='min-h-[50vh]  '>
					<p className='text-[#3e4a63] font-normal'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a, esse
						ad sed reprehenderit voluptatum minus, quis molestias doloribus
						tempora doloremque, accusantium repellendus. Pariatur totam voluptas
						dicta ratione, at tempora. Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Dolor repellendus ducimus assumenda animi sequi
						eveniet voluptates qui eos id quae, a sed voluptatum. Cumque
						dignissimos laboriosam consequatur repudiandae! Dolores, doloremque.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
						nulla a vel deserunt, eos, iusto dolor molestias fuga natus libero
						magnam nesciunt aut eligendi qui quae necessitatibus sint sunt
						tempore?
					</p>
				</div>
			</div>
		</div>
	)
}
