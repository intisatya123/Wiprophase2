import axios from "axios";
import { useEffect, useState } from "react";
const EmployShow = () => { 
    const [users,setUserData] = useState([])
    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get("http://localhost:1113/showemploy");
            setUserData(response.data)
        };
        fetchData()
    },[])
    return(
        <table border="3" align="center">
          <tr>
            <th>EmployeeNo</th>
            <th>EmpName</th>
            <th>Basic</th>
            
          </tr>
          {users.map((item) => 
            <tr>
              <td>{item.empno}</td>
              <td>{item.name}</td>
              <td>{item.basic}</td>
              
            </tr>
          )}
        </table>
      )
}
export default EmployShow;