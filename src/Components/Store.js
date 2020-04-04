import React, {useState} from "react";
import axios from "axios";


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

    // const World =  async () => {
    //     const rec = await axios({
    //         "method":"GET",
    //         "url":"https://corona.lmao.ninja/countries",
    //         "params":{
    //         "sort":"cases"
    //         }
    //         })
    //     .then((response)=>{
    //         const Timeline = response.data;
    //         setWorld(Timeline);
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     });
    //   }

    //   const WTotal = async () => {
    //     const rec = await axios({
    //         "method":"GET",
    //         "url":"https://corona.lmao.ninja/all"
    //         })
    //     .then((response)=>{
    //         const Timeline = response.data;
    //         setWorldTotal(Timeline);
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    // });
    // }

    // const ITotal = async () => {
    //     const rec = await axios({
    //         "method":"GET",
    //         "url":"https://corona.lmao.ninja/countries/India"
    //         })
    //         .then((response)=>{
    //             const Timeline = response.data;
    //             return Timeline;
    //         })
    //         .catch((error)=>{
    //             console.log(error)
    //         });
    //         setIndTotal(rec);
    // }

    // const Hist = async () => {
    //     const rec = await axios({
    //     "method": "get",
    //     "url": "https://corona.lmao.ninja/v2/historical"})
    //     .then((response)=>{
    //         const Timeline = response.data;
    //         return Timeline;
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //   });
    //   setHistory(rec)
    //   }
    
    //   const India = async () => {
    //     const rec = await axios({
    //         "method":"GET",
    //         "url":"https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise",
    //         })
    //     .then((response)=>{
    //         const Timeline = response.data.data.statewise;
    //         return Timeline;
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //   });
    //   setInd(rec);
    //   } 
    
    // India();
    // WTotal();
    // Hist();
    // ITotal();
    // World();    
    
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