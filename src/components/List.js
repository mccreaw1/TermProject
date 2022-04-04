import Card from "./shared/Card";

// Example component using a list and a key,
function List() {
  const title = "Week 3 - To Do List";
  const body = "Tasks to complete for the week";
  const comment = [
    { id: 1, text: "Include an image *DONE*" },
    { id: 2, text: "Create an event handler *DONE*" },
    { id: 3, text: "Create a list *DONE*" },
    { id: 4, text: "Use a key index *DONE*" },
    {
      id: 5,
      text: "Pass props and state between parent and child both ways *DONE*",
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
            <h3>Comment({comment.length})</h3>
            <ul style={{listStyle: 'square'}}>
              {comment.map((comment, index) => (
                <li key={index}>{comment.text}</li>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </div>
  );
}

export default List;
