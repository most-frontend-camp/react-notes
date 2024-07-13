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

