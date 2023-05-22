import  { useEffect} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; 
mapboxgl.accessToken = 'pk.eyJ1Ijoia2ljaGl0YW5vIiwiYSI6ImNsZGFzZXd2MTBtNDUzdm5udjR6d3p5amkifQ.vs4RtrsBOtu8whthlUOTbw';




export const Contact = () => {

	useEffect(() => {
		new mapboxgl.Map({
		 container: 'map', // container ID
		 style: 'mapbox://styles/mapbox/dark-v10', // style URL
		 center: [-74.5, 40], // starting position [lng, lat]
		 zoom: 9, // starting zoom
		 });
	 }, []);

	return (
		<div
			className='min-w-screen min-h-screen bg-white flex justify-center items-center py-20 PX-5'
			id='contact'>
			<div className='max-w-5xl h-auto w-full '>
				<p className='text-3xl mb-7 text-center'>Ponganse en contacto</p>
				<div className='w-full  '>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-14  '>
						<form action='' className=' w-full flex flex-col gap-4'>
							<div>
								<label>Nombre</label>
								<input
									type='text'
									placeholder='Nombre'
									className='w-full focus:outline-none bg-[#F7F8F9] py-4 px-2'
								/>
							</div>
							<div>
								<label>Correo</label>
								<input
									type='text'
									placeholder='Nombre'
									className='w-full focus:outline-none bg-[#F7F8F9] py-4 px-2'
								/>
							</div>
							<div>
								<label>Asunto</label>
								<input
									type='text'
									placeholder='Nombre'
									className='w-full focus:outline-none bg-[#F7F8F9] py-4 px-2'
								/>
							</div>
							<div>
								<label>Mensaje</label>
								<textarea
									placeholder='Mensaje'
									className='w-full focus:outline-none bg-[#F7F8F9] py-4 px-2'
								/>
							</div>
						</form>
					<div id='map' className='bg-red-800'></div>

					</div>
				</div>
			</div>
		</div>
	)
}
