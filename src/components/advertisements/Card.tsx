import { motion } from 'framer-motion'
import imagen from '../../assets/aboutImg.png'
import { Link } from 'react-router-dom'

export const Card = () => {
	return (
    <Link to={'anuncio-detalle'}>
    <motion.div
			initial={{ opacity: 0, translateY: 30 }}
			whileInView={{ opacity: 1, translateY: 0 }}
			transition={{ type: 'tween', duration: 0.5 }}
			viewport={{ once: true }}
			className='relative flex flex-col gap-y-4 group overflow-hidden'>
			<div className='h-full w-full absolute bg-gradient-to-t from-slate-950/50 to-transparent  '></div>

			<img src={imagen} alt='' className='group-hover:scale-125 transition-transform duration-500' />
			<div className='flex flex-col  absolute justify-between items-start h-full text-white p-2'>
				<span className='bg-red-400 text-red-800 rounded-md px-3'>Evento</span>
				<p className='text-lg font-bold'> 2X1 en tragos  </p>
			</div>
		</motion.div>
    </Link>
		
	)
}
