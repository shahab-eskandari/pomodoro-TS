import {ReactNode, useState,useEffect} from 'react'; 
import {initialConfig, configContext} from './configContext'; 

type ConfigContextWrapperProps = {
    children: ReactNode
}

export default function ConfigContextWrapper (props:ConfigContextWrapperProps){
    
    const [config, setConfig] = useState(initialConfig);
    
    useEffect(()=>{
        setConfig(config)
    },[config])


    return (
        <configContext.Provider value={{config: config, setConfig: setConfig}}>
            {props.children}
        </configContext.Provider>
    )
}