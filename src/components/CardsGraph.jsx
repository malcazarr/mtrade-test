import { Collapse } from "react-bootstrap";
import { useState } from "react";
import { Charts } from "./Charts";
import { useEffect } from "react";


export default function CardsGraph({slidebarRight,activeSlidebarRight}){
    console.log(slidebarRight)
    const [accordion, setAccordion] = useState(false)
    const [collapseGraphics, setCollapseGraphics] = useState(false)

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
        activeSlidebarRight();
    }

    return (
        <div>
            <div className="header-card">
                <div className="header-card-collapse d-flex justify-content-between">
                    <div className="Roboto-mono font-14 d-flex justify-content-start">
                        <div className="main-card">Gasto de capital</div>
                        <div className="main-card"><li>69,144.4</li></div>
                        <div className="main-card">01/02/2021</div>
                        <div className="main-card">Graph</div>
                        <div 
                            className={!collapseGraphics && !accordion ? "main-card main-card-button": collapseGraphics ? "main-card main-card-button bg-white":"main-card main-card-button"} 
                            onClick={actionCollapseGraphics}
                        >
                            <i className={collapseGraphics ? "fa fa-signal text-black":"fa fa-signal text-white"}></i>
                        </div>
                        <div 
                            className={slidebarRight ? "main-card main-card-button bg-white": "main-card main-card-button" } 
                            onClick={actionSlidebarRight}
                        >
                            <i className={slidebarRight ? "fa fa-list text-black":"fa fa-list" }></i>
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
                            <p className="Roboto-mono font-12">SG3690</p>
                        </div>
                        <div className="col border-right">
                            <p className="Opensans-semibold font-12">Título</p>
                            <p className="Roboto-mono font-12">Materiales y suministros</p>
                        </div>
                        <div className="col border-right">
                            <p className="Opensans-semibold font-12">Última Fecha</p>
                            <p className="Roboto-mono font-12">10/10/2020</p>
                        </div>
                        <div className="col border-right">
                            <p className="Opensans-semibold font-12">Último Valor</p>
                            <p className="Roboto-mono font-12">$ 4,000.00</p>
                        </div>
                        <div className="col border-right">
                            <p className="Opensans-semibold font-12">Unidad</p>
                            <p className="Roboto-mono font-12">Millones de Pesos</p>
                        </div>
                        <div className="col border-right">
                            <p className="Opensans-semibold font-12">Cambio Porcentual (%)</p>
                            <p className="Roboto-mono font-12">+93.9%</p>
                        </div>
                        <div className="col border-right">
                            <p className="Opensans-semibold font-12">Fecha Inicio</p>
                            <p className="Roboto-mono font-12">10/10/2020</p>
                        </div>
                        <div className="col border-right">
                            <p className="Opensans-semibold font-12">Fecha Fin</p>
                            <p className="Roboto-mono font-12">10/10/2020</p>
                        </div>
                        <div className="col">
                            <p className="Opensans-semibold font-12">Periocidad</p>
                            <p className="Roboto-mono font-12">Mensual</p>
                        </div>
                    </div>
                    <div>
                        <Collapse in={collapseGraphics}>
                            <div>
                            <hr />
                                <Charts></Charts>
                            </div>
                        </Collapse>
                    </div>
                </div>

            </Collapse>
        </div>
    )
}