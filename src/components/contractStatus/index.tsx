import { useAccount } from 'wagmi'
import { useEffect, useState, useMemo } from "react";

export const ConnectStatus = () => {
    const { address,isConnected } = useAccount()

    const rslist: any [] = [
        {id: 1, label: 'whitelist', status: false},
        {id: 2, label: 'public sale', status: false},
        {id: 3, label: 'end', status: false}
    ]
    const [list,setList] = useState<any>([])


    useEffect(()=>{
        setList(rslist)
    },[])

    return (<div className="">
          {
            list.map((item) => {
               return <div key={item.id}>
                  <span className="item">{item.id}</span>
                  <span>{item.label}</span>
               </div>
            })
          }
        </div>)
};