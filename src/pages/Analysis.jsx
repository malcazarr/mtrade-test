import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import CardsGraph from '../components/CardsGraph';
import SlideTable from '../components/SlideTable';
import { getData, getDataFromStore, storeData } from '../redux/actions/asyncDataActions';
import { getMetaData, getMetaDataFromStore, storeMetaData } from '../redux/actions/asyncMetaDataActions';

function Analisys({
    data, 
    getData, 
    storeData ,
    getDataFromStore,
    metaData,
    getMetaData,
    storeMetaData,
    getMetaDataFromStore

}){
    const [slidebarRight,setSlidebarRight]= useState({status: false, owner: null})
    const [dataTable, setDataTable] = useState(null)

    const requestData = () =>{
        getData();
    }
    const requestMetadata =() =>{
        getMetaData();
    }
    const storeRequestedData = () =>{
        storeData();
    }

    const storeRequestMetaData = () =>{
        storeMetaData();
    }

    
    const getFromLocalstorage = () =>{
        getDataFromStore();
    }

    const getMetaFromLocalstorage = () =>{
        getMetaDataFromStore();
    }
    useEffect(() =>{
        // Uncomment this section for checking work with con local data.
        // may be will be failed, because first is necessary save the data manually with the bottons.
        // You can validate the failed messages, using this part, without click on button to storage 
        // console.log("GET FROM STORAGE")
        // getDataFromStore()
        // getMetaDataFromStore()

    },[data.stored,metaData.stored])
    useEffect(() =>{
        // This section get data automatically, you can check the console for watch the interaction 
        console.log("GET FROM API")
        getData()
        getMetaData()
    },[data.saved, metaData.saved])

    return (
        <div className="text-white">
            <div className="content">
                <div className="content-title">
                    <span className="title-page title-workspace3">ANALYSIS</span>
                    {/* 
                    *** Uncomment this section for check the funcions for get data from API and Localstorage ***
                    <button onClick={storeRequestedData}>Store Data</button>
                    <button onClick={storeRequestMetaData}>Store Metadata</button>
                    
                    <button onClick={requestData}>Call Data</button>
                    <button onClick={requestMetadata}>Call Metadata</button>
                    <button onClick={getFromLocalstorage}>Get data from storage</button>
                    <button onClick={getMetaFromLocalstorage}>Get Meta from storage</button> */}
                </div>
                <div className="row">
                    <div className={slidebarRight.status? "col-10": "col-12"}>
                        <div className="card">
                            <div className="card-header">
                                Gasto Federal
                            </div>
                            <div className="card-body">
                                {   
                                   data.data && metaData.data && data.data.map(series =>{
                                       let metaToData = {}
                                       metaData.data.forEach(metadataItem =>{
                                            if(metadataItem.idSerie === series.idSerie){
                                                metaToData = metadataItem
                                            }
                                       })
                                        return (
                                            <CardsGraph
                                                key={series.idSerie}
                                                slidebarRight ={slidebarRight}
                                                activeSlidebarRight={(dataToTable, dataOwner) =>{
                                                        setDataTable(dataToTable)
                                                        setSlidebarRight(dataOwner)
                                                    }}
                                                data={series}
                                                metadata = {metaToData}
                                            ></CardsGraph>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={slidebarRight.status ? "col-2 p-0 slidebar-right-active": "col-2 p-0 slidebar-right-deactive"}>
                        <SlideTable 
                            slidebarRight={slidebarRight}
                            activeSlidebarRight={() =>{setSlidebarRight({status: false, owner:null})}}
                            data = {dataTable}
                        ></SlideTable>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getData :() => {getData() (dispatch)},
        storeData : () => {storeData() (dispatch)},
        getDataFromStore : () =>  {getDataFromStore() (dispatch)},
        getMetaData : () => { getMetaData() (dispatch) },
        storeMetaData : () => { storeMetaData() (dispatch) },
        getMetaDataFromStore: () => { getMetaDataFromStore() (dispatch) } 
    }
}
const mapStateToProps = state => {
    return{
        data: state.dataReducer,
        metaData : state.metaDataReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Analisys)