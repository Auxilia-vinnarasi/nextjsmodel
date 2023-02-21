import { useState,useEffect} from "react";
import styles from "../styles/Home.module.css";

const index=()=>{
  const [folder,setFolder] = useState([]);
  useEffect(()=>{
    const url='http://localhost:3001/user'
    fetch(url)
            .then(res => res.json())
            .then(json => {
                setFolder(json);
            });
  },[]);
  console.log(folder);
  return(
    <>
    <div className={styles.main}>
       <table>
        <thead>
          <tr>
            <td>name</td>
            <td>email</td>
            <td>password</td>
          </tr>
        </thead>
        {
          folder.map((Folder: { name: string ; email: string; password:  string ; },index: any)=>(
       <tr>
         <td>{Folder.name}</td>
       <td>{Folder.email}</td>
       <td>{Folder.password}</td>
        </tr>
          ))
        }
       </table>
    </div>
    </>
  );
}
export default index