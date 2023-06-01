import { Variants, motion } from 'framer-motion'
import { CardServide } from '../../components/services/CardServide'
import { variantsTitle } from '../../utils/variantsTitles'

const container: Variants = {
	hidden: { rotate: 90 },
	show: {
		rotate: 0,
		transition: {
			staggerChildren: 0.5,
			delayChildren: 0.2,
		},
	},
}

export const Services = () => {
	return (
		<div
			className='w-screen h-auto flex flex-col justify-center items-center py-28 bg-white'
			id='about'>
			<motion.div
				className='text-center  mb-20'
				variants={variantsTitle}
				initial='initial'
				whileInView='show'
				viewport={{ once: true }}>
				<p className='text-[#094998] font-medium text-sm mb-4'>SERVICIOS</p>
				<p className='font-bold text-[#313131] text-3xl md:text-4xl xl:text-5xl  text-center mb-10'>
					Los mejores servicios para ustedes
				</p>
			</motion.div>

			<motion.div
				variants={container}
				initial='hidden'
				viewport={{ once: true }}
				whileInView='show'
				transition={{delay:1}}
				className='max-w-7xl h-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-16'>
				<CardServide />
				<CardServide />
				<CardServide />
				<CardServide />
				<CardServide />
				<CardServide />
			</motion.div>
		</div>
	)
}
