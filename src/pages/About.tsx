import { motion } from 'framer-motion'
import aboutImg from '../assets/aboutImg.png'
import pattern from '../assets/pattern.svg'

export const About = () => {
	return (
		<div className='min-w-screen min-h-screen  flex flex-col items-center  bg-white px-10 py-20' id='about'>
			<div className='max-w-5xl  flex h-[550px]'>
                <motion.div
                 initial={{opacity:0, translateX:-100}}
                 whileInView={{opacity:1, translateX:0}}
                 transition={{duration:2.5,type:'spring',stiffness:152, delay:1}}
                 viewport={{once:true}}
                 className='w-2/4 flex justify-start items-center'>
                    <div className='image-decoration '>
                        <img src={aboutImg} alt='' className='h-full w-full relative z-[2]' />
                    </div>
                </motion.div>
				
				<motion.div 
                 initial={{opacity:0, translateX:100}}
                 whileInView={{opacity:1, translateX:0}}
                 transition={{duration:1.5, type:'spring',stiffness:152, delay:1}}
                 viewport={{once:true}}

                className='w-2/4  flex flex-col justify-center items-start gap-y-10 '>
					<p className='text-3xl'>Nosotros</p>

					<motion.p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In
						laudantium ea distinctio debitis quis, nesciunt pariatur alias
						maiores et. Incidunt illo ipsam soluta deserunt voluptas tempora
						eos. Inventore, fugiat laboriosam.
					</motion.p>
				</motion.div>
			</div>

			<div className='max-w-5xl  flex  '>
				<motion.div
                 initial={{opacity:0, translateX:-100}}
                 whileInView={{opacity:1, translateX:0}}
                 transition={{duration:2.5,type:'spring',stiffness:152, delay:1}}
                 viewport={{once:true}}
                className='w-2/4  flex flex-col justify-center items-start gap-y-10 pr-16'>
					<p className='text-3xl'>Mision</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In
						laudantium ea distinctio debitis quis, nesciunt pariatur alias
						maiores et. Incidunt illo ipsam soluta deserunt voluptas tempora
						eos. Inventore, fugiat laboriosam.
					</p>
					<p className='text-3xl'>Vision</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In
						laudantium ea distinctio debitis quis, nesciunt pariatur alias
						maiores et. Incidunt illo ipsam soluta deserunt voluptas tempora
						eos. Inventore, fugiat laboriosam.
					</p>
				</motion.div>
				<motion.div
                  initial={{opacity:0, translateX:100}}
                  whileInView={{opacity:1, translateX:0}}
                  transition={{duration:1.5, type:'spring',stiffness:152, delay:1}}
                  viewport={{once:true}}
                className='w-2/4  h-[500px]  relative'>
					<img src={aboutImg} alt='' className='w-2/4 absolute' />
					<img
						src={aboutImg}
						alt=''
						className='w-3/6 absolute z-10 right-11 top-10'
					/>
					<img
						src={aboutImg}
						alt=''
						className='w-4/5 h-3/6 absolute bottom-0 right-0 z-[1]'
					/>
					<img src={pattern} alt='' className='absolute -left-10 bottom-0 ' />
					<img src={pattern} alt='' className='absolute -right-0 top-0 ' />
				</motion.div>
			</div>
		</div>
	)
}
