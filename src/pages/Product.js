import React from 'react';
//import '../styles/product.css';
//import vignette from '../assets/vignette.jpg';
import Player from '../components/Player';
import { Link } from 'react-router-dom';

function Product() {
const vinyleName = "I Care Because You Do";
const artist = "Aphex Twin";
const label = "Warp";
const category= "Electronic";
const description = 'Recorded during a time when Brit Pop was the norm, this music reminds us of some of the great acts, who helped to carve the way for today’s groups while remaining fresh and current.Even now, 25 years on...';
const price = 18;

    return (
      <div className="flex justify-center">
          <div className="card flexflex-col justify-center items-center ">
            <img className="w-10/12 my-8" /* src="{vignette}" */ alt="exemple vignette"></img>
            <h2 className="flex self-start font-bold  text-2xl mb-2">{vinyleName}</h2>
            <h3  className="flex self-start font-bold text-xl mb-4 ">{artist}</h3>
            <div className="label-cat mb-8 w-full flex  justify-between">
                <p>{label}</p>
                <a href="/">{category}</a>
            </div>
            <h4 className="self-start font-bold  text-left ">Description</h4>
            <p className="font-italic text-left mb-4">{description} </p>
            <div className="label-cat mt-4 w-full flex  justify-between items-center">
                    <p className="price font-bold text-xl">{price}€</p>
                    <button className="add-btn text-white font-bold py-2 px-4 rounded">
                     <Link to ="/cart">ADD TO CART</Link> </button>
            </div>
            <div className="my-8">
            <Player />
            </div>

            </div>
          </div>


    );
  }

  export default Product;