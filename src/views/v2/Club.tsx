
import imgAbout from '../../assets/aboutImg.svg'

export const Club = () => {
   
  return (
    <div  className='w-full  '>
   
    <div className='w-full h-fit flex flex-col items-center  -translate-y-1 gap-20 py-36'>
        <div className='max-w-6xl flex gap-24'>
            <img src={imgAbout} alt=''  className='h-[70vh] w-3/6 object-cover'/>
            <div >
                <div className='flex flex-col gap-5 justify-center'>
                    <div>
                    <span className='text-[#FF0C0C] font-normal'>CLUB</span>
                <h2 className='text-[38px] text-[#212529] font-bold '>
                    Los <span className='text-[#FF0C0C] '>mejores beneficios</span> club/socios
                </h2>
                    </div>
              
                <p className='text-sm text-[#242732] font-normal max-w-md leading-7'>
                Que los clientes logren la mejor experiencia de entretenimiento. Brindar a nuestros colaboradores un medio para su desarrollo y bienestar. Incrementar el valor de la Corporación.Que los clientes logren la mejor experiencia de entretenimiento. Brindar a nuestros colaboradores un medio para su desarrollo y bienestar. Incrementar el valor de la Corporación.Que los clientes logren la mejor experiencia de entretenimiento. Brindar a nuestros colaboradores un medio para su desarrollo y bienestar. Incrementar el valor de la.
                </p>
                <hr />
                <button className='shadow-lg shadow-orange-200 max-w-fit bg-gradient-to-r from-[#FF720C] to-[#FF0C0C] px-10 py-3 text-white rounded-[45px] text-sm'>
						Ver beneficios
					</button>
                </div>
              
            
            </div>
        </div>
   </div>
</div>
  )
};
