import { Card } from "./Card"


const data=[
  {
    titulo:'Premios a mil',
    descripcion:'Sorteamos más de S/120,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país.',
    imagen:'https://scontent.flim12-1.fna.fbcdn.net/v/t39.30808-6/340781423_605196688179352_703525732644713930_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=XL2D4wJJxK4AX_vnDmi&_nc_ht=scontent.flim12-1.fna&oh=00_AfDS4-99eFh9HbvUXG4MnsfNvb1LrvUtZetG8QjrwiCKiA&oe=6471EC89'
  },
  {
    titulo:'Con todo en marzo en damasco',
    descripcion:'Sorteamos más de S/110,000 soles en Premios. 🤩 Además, puedes disfrutar de cortesías, cócteles deliciosos, diversión y las mejores máquinas del país. ¡Te esperamos! 🙌',
    imagen:'https://scontent.flim12-1.fna.fbcdn.net/v/t39.30808-6/336171844_1470773916785440_8835317384211040346_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=icRMmeC5lWgAX9EZMJd&_nc_ht=scontent.flim12-1.fna&oh=00_AfABnO-3AOUw1PhxAh9t5yIg_U6ybyrBH7CjMnS6ka6ZEQ&oe=64724A12'
  }
]
export const ListAdvertisemen = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2  ">
        {/* <Card/>
        <Card/> */}

        {
          data.map(evet =>(
            <Card key={evet.imagen} title={evet.titulo}  image={evet.imagen} type={"EVENTO"}/>
          ))
        }
    </div>
  )
}
