import { useUiStore } from '../../store/uiStore';
import  Hamburger  from 'hamburger-react'

export const HamburguerUi = () => {
  
  const { changeStateMenu, showMenu } = useUiStore()


  return (
    <Hamburger toggled={showMenu} toggle={changeStateMenu} color='#454545'/>
      )
};
