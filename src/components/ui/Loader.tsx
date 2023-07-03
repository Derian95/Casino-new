import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { useUiStore } from '../../store/uiStore'

export const Loader = () => {
	const [scrollBlocked, setScrollBlocked] = useState(true)

  const {changeStateLoading} = useUiStore()
	useEffect(() => {
		setTimeout(() => {
			setScrollBlocked(false)
      changeStateLoading()

		}, 5000)
		if (scrollBlocked) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [scrollBlocked])

	return (
		<motion.div
			initial={{ opacity: 1,width:'100%' }}
			animate={{ opacity: 0, width: 0 }}
			transition={{ delay: 5, duration: 1, type: 'tween' }}
			className=' bg-gradient-to-b from-[#FF720C] to-[#FF0C0C] overflow-hidden text-white  z-50 w-screen h-screen flex items-center justify-center fixed top-0 right-0 '>
			<div className='spinner'></div>

			<div className='absolute bottom-0 right-0'>
				<CountUp end={100} duration={5} className='font-bold text-8xl' />{' '}
				<span className='font-bold text-7xl ml-1'> %</span>
			</div>
		</motion.div>
	)
}
