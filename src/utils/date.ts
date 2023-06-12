


export const formatDate=(fecha:string) => {
  
    var x = new Date(fecha)
    var dd = x.getDate()
    var mm = x.toLocaleString('default',{month:'long'}).toLowerCase()
    return `${dd} de ${mm}`

}