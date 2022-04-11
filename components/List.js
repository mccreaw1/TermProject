import Card from "./shared/Card";

// Example component using a list and a key,
function List() {
  const title = "Week 4 - To Do List";
  const body = "Tasks to complete for the week";
  const comment = [
    { id: 1, text: "Include at least one event handling, list and key",
    added: "Login button in NAVBAR functions to open in modal. This list expanded to add changes use key and list." },
    { id: 2, text: "Passing property between components",
    added: "Custom message passed to header for sales banner, Home Page banner, and Book List Banner" },
    { id: 3, text: "Use at least one Styling Library",
    added: "Boostrap Styling Library used in Home.module.css" },
    { id: 4, text: "At least one behavior as follows:",
    added: "--> Behaviors added:" },
    {
      id: 5,
      text: "=> Perform some action when component is getting ready to be mounted (or just after it mounts). By defining the function componentWillMount() (or componentDidMount())",
      added: "Sale notification bar added using componentDidMount() to display a sale banner for 6 seconds" ,
    },
    {
      id: 6,
      text: "=>	Perform some action when component state or props changes. By defining the function componentWillUpdate() or componentWillReceiveProps()",
      added: "Home Page Under Construction - Loading ... added using componentWillUpdate()"
    },
    {
      id: 7,
      text: "=>	Before the component is unmounted handle any clean-up events, such as clearing timeouts, clearing data, disconnecting websockets, etc. with componentWillUnmount()",
      added: "Book List component added with button to delete listed items"
    },
  ];

  const loading = false;
  const showComments = true;

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <Card>
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>
        {/* using the dbl amp instead of ternary to remove the false response*/}
        {showComments && (
          <div className="comments">
            <h3>Comments({comment.length})</h3>
            <ul style={{ listStyle: "circle" }}>
              {comment.map((comment, index) => (
                <li key={index}>{comment.text}</li>
              ))}
              <br/><hr/><br/>
              <h2><strong>Modifications made</strong></h2>
              {comment.map((comment, index) => (
                <li key={index}>{comment.added}</li>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </div>
  );
}

export default List;
// #E9B982 background secondary

// #C66B03 text on dark background

 // #0E47AF 
 
// #103D91 Hero background
 
// #071329 Dark background -footer