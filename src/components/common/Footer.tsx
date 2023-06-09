import { useMemo } from 'react'
import image from '../../assets/Mail.svg'
import image2 from '../../assets/Phone.svg'
import { useCorporateStore } from '../../store/CorporateStore'

export const Footer = () => {
	const { dataCorporate } = useCorporateStore()

	const socialNetwork = useMemo(() => {
		const data = dataCorporate?.socialNetworks
		return data
	}, [dataCorporate])

	const contact = useMemo(() => {
		const data = dataCorporate?.contact
		return data
	}, [dataCorporate])

	const conditionalGrid = useMemo(() => {
		let numberGridCols = 4
		if (socialNetwork?.length === 0) {
			numberGridCols -= 1
		}
		if (contact?.phones.length === 0) {
			numberGridCols -= 1
		}
		if (contact?.emails.length === 0) {
			numberGridCols -= 1
		}
		return numberGridCols
	}, [dataCorporate])

	console.log(dataCorporate?.contact.phones)
	return (
		<div className='min-w-screen min-h-[50vh] bg-gradient-to-b from-[#FF720C] to-[#FF0C0C] flex justify-center items-center py-20'>
			<div className='max-w-7xl w-full  text-white h-full flex justify-center px-5 '>
				<div
					className={`grid grid-cols-1 gap-6
					${conditionalGrid ==2 ? 'sm:grid-cols-2' : conditionalGrid ==3 ?' sm:grid-cols-1 md:grid-cols-3':conditionalGrid ==4 ?' sm:grid-cols-2 md:grid-cols-4':'' }
					
					`}>
					<div>
						<p className='text-3xl mb-6 font-bold'>GLADCON</p>
						<p className='text-[#E3E3E3] font-extralight'>
							Ubiquenos en al calle {contact?.address}
						</p>
					</div>
					{contact?.emails.length === 0 ? null : (
						<div className='flex flex-col gap-4'>
							<p className='text-lg mb-6'>Nuestros correos</p>

							{contact?.emails.map((email) => (
							<div key={email} className='flex gap-2 items-center'>
								<img src={image} alt='' />
								<p className='font-extralight'>{email} </p>
							</div>
						))}
						</div>
					)}
					

					{contact?.phones.length === 0 ? null : (
						<div className='flex flex-col gap-4'>
							<p className='text-lg mb-6'>Nuestros numeros</p>

							{contact?.phones.map((phone) => (
								<div key={phone} className='flex gap-4 items-center'>
									<img src={image2} alt='' />
								<p className='font-extralight'>{phone} </p>

								</div>
							))}
						</div>
					)}

					{socialNetwork?.length === 0 ? null : (
						<div>
							<p className='text-lg mb-6'>Nuestras redes</p>
							{socialNetwork?.map((social) => (
								<div key={social.name}>
									<p className='font-extralight'>{social.name}</p>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
