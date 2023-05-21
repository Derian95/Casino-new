
export const Contact = () => {
  return (
    <div className="min-w-screen min-h-screen bg-white flex justify-center items-center py-20" id="contact">
    <div className="max-w-5xl w-full ">
        <p className='text-3xl mb-12 text-center'>Ponganse en contacto</p>
        <div className="w-full">
            <div className="w-2/4">
                <form action="" className=" w-full flex flex-col gap-4">
                    <div>
                        <label >Nombre</label>
                        <input type="text" placeholder="Nombre" className="w-full focus:outline-none bg-[#F7F8F9] py-4 px-2" />
                    </div>
                    <div>
                        <label >Correo</label>
                        <input type="text" placeholder="Nombre" className="w-full focus:outline-none bg-[#F7F8F9] py-4 px-2" />
                    </div>
                    <div>
                        <label >Asunto</label>
                        <input type="text" placeholder="Nombre" className="w-full focus:outline-none bg-[#F7F8F9] py-4 px-2" />
                    </div>
                    <div>
                        <label >Mensaje</label>
                        <textarea  placeholder="Mensaje" className="w-full focus:outline-none bg-[#F7F8F9] py-4 px-2" />
                    </div>
                </form>
            </div>
            <div></div>
        </div>
    </div>
</div>
  )
}
