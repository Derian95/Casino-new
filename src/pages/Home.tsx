import { motion, useScroll, useTransform } from 'framer-motion'
import video from '../assets/video.mp4'
import { useRef } from 'react'
import ReactTypingEffect from 'react-typing-effect'

export const Home = () => {
	const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['end end', 'end start'],
	})
	const scale = useTransform(scrollYProgress, [0, 1], [1, 3])
	return (
		<div
			className='min-w-screen h-screen  relative'
			ref={containerRef}
			id='home'>
			<motion.video
				style={{ scale }}
				autoPlay
				loop
				muted
				className='h-screen w-screen object-cover  -z-10 fixed'>
				<source src={video} type='video/mp4' />
			</motion.video>

			<div className='h-full w-full aboslute flex justify-start items-center  bg-gradient-to-r from-slate-900 to-transparent pl-2 md:pl-28'>
				<div className='py-5 flex flex-col gap-y-8'>
					<h1 className='text-4xl sm:text-6xl md:text-8xl  font-black text-white '>DAMASCO</h1>
					<ReactTypingEffect
						text={['Diversion', 'Entretenimiento', 'Chanozuelas']}
                        className='text-white text-3xl font-semibold'
                        displayTextRenderer={text => (
							<p className=' '>
								{text}
							</p>
						)}
					/>
					<p className='text-[#F8F6F5] font-light'>
						Av. Siempre viva Sprinfild 124
					</p>
					<button className='bg-white p-2 w-44 px-5 rounded-md flex-grow'>
						Empezar
					</button>
				</div>
			</div>
		</div>
	)
}
