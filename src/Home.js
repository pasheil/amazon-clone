import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61b68KkfCFL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={11}
            key={1}
            title="Crocs Men's Clog"
            price={12020.77777777}
            image="https://images-na.ssl-images-amazon.com/images/I/81WnMBnbWSL._AC_UL900_SR900,600_.jpg"
            rating={5}
          />
          <Product
            id={22}
            key={2}
            title="ReoRia Women's Sexy Sleeveless Racer Back Halter Neck Bodysuit Tank Tops"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Q0USQzGxL._AC_UL900_SR900,600_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={33}
            key={3}
            title="Repel Umbrella Windproof Travel Umbrella - Wind Resistant, Small - Compact, Light, Automatic, Strong Steel Shaft, Mini, Folding and Portable - Backpack, Car, Purse Umbrellas for Rain - Men and Women"
            price={18.36}
            image="https://images-na.ssl-images-amazon.com/images/I/61ypvjDvj3L._AC_UL900_SR900,600_.jpg"
            rating={5}
          />
          <Product
            id={44}
            key={4}
            title="Gildan Men's Crew T-Shirts, Multipack, Style G1100"
            price={18.45}
            image="https://images-na.ssl-images-amazon.com/images/I/710o0VupScL._AC_UL900_SR900,600_.jpg"
            rating={4}
          />
          <Product
            id={55}
            key={5}
            title="Under Armour Men's Tech 2.0 Short-Sleeve T-Shirt"
            price={12.17}
            image="https://images-na.ssl-images-amazon.com/images/I/71hWX-EjkAL._AC_UL900_SR900,600_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={66}
            key={6}
            title="Hey Dude Men's Wally Sox Onyx Multiple Colors | Men’s Shoes | Men's Lace Up Loafers | Comfortable & Light-Weight"
            price={34.95}
            image="https://images-na.ssl-images-amazon.com/images/I/81r6UvM0bnL._AC_UL900_SR900,600_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
