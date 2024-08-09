const login = async (username, password) => {
    if(!username || !password) throw 'Missing Data'
    if(password === '123456789') return 'Welcome!'
    throw 'Incorrect password'
}

login('johndoe', '123456789')
.then(msg => {
    console.log("LOGIN");
    console.log(msg);
})
.catch(err => {
    console.log("ERROR");
    console.log(err);
})