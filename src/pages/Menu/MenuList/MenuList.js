import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "../../../component/Nav/Nav";
import MenuCard from "./MenuCard/MenuCard";
import MenuFooter from "../MenuFooter/MenuFooter";
import { menuAll } from "./menuAll";
import "./MenuList.scss";

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theOne: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { category, id } = this.props.match.params;
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(`http://10.58.0.33:8000/menu/${category}/${id}`)
        .then((data) => data.json())
        .then((data) => this.setState({ theOne: data }));
    }
  }

  render() {
    const { products, category } = this.props;
    const { theOne } = this.state;
    if (!products) return <></>;

    return (
      <>
        <Nav />
        <div className='MenuList'>
          <div className='topImage'>
            <img src={menuAll[category].banner} />
            <div>
              <span className='title'>{menuAll[category].title}</span>
              <br />
              <span>{menuAll[category].description}</span>
            </div>
          </div>
          <div className='category'>
            <div className='all'>
              {menuAll[category].categories.map((cat, index) => {
                return (
                  <Link to={`/menu/${category}/${index}`} key={index}>
                    <div id={index}>{cat}</div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className='menuConatinaer'>
            <div className='oneContainer'>
              {theOne.products === undefined
                ? products.map((item, index) => {
                    return (
                      <Link
                        to={`/menu/detail?product=${item.name_eng}`}
                        key={index}
                      >
                        <MenuCard
                          key={index}
                          korName={item.name_kor}
                          engName={item.name_eng}
                          img={item.image}
                          category={index}
                          isNew={item.is_new}
                          isBest={item.is_best}
                        />
                      </Link>
                    );
                  })
                : theOne.products.map((item, index) => {
                    return (
                      <Link
                        to={`/menu/detail?product=${item.name_eng}`}
                        key={index}
                      >
                        <MenuCard
                          key={index}
                          korName={item.name_kor}
                          engName={item.name_eng}
                          img={item.image}
                          category={index}
                          isNew={item.is_new}
                          isBest={item.is_best}
                        />
                      </Link>
                    );
                  })}
            </div>
          </div>
        </div>
        <MenuFooter />
      </>
    );
  }
}

export default withRouter(MenuList);
