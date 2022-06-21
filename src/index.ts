import fetch from "node-fetch";

const main = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/2")
  console.log(await response.json())
}
  
main()