import axios from "axios";
import { useEffect, useState } from "react";
const PostShow = () => { 
    const [users,setUserData] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get("http://jsonplaceholder.typicode.com/posts");
            setUserData(response.data)
        };
        fetchData()
    },[])
    return(
        <table border="3" align="center">
          <tr>
            <th>userId</th>
            <th>Id</th>
            <th>Title</th>
            <th>body</th>
          </tr>
          {users.map((item) => 
            <tr>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          )}
        </table>
      )
}
export default PostShow;