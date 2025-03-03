/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import axios from "axios";
const PostSearch = () => {
    const[postResult, SetPostResult] = useState({})
    const[userId,SetUserId] = useState(0) 
    const handleChange = event => {
        SetUserId(event.target.value)
        // alert(empno);
    }
    const show = () => {
        // alert(userId)
        let id = parseInt(userId);
        axios.get("http://jsonplaceholder.typicode.com/posts/"+id).then(
            (response) => {
                SetPostResult(response.data)
            }  
          )
      
    }
    return(
        <div>
            <label>
                USER ID : </label>
            <input type="number" name="userId" 
                value={userId} onChange={handleChange} /> <br/>
            <input type="button" value="Show" onClick={show} />
            <hr/>
            User ID : <b>{postResult.userId}</b> <br/>
             ID: <b>{postResult.id}</b> <br/>
            Title : <b>{postResult.title}</b> <br/>
            Body : <b>{postResult.body}</b> <br/>
           
        </div>
    )
}
export default PostSearch;