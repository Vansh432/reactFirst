import homeImage from './homeImage.png'
import flipKart from './flipkart-logo-39903.png'
import amazon from './amazon.png'
function Home(){

    return <>
      <div id="container">
          <div className="details" >
               <h1>
                YOUR FEET DESERVE THE BEST
               </h1>
               <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ea quas odio.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium expedita dolores ab, aliquid, perspiciatis totam quibusdam eveniet veritatis corporis ullam quos maiores beatae!
               </p>
               <div className="buttons">
                <a href="https://www.instagram.com/">Shop Now</a>
                <a href="https://www.instagram.com/">Category</a>
               </div>
               <div className="extraDetails">
                <h4>Also Available On</h4>
                 <img src={flipKart} alt="loading image" />
                 <img src={amazon} alt="loading image" />
               </div>
          </div>
          <div className="homeImage">
             <div className="image">
                <img id='nikeShoes' src={homeImage} alt="loading image" />
             </div>
          </div>
      </div>
    </>
}

export default Home;