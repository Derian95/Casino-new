import { CardServide } from '../../components/services/CardServide'

export const Services = () => {
	return (
		<div className='w-full bg-[#fff7f2] ra  py-36'>
			<div className='w-full h-fit  flex flex-col justify-start items-center  gap-20 '>
				<div className='text-center'>
                <span className='text-[#FF0C0C] font-normal'>SERVICIOS</span>
				<h2 className='text-[38px] text-[#212529] font-bold  max-w-xl'>
					Contamos con los <span className='text-[#FF0C0C] '>mejores servicios</span> a su disposición
				</h2>
                </div>
				<div className='max-w-6xl h-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-16'>
					<CardServide />
					<CardServide />
					<CardServide />
					<CardServide />
					<CardServide />
					<CardServide />
				</div>
			</div>
		</div>
	)
}
