import { Collapse } from "react-bootstrap";
import { useState } from "react";
import { Charts } from "./Charts";
import { Names } from "../redux/services/mockup";
import { useEffect } from "react";


export default function CardsGraph({data,metadata,slidebarRight,activeSlidebarRight}){

    const [accordion, setAccordion] = useState(false)
    const [collapseGraphics, setCollapseGraphics] = useState(false)
    const [localSlidebarRight, setLocalSliderRight] =useState(false)
    const actionAccordion = () =>{
        if (!accordion){
            setCollapseGraphics(false)
        }
        setAccordion(!accordion)
    }
    const actionCollapseGraphics = () =>{
        setAccordion(true)
        setCollapseGraphics(!collapseGraphics)
    }
    const actionSlidebarRight =()=>{
        if (slidebarRight.status === false){
            activeSlidebarRight(data.datos, {status: true, owner: data.idSerie});
            setLocalSliderRight(!localSlidebarRight)
        }else if(slidebarRight.owner === data.idSerie){
            activeSlidebarRight(null, {status: false, owner: null})
            setLocalSliderRight(false)
        }else{
            activeSlidebarRight(null,{status: false, owner: null})
        }
    }

    useEffect(() =>{
        if (!slidebarRight.status && slidebarRight.owner === data.idSerie){
            setLocalSliderRight(false)
        }
        if(!slidebarRight.status){
            setLocalSliderRight(false)
        }
    })

    return (
        <div>
            <div className="header-card">
                <div className="header-card-collapse d-flex justify-content-between">
                    <div className="Roboto-mono font-14 d-flex justify-content-start">
                        <div className="main-card">{Names[data.idSerie]}</div>
                        <div className="main-card"><li>{data.datos[data.datos.length - 1].dato}</li></div>
                        <div className="main-card">{data.datos[data.datos.length - 1].fecha}</div>
                        <div className="main-card">Graph</div>
                        <div 
                            className={!collapseGraphics && !accordion ? "main-card main-card-button": collapseGraphics ? "main-card main-card-button bg-white":"main-card main-card-button"} 
                            onClick={actionCollapseGraphics}
                        >
                            <i className={collapseGraphics ? "fa fa-signal text-black":"fa fa-signal text-white"}></i>
                        </div>
                        <div 
                            className={localSlidebarRight ? "main-card main-card-button bg-white": "main-card main-card-button" } 
                            onClick={actionSlidebarRight}
                        >
                            <i className={localSlidebarRight ? "fa fa-list text-black":"fa fa-list" }></i>
                            </div>
                    </div>
                    <div className="icons-card d-flex justify-content-end">
                        <div className="main-icon">
                            <i className="fa fa-arrows"></i>
                        </div>
                        <div className="main-icon" onClick={actionAccordion}>
                            <i className={!accordion ? "fa fa-chevron-left": "fa fa-chevron-down"}></i>
                        </div>
                    </div>
                </div>
            </div>
            <Collapse in={accordion}>
                <div className="body-card" >
                    <div className="row pt-2">
                        <div className="col border-right">
                            <p className="Opensans-semibold font-12">SerieID</p>
                            <p className="Roboto-mono font-12">{data.idSerie}</p>
                        </div>
                        <div className="col border-right">
                            <p className="Opensans-semibold font-12">Título</p>
                            <p className="Roboto-mono font-12">{Names[data.idSerie]}</p>
                        </div>
                        <div className="col border-right">
                            <p className="Opensans-semibold font-12">Última Fecha</p>
                            <p className="Roboto-mono font-12">{data.datos[data.datos.length - 1].fecha}</p>
                        </div>
                        <div className="col border-right">
                            <p className="Opensans-semibold font-12">Último Valor</p>
                            <p className="Roboto-mono font-12">{data.datos[data.datos.length - 1].dato}</p>
                        </div>
                        <div className="col border-right">
                            <p className="Opensans-semibold font-12">Unidad</p>
                            <p className="Roboto-mono font-12">{metadata.unidad}</p>
                        </div>
                        <div className="col border-right">
                            <p className="Opensans-semibold font-12">Cambio Porcentual (%)</p>
                            <p className="Roboto-mono font-12">{100*(parseFloat(data.datos[data.datos.length - 1].dato.replace(',','')) - parseFloat(data.datos[data.datos.length - 2].dato.replace(',','')))/parseFloat(data.datos[data.datos.length - 2].dato.replace(',',''))}</p>
                        </div>
                        <div className="col border-right">
                            <p className="Opensans-semibold font-12">Fecha Inicio</p>
                            <p className="Roboto-mono font-12">{metadata.fechaInicio}</p>
                        </div>
                        <div className="col border-right">
                            <p className="Opensans-semibold font-12">Fecha Fin</p>
                            <p className="Roboto-mono font-12">{metadata.fechaFin}</p>
                        </div>
                        <div className="col">
                            <p className="Opensans-semibold font-12">Periodicidad</p>
                            <p className="Roboto-mono font-12">{metadata.periodicidad}</p>
                        </div>
                    </div>
                    <div>
                        <Collapse in={collapseGraphics}>
                            <div>
                            <hr />
                                <Charts dataToGraph={data.datos}></Charts>
                            </div>
                        </Collapse>
                    </div>
                </div>

            </Collapse>
        </div>
    )
}