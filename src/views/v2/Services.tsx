import { Variants, motion } from 'framer-motion'
import { CardServide } from '../../components/services/CardServide'
import { variantsText } from '../../utils/variants'
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
		<div className='w-full bg-[#fff7f2] ra  py-36'>
			<div className='w-full h-fit  flex flex-col justify-start items-center  gap-20 '>
				<div className='text-center'>
					<motion.h3
						variants={variantsText}
						initial='initial'
						whileInView='show'
						viewport={{once:true}}
						transition={{ duration: 0.5, type: 'tween' }}
						className='text-[#FF0C0C] font-normal  overflow-hidden'>
						SERVICIOS
					</motion.h3>

					<motion.h2
						variants={variantsText}
						initial='initial'
						whileInView='show'
						viewport={{once:true}}
						transition={{ duration: 0.5, delay: 0.2, type: 'tween' }}
						className='text-[38px] text-[#212529] font-bold  relative overflow-hidden'>
						Contamos con los
						<span className='text-[#FF0C0C] '> mejores servicios</span> a su
						disposición
					</motion.h2>
				</div>
				<motion.div
					variants={container}
					initial='hidden'
					whileInView='show'
					viewport={{once:true}}
					transition={{ delay: 1 }}
					className='max-w-6xl h-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-16'>
					<CardServide />
					<CardServide />
					<CardServide />
					<CardServide />
					<CardServide />
					<CardServide />
				</motion.div>
			</div>
		</div>
	)
}
