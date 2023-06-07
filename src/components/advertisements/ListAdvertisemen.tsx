import { Card } from "./Card"

import imagen2 from '../../assets/screen1.png'
import imagen1 from '../../assets/screen2.png'

const data=[
  {
    titulo:'Premios a mil',
    descripcion:'Sorteamos más de S/120,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país.',
    imagen:imagen2
  },
  {
    titulo:'Con todo en marzo en damasco',
    descripcion:'Sorteamos más de S/110,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país. ¡Te esperamos! 🙌',
    imagen:imagen1
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
