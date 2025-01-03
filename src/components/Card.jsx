import './Card.css'
import { useRef } from 'react';
function Card() {
    const cardref=useRef(null)

    const changeimg = (photos)=>{
        cardref.current.src=photos
     }

    return (
        <>
           <div className="card">
  <img ref={cardref}  src="https://m.media-amazon.com/images/I/71lHkDkKYgL._AC_UY1100_.jpg" alt="Card Image" />
  <div className="card-content">
    <div className="card-title">Black-shirt</div>
    <div className="card-description">
      This is a simple card with an image, title, description, and buttons.
    </div>
    <div className="button-container">
      <button  onClick={()=>changeimg('https://assets.ajio.com/medias/sys_master/root/20230624/Pv4v/64962effa9b42d15c9d54300/-473Wx593H-465144958-black-MODEL3.jpg')} className="btn">Women</button>
      <button  onClick={()=>changeimg('https://m.media-amazon.com/images/I/71lHkDkKYgL._AC_UY1100_.jpg')} className="btn">men</button>
     <button onClick={()=>changeimg('https://rukminim2.flixcart.com/image/828/828/l3vxbbk0/shopsy-shirt/s/l/k/13-14-years-solidkids-black-4jstar-original-imagewrhqdx47qmp.jpeg?q=60&crop=false')} className="btn">kids</button>
    </div>
  </div>
</div>

        </>
    )
}
export default Card