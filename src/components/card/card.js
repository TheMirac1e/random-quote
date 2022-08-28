import { Component } from "react";
import axios from "axios";

import './card.scss'

class Card extends Component {
  constructor(state) {
    super(state);
    this.state = {
      data: null,
      randomQuote: {
        author: "Oprah Winfrey",
        quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough."
      },
      randomColor: '#982394'
    }
  }

  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => {
          if(response.status === 200) {
            this.setState({
              data: response.data
            })
          }
        })
        .catch(error => {
          console.log(error);
        })
  }

  getRandomQuote(data) {
    return data.quotes[
        Math.floor(Math.random() * data.quotes.length)
      ]
  }

  setRandomQuote(data) {
    this.setState({
      randomQuote: this.getRandomQuote(data)
    })
  }

  setRandomColor() {
    let colors = [
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857'
    ];

    this.setState({
      randomColor: colors[Math.floor(Math.random() * colors.length)]
    })
  }


  render() {
   const { data, randomQuote, randomColor } = this.state;
   const tweetQuote = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"' + randomQuote.quote + '" ' + randomQuote.author)}`;
   const inlineColorStyle = {
     backgroundColor: randomColor
   }
   document.querySelector('body').style.cssText = `color: ${randomColor}; background-color: ${randomColor};`


    return (
      <article className={'card-item'} id="quote-box">
        <div className={'card-item__wrapper'}>
          <div className={'card-item__quote-wrap'}>
            <h2 className={'card-item__quote'} id="text"><i className="fa fa-quote-left"> </i>{randomQuote.quote}</h2>
            <span className={'card-item__author'} id="author"><span>- </span>{randomQuote.author}</span>
          </div>
          <div className={'card-item__info'}>
            <div className={'card-item__social'}>
              <a className={'card-item__social-item'} style={inlineColorStyle} id="tweet-quote" href={tweetQuote} target={"_blank"} rel='noreferrer' ><i
                  className="fa fa-twitter"></i></a>
              <a className={'card-item__social-item'} style={inlineColorStyle} href="https://www.facebook.com/" target={"_blank"}
                 rel='noreferrer'><i className="fa fa-facebook"></i></a>
            </div>
            <button className={'card-item__random-quote'} style={inlineColorStyle} id="new-quote" type={"button"} onClick={() => {
              this.setRandomQuote(data);
              this.setRandomColor()
            }}>New
              quote
            </button>
          </div>
        </div>
      </article>
    )
  }
}

export default Card;
