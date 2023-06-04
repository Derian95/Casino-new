import imgAbout from '../../assets/aboutImg.svg'

export const About = () => {
	return (
		<div className='w-full'>
			
			<div className='w-full h-fit  flex flex-col items-center  -translate-y-1 gap-20 py-36 '>
				<div className='max-w-6xl flex gap-24 items-center w-full justify-center'>
                    <div className='h-[60vh] w-[40%]  img-form '>
					<img src={imgAbout} alt=''  className='h-full img-form2 w-full object-cover  z-10 absolute'/>

                    </div>
					<div className='flex flex-col gap-7'>
						<div>
                            <span className='text-[#FF0C0C] font-normal'>SOBRE NOSOTROS</span>
                        <h2 className='text-[38px] text-[#212529] font-bold '>
							Lideres en <span className='text-[#FF0C0C] '>entretenimiento</span>
						</h2>
						
                        </div>
						<div>
                        <p className='text-2xl text-[#333333] font-semibold mb-3'>Misión</p>
						<p className='text-sm text-[#242732] font-normal max-w-md leading-7'>
							Ser la empresa de entretenimiento más sólida y organizada del
							país.
						</p>
                        </div>
						<div>
                        <p className='text-2xl text-[#333333] font-semibold mb-3'>Visión</p>
						<p className='text-sm text-[#242732] font-normal max-w-md leading-7'>
							Que los clientes logren la mejor experiencia de entretenimiento.
							Brindar a nuestros colaboradores un medio para su desarrollo y
							bienestar. Incrementar el valor de la Corporación.
						</p>
                        </div>
                        <hr />
                        <button className='shadow-lg shadow-orange-200 max-w-fit bg-gradient-to-r from-[#FF720C] to-[#FF0C0C] px-10 py-3 text-white rounded-[45px] text-sm'>
						Ver historia
					</button>
					
					</div>
				</div>
			</div>
		
		</div>
	)
}
