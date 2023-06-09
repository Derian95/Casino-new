import { motion } from 'framer-motion'

import video from '../../assets/video.mp4'
import { useEffect, useRef, useState } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import img from '../../assets/preloader.png'
import '../Views.css'


export const Home = () => {
	const [preLoader, setPreLoader] = useState(true)

	const containerRef = useRef(null)
	// const { scrollYProgress } = useScroll({
	// 	target: containerRef,
	// 	offset: ['end end', 'end start'],
	// })
	// const scale = useTransform(scrollYProgress, [0, 1], [1, 3])

	const onLoadVideo = () => {
		setPreLoader(false)
	}
	useEffect(() => {}, [])

	return (
		<div
			className='min-w-screen  h-[80vh] md:h-screen  relative '
			ref={containerRef}
			id='home'>
			
				<motion.video
					// style={{ scale }}
					autoPlay
					loop
					muted
					playsInline
					onLoad={() => {
						//console.log('estoy listo')
					}}
					onLoadedData={onLoadVideo}
					onLoadStart={() => {
						//console.log('estoy cargandome')
					}}
					className='h-screen w-screen object-cover  -z-10 absolute'>
					<source src={video} type='video/mp4' />
				</motion.video>
				{preLoader && <img src={img} className='h-screen w-screen object-cover  -z-10 absolute '/>}
			

			<div className='h-full w-full aboslute flex justify-center items-center  bg-gradient-to-r from-slate-900 to-transparent  px-5'>
				<div className='py-5 flex flex-col gap-y-8  w-full max-w-7xl'>
					<motion.h1 initial={{opacity:0, translateX:100}} whileInView={{opacity:1, translateX:0}} viewport={{once:true}} transition={{duration:1.5, delay:11}} className='text-4xl sm:text-6xl md:text-8xl  font-black text-white '>
						GLADCON
					</motion.h1>
					<motion.div initial={{opacity:0, translateX:100}} whileInView={{opacity:1, translateX:0}} viewport={{once:true}} transition={{duration:1.5, delay:11.5}}>
					<ReactTypingEffect
						// speed={10}
						// eraseSpeed={1}
						// typingDelay={1}
						text={['Corporacion', 'Seriedad']}
						className='text-white text-3xl font-semibold'
						displayTextRenderer={(text) => <p className=' '>{text}</p>}
					/>
					</motion.div >
					
					<motion.p initial={{opacity:0, translateX:100}} whileInView={{opacity:1, translateX:0}} viewport={{once:true}} transition={{duration:1.5,delay:12}} className='text-[#F8F6F5] font-light'>
						Avenida San Martín 597, Tacna, Peru
					</motion.p>
					<motion.a
					initial={{opacity:0, translateX:100}} whileInView={{opacity:1, translateX:0}} viewport={{once:true}} transition={{duration:1.5, delay:12.5}}
						href='#about'
						className=' text-white p-2 w-44 px-5 rounded-md flex flex-grow items-center justify-center buttonHome'>
						<span>Empezar</span>
					</motion.a>
				</div>
			</div>
		</div>
	)
}
