import employe from '../../assets/employ.svg'
export const Employed = () => {
  return (
    <div className="w-full flex justify-center items-center py-36">
        <div className='max-w-6xl flex flex-col lg:flex-row gap-10 justify-center items-center'>
        <div className='flex flex-col gap-10 justify-center lg:items-start items-center'>
            <h2 className=' text-5xl max-w-sm text-center lg:text-left font-semibold  text-[#212529]  leading-[60px]'>Trabaje con nosotros</h2>
            <button className='shadow-lg shadow-orange-200 max-w-fit bg-gradient-to-r from-[#FF720C] to-[#FF0C0C] px-10 py-3 text-white rounded-[45px] text-sm'>
						Ver empleos
					</button>
        </div>
        <img src={employe} alt="" className='w-full md:w-4/5 lg:w-3/6' />

        </div>
    </div>
  )
};
