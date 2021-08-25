
const SlideTable = ({slidebarRight, activeSlidebarRight}) =>{
    const activeSlidebar = ()=>{
        activeSlidebarRight();
    }
    return (
        <div className={slidebarRight? "slidebar-table active card": "slidebar-table card"}>
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
                            <tr>
                                <td className="Roboto-mono font-12 text-center">10/10/2021</td>
                                <td className="Roboto-mono font-12">$ 5,000.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default SlideTable;