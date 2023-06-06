import { useQuery } from "@tanstack/react-query"
import { CorporationResponse } from "../interfaces/data"
import { corporateApi } from "../api/corporateApi"




const getDataCorporate = async(): Promise<CorporationResponse> =>{
    const { data } = await corporateApi.get<CorporationResponse>('/corporation')
    return data
}



export const useCorporationData= () =>{
    const dataCorporation = useQuery(
        ['/corporationData'],
        getDataCorporate,
        {
            staleTime:Infinity
        }
    )


    return dataCorporation
}
