# State advanced


### Project setup

давайте создадим новый проект через

```bash
npx create-react-app project-name
cd project-name
npm start
```

### Working with `useState` as an Array


```js
import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />;
  });
  
  return (
  <div className="app">
  <h1>Some headings</h1>
  <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
  <button onClick={handleClick}>Add Animal</button>
  <div className="animal-list">{renderedAnimals}</div>
  </div>
  );
}
```



### Working with `useState` as an Object


```js
import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function randomEmoji() {
    const choices = ['😀', '🥲', '🥰', '🤪', '😡', '🤡'];

    return choices[Math.floor(Math.random() * choices.length)];
  }

  const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji() }]);

  const addEmoji =() => {
      setEmojis(
          (oldEmojis) => [...oldEmojis, {id: uuid(), emoji: randomEmoji() }]
      );
    };

  const deleteEmoji =(id) => {
    setEmojis(
        (prevEmojis) => {return prevEmojis.filter(e => e.id !== id)}
        );
    };(

  const makeHearts = () => {
    setEmojis((prevEmojis) => {
      return prevEmojis.map((e) => {
        return {...e, emoji: "🦁"};
      });
    });
  };

  return (
    <div>
        {
          emojis.map((e) => (
            <span onClick={()=>deleteEmoji(e.id)} key={e.id} style={{fontSize: "4rem"}}>{e.emoji}</span>
          ))
        }
        <button onClick={addEmoji}>Add emoji</button>
        <button onClick={makeHearts}>Make All Lions</button>
    </div>
  );
}
```