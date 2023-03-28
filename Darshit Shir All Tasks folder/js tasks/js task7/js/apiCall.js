fetch('http://192.168.3.51:1100/api/getAllUser', { method: 'get' })

.then(response => response.json())
.then(obj => {
console.log(obj);
})

.catch(err => { console.log(err) });
