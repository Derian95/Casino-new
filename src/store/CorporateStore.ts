
import { create } from 'zustand'
import { CorporationData } from '../interfaces/data'

interface CorporationState{
    dataCorporate:                  CorporationData | null
    setDataCorporate:        (data:CorporationData | null)=>void
}

export const useCorporateStore = create<CorporationState>( set => ({

    dataCorporate:                 null,
    setDataCorporate:        (obj) =>set({ dataCorporate:obj})

})) 