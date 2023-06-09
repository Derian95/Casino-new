


import { useMemo } from "react"
import { useCorporateStore } from "../../store/CorporateStore"
import { Card } from "./Card"



export const ListAdvertisemen= () => {
  
  const { dataCorporate:eventsData} = useCorporateStore()
  
  const slicedEvents = useMemo(() => {
    const events = eventsData?.announcement?.events;
    return events?.slice(0, 2);
  }, [eventsData]);

  return (
    <div className={`grid grid-cols-1 gap-8   ${slicedEvents?.length===1?'w-full md:w-4/6':'md:grid-cols-2 w-full '} `}>
       
        {
         slicedEvents?.slice(0,2).map(evet =>(
            <Card key={evet.id} title={evet.title} image={evet.imagesUri[0]} type={"EVENTO"} id={evet.id}/>
          ))
        }
    </div>
  )
}
