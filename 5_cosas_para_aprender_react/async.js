// fetch("https://reqres.in/api/users")
// .then((res )=> res.json())
// .then((r)=> console.log(r))
// .catch((err) => console.log(err));

 const getUsers = async()=> {
    const res = await fetch("https://reqres.in/api/users");
    const result = await res.json();

    console.log(result);
}

getUsers();
