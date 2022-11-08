import React from 'react'
import "../styles/Store.css";
export default function Mapping(prop) {
  return (
    <div>
        <h1 className="women-header">{prop.header}</h1>
      <div className="women-wrapper">
      {prop.item.length &&
        prop.item.map(({ img, amount, name }) => {

          return ( <div className="inner-women">
              <div className="women-img">
                <img src={img} alt="clothss" />{" "}
              </div>
              <div className="women-caption">
                <div>
                  <div className="women-text">
                    {" "}
                    <span>{name}</span>
                  </div>
                  <div className="women-text">
                    {" "}
                    <span>{amount}</span>
                  </div>
                </div>
                <div>
                  <button>-</button>
                  <button>+</button>
                  </div>
              </div>
            </div>
          
          );
        })}
    </div>
 
    </div>
  )
}
