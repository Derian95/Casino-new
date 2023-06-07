import { Card } from "./Card"


const data=[
  {
    titulo:'Premios a mil',
    descripcion:'Sorteamos más de S/120,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país.',
    imagen:'https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80rwiCKiA&oe=6471EC89'
  },
  {
    titulo:'a',
    descripcion:'Sorteamos más de S/110,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país. ¡Te esperamos! 🙌',
    imagen:'https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'
  },
  {
    titulo:'Con todo en marzo eaaan damasco',
    descripcion:'Sorteamos más de S/110,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país. ¡Te esperamos! 🙌',
    imagen:'https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'
  },
  {
    titulo:'Con todo en marzo en damasddaaaco',
    descripcion:'Sorteamos más de S/110,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país. ¡Te esperamos! 🙌',
    imagen:'https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'
  },
  {
    titulo:'Con todo en marzo en damascasdado',
    descripcion:'Sorteamos más de S/110,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país. ¡Te esperamos! 🙌',
    imagen:'https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'
  },
  {
    titulo:'Con todo en marzo en damascoadasdas',
    descripcion:'Sorteamos más de S/110,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país. ¡Te esperamos! 🙌',
    imagen:'https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'
  },
  {
    titulo:'Con todo en marzo en damasaaco',
    descripcion:'Sorteamos más de S/110,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país. ¡Te esperamos! 🙌',
    imagen:'https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'
  },
  {
    titulo:'Con todo en marzo en damaasco',
    descripcion:'Sorteamos más de S/110,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país. ¡Te esperamos! 🙌',
    imagen:'https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'
  },
  {
    titulo:'Con todo en marzo en damasco',
    descripcion:'Sorteamos más de S/110,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país. ¡Te esperamos! 🙌',
    imagen:'https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'
  },
  {
    titulo:'Con todo en marzo en damascaao',
    descripcion:'Sorteamos más de S/110,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país. ¡Te esperamos! 🙌',
    imagen:'https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'
  },
  {
    titulo:'Con todo en marzo en damascso',
    descripcion:'Sorteamos más de S/110,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país. ¡Te esperamos! 🙌',
    imagen:'https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'
  },
  {
    titulo:'Con todo en marzo en damascos',
    descripcion:'Sorteamos más de S/110,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país. ¡Te esperamos! 🙌',
    imagen:'https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'
  },
  {
    titulo:'Con todo en marzo en damascoa',
    descripcion:'Sorteamos más de S/110,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país. ¡Te esperamos! 🙌',
    imagen:'https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'
  },

  
]
export const ListTotal = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2  ">
        {/* <Card/>
        <Card/> */}

        {
          data.map(evet =>(
            <Card key={evet.titulo} title={evet.titulo}  image={evet.imagen} type={"EVENTO"}/>
          ))
        }
    </div>
  )
}
