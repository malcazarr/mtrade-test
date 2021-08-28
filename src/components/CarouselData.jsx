import { Carousel } from "react-bootstrap"
import { Names } from "../redux/services/mockup"
export default function CarouselData ({data, metadata}) {
    return (
        <Carousel indicators={false} touch={false}>
            <Carousel.Item>
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
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="row pt-2">
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
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="row pt-2">
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
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="row pt-2">
                    <div className="col border-right">
                        <p className="Opensans-semibold font-12">Fecha Fin</p>
                        <p className="Roboto-mono font-12">{metadata.fechaFin}</p>
                    </div>
                    <div className="col">
                        <p className="Opensans-semibold font-12">Periodicidad</p>
                        <p className="Roboto-mono font-12">{metadata.periodicidad}</p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}