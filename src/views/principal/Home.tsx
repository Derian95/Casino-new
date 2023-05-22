import { motion, useScroll, useTransform } from 'framer-motion'
import video from '../../assets/video.mp4'
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
			className='min-w-screen h-screen  relative '
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

			<div className='h-full w-full aboslute flex justify-center items-center  bg-gradient-to-r from-slate-900 to-transparent  px-5'>
				<div className='py-5 flex flex-col gap-y-8  w-full max-w-5xl'>
					<h1 className='text-4xl sm:text-6xl md:text-8xl  font-black text-white '>DAMASCO</h1>
					<ReactTypingEffect
					// speed={10}
					// eraseSpeed={1}
					// typingDelay={1}
						text={['Diversion', 'Entretenimiento']}
                        className='text-white text-3xl font-semibold'
                        displayTextRenderer={text => (
							<p className=' '>
								{text}
							</p>
						)}
					/>
					<p className='text-[#F8F6F5] font-light'>
					Avenida San Martín 597, Tacna, Peru
					</p>
					<a href="#about" className='bg-[#0A47C9] text-white p-2 w-44 px-5 rounded-md flex flex-grow items-center justify-center'><span>Empezar</span></a>
				</div>
			</div>
		</div>
	)
}
