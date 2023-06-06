import { Variants, motion } from 'framer-motion'
import image from '../../assets/icon.svg'

const itemB:Variants = {
    hidden: { opacity: 0, translateY: 50 },
    show: { opacity: 1, translateY: 0 },
}


export const CardServide = () => {
  return (
    <motion.div variants={itemB} transition={{type:'tween'}} className="bg-white shadow-lg   flex flex-col justify-around items-center rounded-xl gap-9 py-20 px-7">
        <div className='flex flex-col justify-center items-center'>
            <div className='bg-[#ffcbcb] p-2 rounded-full flex justify-center items-center'>
            <img src={image} alt="" className='object-cover' />

            </div>
            <span className="text-[#3C3C3C] font-semibold text-2xl mt-4">MÁQUINAS</span>
        </div>
        <p className="text-sm text-[#242732] font-normal leading-6 text-center">Contamos con lo mejor en máquinas y juegos, siemsiempre a la vanguardia en el rubro, ofreciendo entretenimiento de calidad a nuestros clientes.siempre a la vanguardia en el rubro, 
        </p>
    </motion.div>
  )
}
