import Carousel from 'react-bootstrap/Carousel';
import '../../css/Carousels/ShowGallery.css'


const ShowGallery = ({ arr }) => <>
    <Carousel className='wrapGallery mx-auto' indicators={false}>
        {arr.map(element =>
            <Carousel.Item >
                <img
                    key={element.img}
                    className="w-100 gallery"
                    src={element.img}
                />
                <div className='recomendedBlock' >
                    <section className='recomendedTxtDesc'>
                        <br />
                        <p className='recomendedTxtDesc'>
                        {element.recomended}
                        </p>
                    </section>
                    <span>{element.name}</span>
                </div>
                
            </Carousel.Item>
        )}
    </Carousel>
    </>

export default ShowGallery

