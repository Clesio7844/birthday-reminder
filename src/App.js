import React, { useState } from 'react';
import './App.css';
import data from './data';
import Card from './Card';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthday today</h3>
        <Card people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
