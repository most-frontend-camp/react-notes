# Code snippets

Несколько асинхронных функций в серии
```js
async function goGit() {
    const p1 = await fetch("https://api.github.com/users/octocat");
    const p2 = await fetch("https://api.github.com/users/linus");

    //
    const result = await Promise.all([p1, p2]);
    console.log("Updated Git results", result)
}

goGit(); 
```
Использовать catch для всей асинхронной функции
```js
const getUserData = async () => {
        const response = await fetch("https://api.github.com/use12rs/linus");
        const users = await response.json();
        return users;
}

getUserData().catch(err) {
    console.log("Error is occured");
    console.log(err);
}

getUserData();
```