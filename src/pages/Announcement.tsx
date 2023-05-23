import { ListTotal } from "../components/advertisements/ListtTotal"

export const Announcement = () => {
  return (
    <div className="h-full w-full flex justify-center pt-40">
        <div className="max-w-5xl  w-full h-full flex gap-4 flex-col md:flex-row px-5" >
            <div className="w-full h-fullflex gap-2 py-10 flex-row md:flex-col md:w-64 ">
                <p className="font-bold text-[#354154] mb-4 pl-3">CATEGORIA</p>
                <div className="flex flex-row md:flex-col">
                <p className="hover:bg-[#BDD2FF] hover:text-[#0A47C9] text-[#556987] py-2 px-4 cursor-pointer">Promoción</p>
                <p className="hover:bg-[#BDD2FF] hover:text-[#0A47C9] text-[#556987] py-2 px-4 cursor-pointer">Evento</p>
                </div>
               
            </div>
            <div className="py-8 md:py-10  ">
            <ListTotal/>
            </div>

        </div>
    </div>
  )
}
