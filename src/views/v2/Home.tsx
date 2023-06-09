import { motion, useScroll, useTransform } from 'framer-motion'

import {  useEffect, useRef } from 'react'
import { variantsText } from '../../utils/variants'
import { useUiStore } from '../../store/uiStore'


export const Home = () => {


	const { loading } = useUiStore()
	const targetRef = useRef<HTMLDivElement | null>(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['end end', 'end start'],
	})


	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
	const position = useTransform(scrollYProgress, (pos) =>
		pos >= 1 ? 'relative' : 'fixed'
	)



	useEffect(() => {
		const updateMousePosition = (ev: MouseEvent) => {
			if (!targetRef.current) return
			const { clientX, clientY } = ev
			targetRef.current.style.setProperty('--x', `${clientX}px`)
			targetRef.current.style.setProperty('--y', `${clientY}px`)
		}

		window.addEventListener('mousemove', updateMousePosition)

		return () => {
			window.removeEventListener('mousemove', updateMousePosition)
		}
	}, [])


	return (
		<motion.div
			id='inicio'
			style={{ opacity }}
			ref={targetRef}
			className='w-full flex justify-center items-start   pt-44 px-5 relative mb-[8rem] h-screen  text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),#f5d6bf,_transparent_100%)] before:opacity-40 z-10"'>
			<motion.div
				style={{ position, scale, x: '-50%' }}
				className='w-full lg:max-w-7xl flex-col flex justify-center items-center gap-8 z-20 fixed left-1/2 '>
				<motion.p
					variants={variantsText}
					initial={loading ? '' : 'initial'}
					whileInView={loading ? '' : 'show'}
					viewport={{ once: true }}
					transition={{ duration: 0.5, type: 'tween', delay: 5.5 }}
					className={`max-w-3xl px-1 text-3xl md:text-5xl text-center font-semibold text-[#212529] md:leading-[60px] leading-10 }`}>
					Gladcon: Líderes en Juego y Entretenimiento con 30 años de Experiencia
				</motion.p>
				<motion.p
					variants={variantsText}
					initial={loading ? '' : 'initial'}
					whileInView={loading ? '' : 'show'}
					viewport={{ once: true }}
					transition={{ duration: 0.5, type: 'tween', delay: 5.7 }}
					className='max-w-lg px-4 md:p-0 text-[#999999] tracking-normal text-center font-normal text-sm md:text-base leading-7'>
					Descubre la emoción, la diversión y las mejores experiencias en
					nuestros casinos de clase mundial
				</motion.p>
				<motion.div
					variants={variantsText}
					initial={loading ? '' : 'initial'}
					whileInView={loading ? '' : 'show'}
					viewport={{ once: true }}
					transition={{ duration: 0.5, type: 'tween', delay: 5.9 }}
					className='flex flex-col md:flex-row md:gap-14 gap-4 mb-14'>
					<button className='shadow-lg shadow-orange-200 bg-gradient-to-r from-[#FF720C] to-[#FF0C0C] px-6 py-4 text-white rounded-[45px] text-sm'>
						Conoce nuestros casinos
					</button>
					<button className='shadow-lg shadow-orange-100 bg-transparent border border-[#FF0C0C]  px-6 py-4 text-[#FF0C0C] rounded-[45px] text-sm'>
						Trabaje con nosotros
					</button>
				</motion.div>
			</motion.div>
		</motion.div>
	)
}
