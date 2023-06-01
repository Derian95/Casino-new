import { Card } from "./Card"


const data=[
  {
    titulo:'Premios a mil',
    descripcion:'Sorteamos más de S/120,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país.',
    imagen:'https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    titulo:'Con todo en marzo en damasco',
    descripcion:'Sorteamos más de S/110,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país. ¡Te esperamos! 🙌',
    imagen:'https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  
]
export const ListAdvertisemen = () => {
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
