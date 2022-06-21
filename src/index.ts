import axios from "axios"

const main = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
  console.log(data)
}

main()