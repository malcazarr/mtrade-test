
const SlideTable = ({data,slidebarRight, activeSlidebarRight}) =>{
    const activeSlidebar = ()=>{
        activeSlidebarRight();
    }
    return (
        <div className={slidebarRight.status? "slidebar-table active card": "slider slidebar-table card"}>
            <div className="card-header Roboto-mono font-14" onClick={activeSlidebar}>
                <i className="fa fa-list" /> Gasto total
            </div>
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table text-white">
                        <thead className="header-card-collapse text-center">
                            <tr>
                                <th className="Opensans-semibold font-14">Fecha</th>
                                <th className="Opensans-semibold font-14">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((item, index) =>{
                                    return(
                                        <tr key={index}>
                                            <td className="Roboto-mono font-12 text-center">{item.fecha}</td>
                                            <td className="Roboto-mono font-12">{item.dato}</td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default SlideTable;