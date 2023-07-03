import image from '../../assets/employed.svg'
import '../Views.css'

export const Employed = () => {
	return (
		<div className='w-screen h-[50vh]     relative'>
			<img src={image} alt="" className='w-full h-3/4 absolute object-cover' loading='lazy' />
            <div className='bg-black/50 absolute w-full h-3/4 flex justify-center flex-col gap-5 px-56'>
                <p className='font-extrabold text-5xl text-white  drop-shadow-lg shadow-black'>Trabaje con nosotros</p>
                <button className='buttonHome max-w-fit text-white p-2 w-44 px-5 rounded-md flex  items-center justify-center'>Ver empleos</button>
            </div>
		</div>
	)
}
