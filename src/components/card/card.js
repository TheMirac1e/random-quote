import { Component } from "react";
import axios from "axios";

import './card.scss'

class Card extends Component {
  constructor(state) {
    super(state);
    this.state = {
      data: null,

    }
  }

  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => {
          if(response.status === 200) {
            this.setState({
              data: response.data.quotes
            })
          }
        })
        .catch(error => {
          console.log(error);
        })
  }

  setRandomQuote(data) {
    let randomQuote = [ Math.floor(Math.random() * data.length) ];
  }


  render() {
   const { data } = this.state;
   console.log(data[0])

    return (
      <article className={'card-item'}>
        <div className={"card-item__wrapper"}>
          <div className={"card-item__quote-wrap"}>
            <h2 className={'card-item__quote'}><i className="fa fa-quote-left"> </i></h2>
            <span className={'card-item__author'}><span>- </span>Kevin Kruse</span>
          </div>
          <div className="card-item__info">
            <div className="card-item__social">
              <a className={'card-item__social-item'} href="https://twitter.com" target={"_blank"} rel='noreferrer'><i
                  className="fa fa-twitter"></i></a>
              <a className={'card-item__social-item'} href="https://www.facebook.com/" target={"_blank"}
                 rel='noreferrer'><i className="fa fa-facebook"></i></a>
            </div>
            <button className={'card-item__random-quote'} type={"button"} onClick={() => this.setRandomQuote(data)}>New
              quote
            </button>
          </div>
        </div>
      </article>
    )
  }
}

export default Card;
