import React from "react";
import "./style/home.css"; // import the CSS file with styles for the caption
import front from './img/front.png';
import back from './img/back.png';
import { ReactDOM } from "react";
import Media from "react-media";

function Home() {
  return (
    <>
      <div>
        <section className="parallax">
<img src={back} alt="" id="back1" />
<h2 id="text">YUGMAK</h2>
<img src={front} alt="" id="front1"/>

  </section>
  </div>
    </>
  );
}
window.addEventListener('DOMContentLoaded',()=>{
  window.addEventListener('scroll',()=>{

    let value=window.scrollY;
    document.getElementById('text').style.marginTop=value*1+"px";
    // document.getElementById('back1').style.top=value*(1.5)+"px";
    document.getElementById('back1').style.top=value*(0.5)+"px";
    }
  )
})


export default Home;
