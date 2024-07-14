# Events
https://www.freecodecamp.org/news/how-to-handle-events-in-react-19/ 

### Example 1

Чтобы добавить обработчик событий, вы сначала определите функцию, а затем передадите ее как свойство соответствующему тегу `JSX`. 

Вы можете заставить его показывать сообщение, когда пользователь нажимает, выполнив следующие 3 шага:
1. Объявите функцию `handleClick` внутри компонента `Button`.
2. Реализуйте логику внутри этой функции (используйте предупреждение для отображения сообщения).
3. Добавьте `onClick={handleClick}` в `<button>` JSX.

```js
export default function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

### Example 2
Поскольку обработчики событий объявляются внутри компонента, они имеют доступ к свойствам компонента. 

Вот кнопка, при нажатии на которую отображается предупреждение с сообщением:

```js
export default function Arrow({message, children}){
    return(
        <button onClick={()=> alert(message)}>
            {children}
        </button>
    )
}
```


```js
function App() {
  return (
    <div>
      <h1>Результаты ЕНТ</h1>
      <p>Информация о результатах ЕНТ доступно по нижней ссылке.</p>
      <Arrow message="Скачивание началось!">
        Скачать
      </Arrow>
      <Arrow message="Обновление началось!">
        Обновить
      </Arrow>
    </div>
  )
}
export default App
```