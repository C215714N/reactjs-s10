// Dependencias de React
import { createContext, useContext, useState } from "react";

// Modelo de Datos
import result from '../data/result.json';
import settings from '../data/params.json';

// Creacion del Contexto
const ParamContext = createContext();
const ResultContext = createContext();
const ActionContext = createContext();

// Exportacion de Metodos
export const useParamContext = () => useContext(ParamContext);
export const useResultContext = () => useContext(ResultContext);
export const useActionContext = () => useContext(ActionContext);

// Componente Reductor
function ContextAPI(props){
    // Estados de la Aplicacion
    const [params, setParams] = useState(settings);
    const [results, setResults] = useState(result);

    async function handleState({action, value}){
        
        const {SERVER, API_KEY, LIMIT, OFFSET, LANG, RATE} = params;
        const url = `${SERVER}search?api_key=${API_KEY}&q=${value}&limit=${LIMIT}&offset=${OFFSET}&rating=${RATE}&lang=${LANG}`

        switch (action){
            case "SEARCH":
                let data = await fetch(url);
                data = await data.json();
                setResults(data);
            break;
            case "NEXT":
                setParams((params) => ({
                    ...params, 
                    offset: offset + limit 
                }))
            break;
            case "PREV":
                setParams((params) => ({
                    ...params, 
                    offset: offset - limit
                }))
            break;
            case "PAGE":
                setParams((params) => ({
                    ...params, 
                    offset: limit * value
                }))
            break;
            default: 
                setParams(params);
                setResults(results);
        }
        console.log(params, results);
    }

    return(
        <ParamContext.Provider value={ params }>
        <ActionContext.Provider value = { handleState }>
        <ResultContext.Provider value={ results }>
            { props.children }
        </ResultContext.Provider>
        </ActionContext.Provider>
        </ParamContext.Provider>
    )
}

export default ContextAPI;