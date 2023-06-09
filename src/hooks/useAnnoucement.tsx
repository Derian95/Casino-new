import { useQuery } from "@tanstack/react-query"
import { corporateApi } from "../api/corporateApi"
import { AnnouncementResponse } from "../interfaces/data"




const getDataAnouncement = async( id:string ): Promise<AnnouncementResponse> =>{
    const { data } = await corporateApi.get<AnnouncementResponse>(`/Corporation/announcement/${id}`)
    return data
}



export const useAnouncementData= ( id:string ) =>{
    const dataAnouncement = useQuery(
        [`/corporationData`,id],
        () => getDataAnouncement(id),
        {
            staleTime:Infinity
        }
    )


    return dataAnouncement
}

