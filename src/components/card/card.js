import { Component } from "react";

import './card.scss'

class Card extends Component{
  render() {
    return (
      <article className={'card-item'}>
        <div className={"card-item__wrapper"}>
          <div className={"card-item__quote-wrap"}>
            <h2 className={'card-item__quote'}><i className="fa fa-quote-left"> </i>Life isn’t about getting and having, it’s about giving and being.</h2>
            <span className={'card-item__author'}><span>- </span>Kevin Kruse</span>
          </div>
          <div className="card-item__info">
            <div className="card-item__social">
              <a className={'card-item__social-item'} href="https://twitter.com" target={"_blank"} rel='noreferrer'><i className="fa fa-twitter"></i></a>
              <a className={'card-item__social-item'} href="https://www.facebook.com/" target={"_blank"} rel='noreferrer'><i className="fa fa-facebook"></i></a>
            </div>
            <button className={'card-item__random-quote'} type={"button"}>New quote</button>
          </div>
        </div>
      </article>
    )
  }
}

export default Card;
