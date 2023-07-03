import { Variants, motion } from 'framer-motion'
import { Service } from '../../interfaces/data'
import { FC } from 'react'

const itemB:Variants = {
    hidden: { opacity: 0, translateY: 50 },
    show: { opacity: 1, translateY: 0 },
}

interface Props{
  serviceInfo:    Service
}

export const CardServide: FC<Props> = ({ serviceInfo }) => {
  const { description, icon, name } = serviceInfo
  return (
    <motion.div variants={itemB} transition={{type:'tween'}} className="bg-white shadow-lg   flex flex-col justify-around items-center rounded-xl gap-9 py-20 px-7">
        <div className='flex flex-col justify-center items-center'>
            <div className='bg-[#ffcbcb] p-2 rounded-full flex justify-center items-center h-16 w-16 text-xl text-[#fd3f3f]'>
            {/* <img src={icon} alt="" className='object-cover' /> */}
              <i className={icon}></i>
            </div>
            <span className="text-[#3C3C3C] font-semibold text-2xl mt-4 capitalize">{name}</span>
        </div>
        <p className="text-sm text-[#242732] font-normal leading-6 text-center">
          {description}
          {icon}
        </p>
    </motion.div>
  )
}
