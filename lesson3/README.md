# Events

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