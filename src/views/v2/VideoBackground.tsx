import { useRef } from 'react'

import { motion, useScroll, useTransform } from 'framer-motion'
import { VideoLoading } from '../../components/ui/VideoLoader'
import { useCorporateStore } from '../../store/CorporateStore'

export const VideoBackground = () => {
    const {dataCorporate} = useCorporateStore()
	const extendedRef = useRef<HTMLDivElement | null>(null)

	const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
		target: extendedRef,
		offset: ['start end', 'end end'],
	})

	const scale = useTransform(
		scrollYProgressIncludingOverlap,
		[0.1, 0.4, 0.75, 1],
		[0.8, 1.2, 1.3, 1]
	)
	return (
		<div
			ref={extendedRef}
			className='w-full h-auto  lg:h-[100vh] flex justify-center items-start relative z-10 mt-[-35vh] '>
			{/* <motion.video
				style={{ scale }}
				autoPlay
                onLoad={()=>console.log('ia me cargue')}
				loop
				muted
				playsInline
				className='imgShadow max-w-6xl rounded-3xl shadow-[#f5d6bf] z-20  w-full'>
				<source src={video} type='video/mp4' />
			</motion.video> */}
            <motion.div
            className='imgShadow max-w-6xl rounded-3xl  shadow-[#f5d6bf] z-20  w-full'
            style={{ scale }}
            >
            <VideoLoading src={dataCorporate?.info.videoUri!}/>

            </motion.div>
		</div>
	)
}
