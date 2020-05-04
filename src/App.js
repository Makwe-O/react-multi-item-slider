import React from 'react';
import Card from './components/card';
import Scrollable from './components/scrollable';

const App = () => {
  return (
    <div className='App'>
      <Scrollable hideScrollBar hideScrollArrows>
        <Card
          name={'corgi 1'}
          image={
            'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_2982.jpg'
          }
        />
        <Card
          name={'corgi 2'}
          image={
            'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_8846.jpg'
          }
        />
        <Card
          name={'corgi 3'}
          image={
            'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_1529.jpg'
          }
        />
        <Card
          name={'corgi 4'}
          image={
            'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_3169.jpg'
          }
        />
        <Card
          name={'corgi 5'}
          image={
            'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_3169.jpg'
          }
        />
      </Scrollable>
    </div>
  );
};

export default App;
