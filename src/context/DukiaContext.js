import { createContext, useContext } from "react";
const DukiaContext = createContext({});
export const DukiaProvider = ({children}) => {
    return (
        <DukiaContext.Provider value={{}}>
            {children}
        </DukiaContext.Provider>
    )
}
export const useDukia = ()=>{
    return useContext(DukiaContext);
}