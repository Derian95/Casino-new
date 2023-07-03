import { FC, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

interface Props {
	src: string
}
export const VideoLoading: FC<Props> = ({ src }) => {
	const [videoLoaded, setVideoLoaded] = useState(false);

	useEffect(() => {
		const video = document.createElement('video');
		video.onloadeddata = () => {
			setVideoLoaded(true);
		};
		video.src = src;
	}, [src]);

	return (
		<div className="w-full h-full">
			{!videoLoaded && (
				<div className="w-full h-[45vh] object-cover">
					<Skeleton count={1} width={'100%'} height={'100%'} className="p-1" />
				</div>
			)}
			{videoLoaded && (

                    <video
                    className="w-full h-full rounded-3xl "
                    autoPlay
                    loop
                    muted
                    playsInline
                    >
                    <source src={src} type='video/mp4'  />

                    </video> 
			)}
		</div>
	)
}