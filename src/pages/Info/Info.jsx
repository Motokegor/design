export default function Info(props) {
  return (
    <div>
      <p></p>
      <h3 className="title">{props.object.title}</h3>
      <p className="body">{props.object.body}</p>
    </div>
  );
}