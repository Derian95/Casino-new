import employe from '../../assets/employ.svg'
export const Employed = () => {
  return (
    <div className="w-full flex justify-center items-center py-36">
        <div className='max-w-6xl flex gap-10 justify-start items-center'>
        <img src={employe} alt="" className='w-2/4' />
        <div className='flex flex-col gap-10'>
            <h2 className=' text-5xl max-w-sm text-left font-semibold  text-[#212529]  leading-[60px]'>Trabaje con nosotros</h2>
            <button className='shadow-lg shadow-orange-200 max-w-fit bg-gradient-to-r from-[#FF720C] to-[#FF0C0C] px-10 py-3 text-white rounded-[45px] text-sm'>
						Ver empleos
					</button>
        </div>
        </div>
    </div>
  )
};
