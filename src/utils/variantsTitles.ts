import { Variants } from 'framer-motion'


export const variantsTitle:Variants={
    initial:{
        opacity:0,
        scale:.7,
        translateY:20
    },
    show:{
        opacity:1,
        scale:1,
        translateY:0,
        transition:{ease:'easeOut', duration:1.5, type:'tween'}
    }
}