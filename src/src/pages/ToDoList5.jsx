import Card from "../components/shared/Card";

// Example component using a list and a key,
function List() {
  const title = "Week 5 - To Do List";
  const body = "Tasks to complete for the week";
  const comment = [
    { 
      id: 1, 
      text: "Add at least one more page to website ", 
      added: "Books page added, Register page added as placeholder and Redux example" 
    },
    { 
      id: 2, 
      text: "Use basic hook - useState()", 
      added: "useState() hook added in Buy Books page to handle counter for the 'Add' and  'Remove' buttons" 
    },
    { 
      id: 3, 
      text: "Use basic hook - useEffect()", 
      added: "useEffect() hook added to update count to '1' when 'Add' is clicked and update count to '0' when 'Remove is clicked" 
    },
    { 
      id: 4, 
      text: "Use basic hook - useContext()", 
      added: "useContext() hook added to Register page as Subscribe button. Button colors will toggle when clicked" 
    },
    { 
      id: 5, 
      text: "Implement at least one React Route to handle navigation betwen pages", 
      added: "Route added for navigation component"
    },
    { 
      id: 6, 
      text: "Implement at least one Redux provider to create a Redux store", 
      added: "Redux store added in index.js " 
    },
    { 
      id: 7, 
      text: "Implement at least one Redux connect function to read values from Redux store", 
      added: "Register page added to read values from Redux Store and when subscribe is clicked, page will change to say 'Thank you for subscribing'" 
    },
    { 
      id: 8, 
      text: "Additional changes and code cleanup", 
      added: "Cleaned up appearnace with use of bootstrap. Renamed navbar buttons. Removed componentWillMount() and componenetDidMount() due to memeory leak from not using an unMount method. " 
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
            <h3>Tasks({comment.length})</h3>
            <ul style={{ listStyle: "circle" }}>
              {comment.map((comment, index) => (
                <li key={index}>{comment.text}</li>
              ))}
              <br />
              <hr />
              <br />
              <h2>
                <strong>Modifications made</strong>
              </h2>
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
