import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cocktailLists, mockTailLists } from "../../constants";

const Cocktails = () => {
  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    const xDistance = isMobile ? 50 : 120;
    const yDistance = isMobile ? 50 : 180;

    const parallaxTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 70%",
        scrub: true,
      },
    });
    
    parallaxTl.from("#c-left-leaf", { x: -xDistance, y: yDistance });
    parallaxTl.from("#c-right-leaf", { x: xDistance, y: yDistance });

    
  });
  return (
    <>
      <section id="cocktails" className="noisy ">
        

        <div className="list">
          <div className="popular">
            <h2>Most popular cocktails:</h2>

            <ul>
              {cocktailLists.map((drink) => (
                <li key={drink.name}>
                  <div className="md:me-28">
                    <h3>{drink.name}</h3>
                    <p>
                      {drink.country} | {drink.detail}
                    </p>
                  </div>
                  <span>-{drink.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="popular">
            <h2>Most loved mocktails:</h2>

            <ul>
              {mockTailLists.map((drink) => (
                <li key={drink.name}>
                  <div className="md:me-28">
                    <h3>{drink.name}</h3>
                    <p>
                      {drink.country} | {drink.detail}
                    </p>
                  </div>
                  <span>-{drink.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <img src="./images/cocktail-left-leaf.png"  alt="leaf-img" id="c-left-leaf" />
        <img src="./images/cocktail-right-leaf.png"  alt="leaf-img" id="c-right-leaf" />
      </section>
    </>
  );
};

export default Cocktails;
