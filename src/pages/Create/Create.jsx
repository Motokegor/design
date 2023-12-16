import { useState } from "react";

export default function Create(props) {

  const [body, setbody] = useState("");
  const [title, settitle] = useState("");
  function addPost(){
    props.setArr([...props.arr, {title, body}]);
    
  }
  return (
    
    <div>
      <p>Добавить Пост</p>
      <form>
        <input type="text" value={title} onChange={(e) => settitle(e.target.value)}/>
        <input type="text" value={body} onChange={(e) => setbody(e.target.value)}/>
        <button type="button" onClick={() => {addPost(body, title); setbody(''); settitle('')}}>Добавить пост</button>
      </form>
    </div>
  )
}