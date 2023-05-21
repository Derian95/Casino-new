import { useUiStore } from '../../store/uiStore';
import { Squeeze as Hamburger } from 'hamburger-react'

export const HamburguerUi = () => {
  
  const { changeStateMenu, showMenu } = useUiStore()
  
  return (
    <Hamburger toggled={showMenu} toggle={changeStateMenu} />
      )
};
