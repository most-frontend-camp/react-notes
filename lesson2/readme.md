# Props

React components use props to communicate with each other. 

Every parent component can pass some information to its child components by giving them props. 

Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

### Introduction

В React props можно добавлять к компоненту так же, как атрибуты к элементу HTML. Чтобы передать Props компоненту, вы можете добавить его в компонент, как показано ниже:

```js
<Card title="test title" description="test desc" />
```

Чтобы использовать props в компоненте, доступ к ним можно получить внутри определения компонента следующим образом:

```js
import React from 'react';

const Card = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
```


### Passing props

Props по умолчанию используются для установки значений по умолчанию для props таким образом, что если конкретный props не получает никакого значения, то будет использоваться значение по умолчанию. 

Это позволяет устанавливать значения по умолчанию для props, которые не являются строго необходимыми, но могут обеспечить дополнительную функциональность или гибкость дизайна.

```js
// Card component
export default function Card({title="Shinobi", description="is not from village"}){
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
```

В этом примере, если props для `title` не указан, по умолчанию будет использоваться `Shinobi`, а если props для `description` не указан, по умолчанию будет установлено значение `«is not from village»`.


```js
import Card from './Card'

function App() {
  return (
    <>
      <h1>Heading First</h1>
      <Card title="Naruto" description="Konoha"/>
      <Card title="Sasuke"/>
      <Card description="Rain Village"/>
    </>
  );
}
```

Результат такого кода будет ниже
![alt image](props-default.png)