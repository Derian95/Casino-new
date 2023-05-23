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
			className='min-w-screen min-h-screen bg-white flex justify-center items-center py-20 px-5'
			id='contact'>
			<div className='max-w-5xl h-auto w-full '>
				<p className='text-3xl mb-10 text-center font-bold text-[#0A47C9]'><span className='text-[#333333]'>Ponganse en </span> contacto</p>

				<div className='w-full  '>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-14  '>
						<form action='' className=' w-full flex flex-col gap-4'>
							<div>
								<label className='text-[#333333] text-sm '>Correo</label>
								<input
									type='text'
									placeholder='Ingrese su correo'
									className='w-full focus:outline-none mt-2  py-4 px-2 border-gray-200 border focus:border-[#0A47C9] transition-colors duration-500 ease-in-out'
								/>
							</div>
							<div>
								<label className='text-[#333333] text-sm '>Numero</label>
								<input
									type='text'
									placeholder='Ingrese su numero telefonico'
									className='w-full focus:outline-none mt-2 py-4 px-2 border-gray-200 border focus:border-[#0A47C9] transition-colors duration-300 ease-in-out' 
								/>
							</div>
							<div>
								<label className='text-[#333333] text-sm '>Asunto</label>
								<input
									type='text'
									placeholder='Ingrese su asunto'
									className='w-full focus:outline-none mt-2  py-4 px-2 border-gray-200 border focus:border-[#0A47C9] transition-colors duration-500 ease-in-out'
								/>
							</div>
							<div>
								<label className='text-[#333333] text-sm '>Mensaje</label>
								<textarea
									placeholder='Ingrese su mensaje'
									className='w-full focus:outline-none mt-2 py-4 px-2 border-gray-200 border focus:border-[#0A47C9] transition-colors duration-500 ease-in-out'
								/>
							</div>
							<button className='bg-[#0A47C9] text-white py-3'>Enviar</button>
						</form>
					<div id='map' className='bg-red-800 h-[250px] md:h-full'></div>

					</div>
				</div>
			</div>
		</div>
	)
}
