import { FC,  } from "react"
import { Card } from "./Card"
import { useAnouncementsData } from "../../hooks/useAnnoucements"
import {  DataAnnouncement } from "../../interfaces/data"





interface Props{
  filterData:     number
}
export const ListTotal:FC<Props> = ({ filterData }) => {

  const {data: annoucements} = useAnouncementsData()

  const filtrarPorTipo = (array: DataAnnouncement[], filtro: number): DataAnnouncement[] => {
    if (filtro === 2) {
      // Si filterAnnouncement es 2, se muestran todos los tipos
      return array;
    } else {
      // Filtrar por tipo según el estado filterAnnouncement
      return array.filter(objeto => objeto.typeAnnouncement === filtro);
    }
  };

  const dataFilter = filtrarPorTipo(annoucements?.data!, filterData);

  
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2  ">
        {/* <Card/>
        <Card/> */}

        {
          dataFilter?.map(evet =>(
            <Card key={evet.idCorpAnnouncement} title={evet.title} image={evet.corpAnnouncementsMedia[0].pathWeb} type={evet.typeAnnouncement ==1 ?'EVENTO':'PROMOCION'}  id={evet.idCorpAnnouncement}/>
          ))
        }
    </div>
  )
}
