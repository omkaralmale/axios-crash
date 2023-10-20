// GET REQUEST
function getTodos() {
  // axios({
  //   method: "get",
  //   url: "https://jsonplaceholder.typicode.com/todos",
  // })
  //   .then((res) => showOutput(res))
  //   .catch((err) => showOutput(err));

  //axios.get
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => showOutput(res))
    .catch((err) => showOutput(err));
}

// POST REQUEST
function addTodo() {
  //axios post request
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      data: {
        userId: 1,
        id: 1,
        title: "POST METHOD RUN",
        completed: false,
      },
    })
    .then((res) => showOutput(res))
    .catch((err) => showOutput(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  //axios put request
  axios
    .put("https://jsonplaceholder.typicode.com/todos/1", {
      title: "Updated Todo",
      completed: true,
    })
    .then((response) => showOutput(response))
    .catch((error) => showOutput(error));
}
// DELETE REQUEST
function removeTodo() {
  //axios detect response
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => showOutput(res))
    .catch((err) => showOutput(err));
}

// SIMULTANEOUS DATA
function getData() {
  //axios simulate response
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => showOutput(res))
    .catch((err) => showOutput(err));
}

// CUSTOM HEADERS
function customHeaders() {
  //axios custom headers
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => showOutput(res))
    .catch((err) => showOutput(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  //axios transform response and request
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1", {
      transformRequest: [
        (data) => {
          return JSON.stringify(data);
        },
      ],
    })
    .then((res) => showOutput(res))
    .catch((err) => showOutput(err));
}

// ERROR HANDLING
function errorHandling() {
  //axios error handelling
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => showOutput(res))
    .catch((err) => showOutput(err));
}

// CANCEL TOKEN
function cancelToken() {
  //axios cancel token
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1", {
      cancelToken: axios.CancelToken.source().token,
    })
    .then((res) => showOutput(res))
    .catch((err) => showOutput(err));
}

// INTERCEPTING REQUESTS & RESPONSES
//axios intercept
axios.interceptors.request.use(
  (config) => {
    console.log("Request Intercepted");
    return config;
  },
  (error) => {
    console.log("Request Intercept Error");
    return Promise.reject(error);
  }
);

// AXIOS INSTANCES
//axios instance
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
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
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
