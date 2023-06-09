
import { create } from 'zustand'

interface UiState{
    showMenu:                boolean
    showDetail:              boolean
    cursorStyle:             boolean
    cursorStyleDetail:       boolean
    loading:                 boolean
    menuOption:              string
    changeStateMenu:         ()=>void
    changeStateDetail:       ()=>void
    changeCursorState:       ()=>void
    changeCursorStateDetail: ()=>void
    changeStateLoading:      ()=>void
    changeMenuOption:        (option:string)=>void
}

export const useUiStore = create<UiState>( set => ({

    showMenu:                 false,
    showDetail:               false,
    cursorStyle:              false,
    cursorStyleDetail:        false,
    loading:                  false,
    menuOption:               '',
    changeStateMenu:          () => set( state => ({ showMenu: !state.showMenu })),
    changeStateDetail:        () => set( state => ({ showDetail: !state.showDetail })),
    changeCursorState:        () => set( state => ({ cursorStyle: !state.cursorStyle })),
    changeCursorStateDetail:  () => set( state => ({ cursorStyleDetail: !state.cursorStyleDetail })),
    changeStateLoading:       () => set( state => ({ loading: !state.showMenu })),
    changeMenuOption:         (option) => set({menuOption:option}),


})) 