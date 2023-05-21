import { Slider } from '../components/detail/Slider'

export const Detail = () => {
	return (
		<div className='w-screen h-auto flex justify-center pt-16 bg-white'>
			<div className='max-w-5xl h-auto w-full grid grid-cols-1 '>
				<div className='  '>
					<Slider />
				</div>
				<div className='min-h-[50vh]  px-4'>
					<p className='text-3xl my-6 '>Detalle del evento</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a, esse
						ad sed reprehenderit voluptatum minus, quis molestias doloribus
						tempora doloremque, accusantium repellendus. Pariatur totam voluptas
						dicta ratione, at tempora.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor repellendus ducimus assumenda animi sequi eveniet voluptates qui eos id quae, a sed voluptatum. Cumque dignissimos laboriosam consequatur repudiandae! Dolores, doloremque.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla a vel deserunt, eos, iusto dolor molestias fuga natus libero magnam nesciunt aut eligendi qui quae necessitatibus sint sunt tempore?
					</p>
				</div>
			</div>
		</div>
	)
}
