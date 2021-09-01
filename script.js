async function f() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users');
    let content = await users.json();
    console.log(content);
    
let list = document.getElementById('name');
let list2 = document.getElementById('username');
let list3 = document.getElementById('phone');


    
for (let key in content) {
    list.innerHTML += `<li>${content[key].name}</li>`;
    list2.innerHTML += `<li>${content[key].username}</li>`;
    list3.innerHTML += `<li>${content[key].phone}</li>`;
    
 }


}
  f();
