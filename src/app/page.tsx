"use client"
import Image from "next/image";
import "./page.module.css";
import selfie from "../../public/selfie.png";
import React, { useState, useEffect } from "react";
import { Permanent_Marker} from 'next/font/google'
import { Prata } from "next/font/google";
import { Proza_Libre } from "next/font/google";




const PermanentMarker = Permanent_Marker({ subsets: ['latin'], weight: ['400'] })
const Prataa = Prata({ subsets: ['latin'], weight: ['400'] })
const ProzaLibre = Proza_Libre({ subsets: ['latin'], weight: ['400'] })

let object = [
  {
    name:"APC Portal",
    type: "Entertainment Application", 
    description: "E-commerce website",
    link:"https://portal.anjoupopcorner.com/#/"
  },
  {
    name:"Hangman JS",
    type: "Game",
    description: "Game of Hangman",
    link:"https://hangman-js-sepia.vercel.app/"
  },
  {
    name:"Rock, paper, scisor ",
    type: "Game",
    description: "Game of rock, paper and scisor",
    link:"https://rock-paper-cisor.vercel.app/"
  },
  {
    name:"LinkTree DIY",
    type: "Game",
    description: "All my links in the same place",
    link:"https://hubertmoyne.pythonanywhere.com/"
  },
  {
    name:"Black Jack JS ",
    type: "Game",
    description: "Game of blackjack",
    link:"https://blackjack-js-murex.vercel.app/"
  },
  {
    name:"Hangman JS",
    type: "Game",
    description: "Game of Hangman",
    link:"https://github/aket0/ecommerce"
  },
];

const Home: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
    
    <div id="main">
      <header className={scrolled ? "header scrolled" : "header"} id="header">
        <h1 className={PermanentMarker.className}>Hubert.</h1>
        <ul>
          <li><a className={ProzaLibre.className} href="#main">HOME</a></li>
          <li><a className={ProzaLibre.className} href="#portfolio">WORK</a></li>
          <li><a className={ProzaLibre.className} href="#contact">CONTACT</a></li>
          <li><a className={ProzaLibre.className} href="https://hubertmoyne.pythonanywhere.com">LINKS</a></li>
        </ul>
      </header>
      <div id="imgTop">
        <h1 className={Prataa.className}>Naturaly creative, beautifully coded</h1>
      </div>
      <div id="bio">
        <Image id="img" src={selfie} alt="selfie" />
        <p>
          My name is Hubert Moyne and I’m a web developer. Truly in love with the web culture and its history. I’m fascinated by how design is important.
          To create the web of tomorrow, and make it more sustainable, I try to make each of my apps an immersive experience for the pleasure of the user.
        </p>
      </div>
      <div id="portfolio">
      <h2>WORK</h2>
      <div id="cardsHolder">
        
        {
          object.map((item, index) => {
            return (
              
              <div key={index} id="card">
                <iframe src={item.link} scrolling="no" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
                <h3>{item.name}</h3>
              </div>
            )
          })}


      </div>
      </div>
      <div id="contact">
        <div id="contactCard">
          <h2>CONTACT</h2>
          <form method="post">
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
            <textarea placeholder="Tell me more about your project"></textarea>
            <button type="submit">Contact me</button>
          </form>
        </div>
      </div>
    </div>
   
  );
};

export default Home;
