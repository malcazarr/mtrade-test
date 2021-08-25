import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Notifier = () =>{
    const typeNotify = {
        info: "text-white",
        danger: "text-danger",
        warning: "text-warning"
    }
    const stateError = useSelector(state => state.dataReducer)
    const [active, setActive] = useState(false)
    const [ignored, setIgnored] = useState(false)
    let [errorsData, setErrorsData] = useState([]); 
    const close = () =>{
        setErrorsData([])
        setActive(false);
        setIgnored(true)

    }
    useEffect(() =>{
        if(stateError.error && errorsData.length < 10  && !ignored){
            console.warn(stateError.error)
            let errorArray = errorsData
            errorArray.push(stateError.error)
            setErrorsData(errorArray)
            setActive(true)
        }
    })

    
    return( 
        <div>
            <div className={active ? "notifier-content active" : "notifier-content deactive"}>
                <div>
                    { errorsData.map((errorMessage, index) =>{
                            return (
                                <div key={index}>
                                    <div className={typeNotify.warning + " notifier-type"} >Warning</div>
                                    <div className={typeNotify.danger + " notifier-message"}>[{index + 1}]{errorMessage.message}</div>
                                </div>
                            )
                        })
                    }
                    <div className="notifier-close" onClick={close}>Close X</div>
                </div>
            </div>
        </div>
    )
}

export default Notifier;