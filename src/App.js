import React from 'react';
import './App.css';
import Button from './Button.js';
import Product from "./Product.js";
import Tile from "./Tile.js";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import story from './assets/our_story.png';


function App() {
  return (
      <>
          <h1>Handbags & Purses</h1>
          <nav>
              <Button
                  text="to the collection"
              />
              <Button
                  text="shop all the bags"
              />
              <Button
                  text="pre-orders"
                  disabled
              />
          </nav>
          <main>
              <Product
                  image={bag1}
                  text="The handy bag"
                  price="€400,-"
              />
              <Product
                  image={bag2}
                  text="The stylish bag"
                  price="€250,-"
              />
              <Product
                  image={bag3}
                  text="The simple bag"
                  price="€300,-"
              />
              <Product
                  image={bag4}
                  text="The trendy bag"
                  price="€150,-"
              />
          </main>
          <footer>
              <Tile
                  title="the brand"
                  text1="lorem 20"
                  text2="lorem 20"
              />
              <Tile
                  image={brand}
                  alt="The brand"
              />
              <Tile
                  image={story}
                  alt="Our story"
              />
              <Tile
                  title="our story"
                  text1="lorem 50"
              />

          </footer>
      < />
  );
}

export default App;



