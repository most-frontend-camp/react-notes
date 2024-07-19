# State

### Intro to hooks

Hooks were added to React in version `16.8.`

Hooks allow function components to have access to `state` and other React features. Because of this, `class` components are generally no longer needed.

Hooks allow us to "hook" into React features such as state and lifecycle methods.


### Hook `useState` 
The React `useState` Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.

Quite good guide is https://www.w3schools.com/react/react_usestate.asp 

### Examples

Go through from 
https://react.dev/reference/react/useState 


### Work with onChange

```js
function App() {

  const [text, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input value={text} onChange={handleChange}/>
      <p>Ты пишешь вот этот текст - {text}</p>
      <button onClick={() => setText('salem!')}>
        Reset
      </button>
  
    </div>
  )
}

export default App
```

Result will be 
alt[]

### Boolean `onChange` 
```js
function App() {

  const [liked, setLiked] = useState(true);

  function handleChange(e) {
    setLiked(e.target.checked);
  }

  return (
    <div>
      <label htmlFor="">
        <input type='checkbox' checked={liked} onChange={handleChange}/>
        Я согласен
      </label>

      <p>Я {liked ? 'согласен' : 'не согласен'} c условиями </p>
  
    </div>
  )
}

export default App```

```js
function App() {


  const [name, setName] = useState('Lamine');
  const [age, setAge] = useState(17);

  return (
    <div>
        <input
          value={name}
          onChange={e=> setName(e.target.value)}
        />

        <button onClick={ () => setAge(age + 10) 
        }>
          Плюсуй мой возраст на 10 лет
        </button>



      <p>Салем {name}. Тебе {age}. Поидее тебе же нельзя играть</p>
  
    </div>
  )
}

export default App
```