import { useQuery } from "@tanstack/react-query"
import { corporateApi } from "../api/corporateApi"
import {  AnnouncementsResponse } from "../interfaces/data"




const getDataAnouncements = async( ): Promise<AnnouncementsResponse> =>{
    const { data } = await corporateApi.get<AnnouncementsResponse>(`/Corporation/announcement`)
    return data
}



export const useAnouncementsData= ( ) =>{
    const dataAnouncement = useQuery(
        [`/corporationAnnoucements`],
        getDataAnouncements,
        {
            staleTime:Infinity
        }
    )


    return dataAnouncement
}

