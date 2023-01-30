// GET REQUEST
function getTodo() {
  /** 1st way to write axios for fetch data from api */
  // axios({
  //   method:"get",
  //   url:"https://jsonplaceholder.typicode.com/todos",
  //   params:{
  //     _limit:5,
  //   }
  // })
  // .then(response => showOutput(response))
  // .catch(err => console.log(err))
  // .finally(() => console.log("I am always run"));

  /** 2nd way to write axios for fetch data from api */
  // axios.get("https://jsonplaceholder.typicode.com/todos", {params:{_limit:10}})
  // .then(res => showOutput(res))
  // .catch(err => console.log(err))
  // .finally(() => console.log("I am final method"));

  /** 3rd way to write axios for fetch data from api */
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=8")
  .then(res => showOutput(res))
  .catch(err => console.log(err))
  .finally(() => console.log("I always run no matter what"));

}

// POST REQUEST
function addTodo() {
  /** 1st way to write the post request */
  // axios({
  //   method:"post",
  //   url:"https://jsonplaceholder.typicode.com/todos",
  //   data:{
  //     title:"Lorem ip sum dolor sit.",
  //     completed:false,
  //   }
  // })
  //   .then(res => showOutput(res))
  //   .catch(err => console.log(err));

  /** 2nd way to write post request  */
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title:"post new todo item to list",
    completed:true,
  })
  .then(res => showOutput(res))
  .catch(err => console.log(err));

}

// PUT/PATCH REQUEST
function updateTodo() {
  /**
   * The main difference between put and patch is, in put method entire resource is replaced,
   * whereas in patch method some specific data is changed in that resource.
   */

  /** 1st way to write the put request axios */
  // axios({
  //   method:"put",
  //   url:"https://jsonplaceholder.typicode.com/todos/1",
  //   data:{
  //     title:"updated todo item",
  //     completed:true,
  //   }
  // })
  // .then(res => showOutput(res))
  // .catch(err => console.log(err));

  /** 2nd way to write put request in axios */
  // axios.put("https://jsonplaceholder.typicode.com/todos/1", {
  //   title:"shorted way to write the put request in axios",
  //   completed:true,
  // })
  // .then(res => showOutput(res))
  // .catch(err => console.log(err))
  // .finally(console.log("wo ho... it is working!!"));

  /** 1st way to write patch method in axios */
  // axios({
  //   method:"patch",
  //   url:"https://jsonplaceholder.typicode.com/todos/4",
  //   data:{
  //     title:"patch the data into todo list",
  //     completed:false
  //   }
  // })
  // .then(res => showOutput(res))
  // .catch(err => console.log(err));

  /** 2nd way to write patch method in axios */
  axios.patch('https://jsonplaceholder.typicode.com/todos/1', {
    title:"2nd way patch the data",
    complete:true,
  })
  .then(res => showOutput(res))
  .catch(err => console.log(err));
  
}

// DELETE REQUEST
function removeTodo() {
  /** 1st way to write delete method */
  // axios({
  //   method:"delete",
  //   url:"https://jsonplaceholder.typicode.com/todos/1",
  // })
  // .then(res => showOutput(res))
  // .catch(err => console.log(err))
  // .finally(console.log("I am final method form delete request"));

  /** 2nd way to write delete method in axios */
  axios.delete("https://jsonplaceholder.typicode.com/todos/3")
  .then(res => showOutput(res))
  .catch(err => console.log(err));
}

// SIMULTANEOUS DATA
function getData() {
  /**
   * Get multiple set of data from different endpoint at a time 
   * take different url as argument in from of array
   * and giving response an array of response.
   * using ... spread operator to get all response value.
   */

  // axios.all([
  //   axios.get("https://jsonplaceholder.typicode.com/todos"),
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  // ])
  // .then(res => { 
  //   console.log(res[0]);
  //   console.log(res[1]);
  // })
  // .catch(err => console.log(err));

  axios.all([
    axios.get("https://jsonplaceholder.typicode.com/posts"),
    axios.get("https://jsonplaceholder.typicode.com/todos")
  ])
  .then(res => console.log(...res))
  .catch(err => console.log(err));

}

// CUSTOM HEADERS
function customHeaders() {
  console.log('Custom Headers');
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodo);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);