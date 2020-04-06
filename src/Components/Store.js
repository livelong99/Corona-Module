import React, {useState} from "react";
export const IndiaContext = React.createContext([]);
export const IndiaFullContext = React.createContext([]);
export const WorldContext = React.createContext([]);
export const WorldFullContext = React.createContext([]);
export const HistoryContext = React.createContext([]);

const Store = ({children}) => {
    const [ind, setInd] = useState([]);
    
       
    
    const [indTotal, setIndTotal] = useState([]);
    const [world, setWorld] = useState([]);
    const [wTotal, setWorldTotal] = useState([]);
    const [history, setHistory] = useState([]);

    return(
        <WorldContext.Provider value={[world, setWorld]}>
            <WorldFullContext.Provider value={[wTotal, setWorldTotal]}>
                <HistoryContext.Provider value={[history, setHistory]}>
                    <IndiaContext.Provider value={[ind, setInd]}>
                        <IndiaFullContext.Provider value={[indTotal, setIndTotal]}>
                            {children}
                        </IndiaFullContext.Provider>                        
                    </IndiaContext.Provider>
                </HistoryContext.Provider>
            </WorldFullContext.Provider>
        </WorldContext.Provider>
    )
} 

export default Store;