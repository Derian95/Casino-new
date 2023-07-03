import { useMemo } from 'react';
import { useCorporateStore } from '../../store/CorporateStore'
import { Card } from '../advertisements/Card'

export const ListPromotion = () => {
    const { dataCorporate:promotionData} = useCorporateStore()
  
    const slicedPromotion = useMemo(() => {
        const promotion = promotionData?.announcement?.promotions;
        return promotion?.slice(0, 2);
      }, [promotionData]);
      
    return (
      <div className={`grid grid-cols-1 gap-8   ${slicedPromotion?.length===1?'w-full md:w-4/6':'md:grid-cols-2 w-full '} `}>
         
          {
            slicedPromotion?.map(value =>(
              <Card key={value.id} title={value.title} image={value.imagesUri[0]} type={"PROMOCION"} id={value.id} startDate={value.startDate} endDate={value.endDate}/>
            ))
          }
      </div>
    )
}
