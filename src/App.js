import React from 'react';
import './App.css';
import WordCard from './WordCard';
import NewWordCard from './NewWordCard';

const word = "Hello";
const newword = "World";
function App() {
  return (
    <div>
      <WordCard value={word}/>
      <NewWordCard value={newword}/>
    </div>
  );
}

export default App;
