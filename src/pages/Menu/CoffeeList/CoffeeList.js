import React, { Component } from "react";
import Nav from "../../../component/Nav/Nav";
import Coffee from "./Coffee/Coffee";
import "./CoffeeList.scss";

class CoffeeList extends Component {
  render() {
    const { products } = this.props.coffee;
    if (!products) return <></>;

    return (
      <>
        <Nav />
        <div className='CoffeeList'>
          <div className='topImage'>
            <img />
            <div>
              <span className='title'>COFFEE</span>
              <br />
              <span>한잔의 완벽한 커피</span>
            </div>
          </div>
          <div className='category'>
            <div className='all'>
              <div>전체</div>
              <div>Coffee</div>
              <div>Latte</div>
              <div>Espresso</div>
              <div>Cold Brew</div>
              <div>Single Origin</div>
            </div>
          </div>
          <div className='menuConatinaer'>
            <div className='oneContainer'>
              {products.map((item, index) => {
                return (
                  <Coffee
                    key={index}
                    korName={item.name_kor}
                    engName={item.name_eng}
                    img={item.image}
                    isNew={item.is_new}
                    isBest={item.is_best}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CoffeeList;
