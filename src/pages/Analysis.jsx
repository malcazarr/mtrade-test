import React from 'react';
import { useState } from 'react';
import CardsGraph from '../components/CardsGraph';
import SlideTable from '../components/SlideTable';
export default function Analisys(){


    const [slidebarRight,setSlidebarRight]= useState(false)

    return (
        <div className="text-white">
            <div className="content">
                <div className="content-title">
                    <span className="title-page title-workspace3">ANALYSIS</span>
                </div>
                <div className="row">
                    <div className={slidebarRight? "col-10": "col-12"}>
                        <div className="card">
                            <div className="card-header">
                                Gasto Federal
                            </div>
                            <div className="card-body">
                                <CardsGraph 
                                    slidebarRight={slidebarRight} 
                                    activeSlidebarRight={() =>{setSlidebarRight(!slidebarRight)}}
                                ></CardsGraph>
                            </div>
                        </div>
                    </div>
                    <div className={slidebarRight ? "col-2 p-0 slidebar-right-active": "col-2 p-0 slidebar-right-deactive"}>
                        <SlideTable 
                            slidebarRight={slidebarRight}
                            activeSlidebarRight={() =>{setSlidebarRight(!slidebarRight)}}
                        ></SlideTable>
                    </div>
                </div>
            </div>
        </div>
    )
}