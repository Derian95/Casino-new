import { Variants, motion } from 'framer-motion'
import { CardServide } from '../../components/services/CardServide'

const container:Variants = {
    hidden: { rotate: 90 },
    show: {
        rotate: 0,
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.2,
        },
    }
}



export const Services = () => {
	return (
		<div
			className='w-screen h-auto flex flex-col justify-center items-center py-28 bg-white'
			id='about'>
			<p className='text-[#094998] font-medium text-sm '>SERVICIOS</p>
			<p className='font-bold text-[#313131] text-[44px] pb-5 mb-10'>
				Los mejores servicios para ustedes
			</p>

			<motion.div  variants={container}
                initial="hidden"
                whileInView="show" className='max-w-7xl h-auto w-full grid grid-cols-1 md:grid-cols-3 px-5 gap-16'>
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
