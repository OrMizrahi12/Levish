import Carousel from 'react-bootstrap/Carousel';
import '../../css/Carousels/ShowGallery.css'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import imgTest from '../../Images/Qside.png'
import instegramImg from '../../Images/instegramImg.png'
const ShowGallery = ({ arr }) =>
    <Carousel className='wrapGallery mx-auto' indicators={false}>
        {arr.map(img =>
            <Carousel.Item >
                <img
                    key={img}
                    className="w-100 gallery"
                    src={img}
                />
                <div className='recomendedBlock' >
                    <section className='recomendedTxtDesc'>
                        {/* <FaQuoteLeft style={{ float: "left", margin: 10 }} /><br /> */}
                        <br />
                        <img src={instegramImg} className="instegramImg" />
                        <p className='instegramAcountName'>orMizrahi_10</p>
                        <p className='recomendedTxtDesc'>
                        פחדתי מאוד לעשות נמשים כי חשבתי שזה כמו קעקוע ויחליף צבעים.
נועה הסבירה לי את כל התהליך והייתה סבלנית ומקצועית מאוד, הטיפול לא כאב לי בכלל והתוצאה טבעית ברמות, מאחת שכל יום ציירה נמשים וניסתה שיצאו אותו הדבר כל פעם חסך לי המון זמן בבוקר .
ממליצה בחום ❤
                        </p>

                        {/* <br />   
                        <FaQuoteRight style={{ float: "right", marginRight: 5 }} />
                        <br /> */}
                    </section>
 
                </div>
            </Carousel.Item>
        )}
    </Carousel>

export default ShowGallery

