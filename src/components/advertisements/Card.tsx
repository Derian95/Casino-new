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
			className='relative flex flex-col gap-y-2 group overflow-hidden h-fit w-full '>

			{/* <div className='h-full w-full absolute bg-gradient-to-t from-slate-950/50 to-transparent  '></div> */}

			<img src={imagen} alt='' className='group-hover:scale-110 transition-transform duration-500   object-cover w-full h-[200px]' />
			
			<span className='text-[10px] font-semibold bg-[#BDD2FF] text-[#0A47C9] max-w-fit px-2 py-1'>EVENTO</span>
			<p className='text-xs text-[#556987]'>19 Dic - 27 Ene</p>
			<p className='text-[#354154] font-bold text-2xl'>Descuentos de locura en al entrada</p>
			<p className='text-[#0A47C9] font-bold'>Ver oferta  {'  ->'} <i></i> </p>
		</motion.div>
    </Link>
		
	)
}
