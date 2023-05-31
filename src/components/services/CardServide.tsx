import { Variants, motion } from 'framer-motion'
import image from '../../assets/iconService.svg'

const itemB:Variants = {
    hidden: { scale: 0, top: 200 },
    show: { scale: 1, top: 80 },
}


export const CardServide = () => {
  return (
    <motion.div variants={itemB} transition={{type:'tween'}} className="bg-white shadow-lg flex flex-col justify-around items-center rounded-xl gap-9 py-20 px-7">
        <div className='flex flex-col justify-center items-center'>
            <div className='bg-[#D3E7FF] p-3 rounded-full flex justify-center items-center'>
            <img src={image} alt="" className='object-cover' />

            </div>
            <p className="text-[#3C3C3C] font-semibold text-2xl">MÁQUINAS</p>
        </div>
        <p className="text-[#7D808F] font-normal text-sm text-center">Contamos con lo mejor en máquinas y juegos, siemsiempre a la vanguardia en el rubro, ofreciendo entretenimiento de calidad a nuestros clientes.siempre a la vanguardia en el rubro, 
        </p>
    </motion.div>
  )
}
