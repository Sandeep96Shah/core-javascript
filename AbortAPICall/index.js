const controller = new AbortController();

const fetchApi = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`HTTP Error, status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchApi();
controller.abort(); // api will be aborted as it is getting called while api is being call
// setTimeout(() => {
// controller.abort();  // api will not be aborted as it gets called after response is received from the api
// }, 5000);
