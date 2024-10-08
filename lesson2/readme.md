# Props

* React Props аналогичны аргументам функции в JavaScript и атрибутам в HTML.

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


### Props по умолчанию

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
![alt image](props-def.png)

### Props 
Давайте просто передадим `props`, используя фигурные скобки `{}` 

```js
export default function Cadr({title, description}){
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
```

ПРИМЕЧАНИЕ. 
Ключевой особенностью `JSX` является возможность использовать фигурные скобки для добавления выражений `JavaScript` в `HTML`-подобные элементы.


### Props 
Свойства могут напоминать вам атрибуты HTML, но через них можно передавать любые значения JavaScript, включая объекты, массивы и функции.

1. Non string props
2. Passing arrays and objects as props
3. Conditional props
4. Rendering with map

### Additional

https://typeofnan.dev/conditional-component-props-react/ 
https://www.freecodecamp.org/news/react-conditional-rendering/#what-is-react-conditional-rendering 
https://www.robinwieruch.de/react-pass-props-to-component/#react-props-destructuring 