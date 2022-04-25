import Card from "../components/shared/Card";

// Example component using a list and a key,
function List() {
  const title = "Week 6 - To Do List";
  const body = "Tasks to complete for the week";
  const comment = [
    { 
      id: 1, 
      text: "Get MongoDB databse server up and running", 
      added: "MongoDB installed and server running on port localhost:27017 " 
    },
    { 
      id: 2, 
      text: "Create the applicationdb database", 
      added: "'applicationdb' created" 
    },
    { 
      id: 3, 
      text: "Create a user with readWrite privileges to the database", 
      added: "Created user: appuser, pwd: password with roles: readWrite, dbAdmin" 
    },
    { 
      id: 4, 
      text: "Connect term project to the applicationdb mongodb database", 
      added: "Connection made through middleware at listening port localhost:5000" 
    },
    { 
      id: 5, 
      text: "Create at least 3 new users and save the information in the database using login form", 
      added: "Using the Register form, added 3 new users with firstname, lastname, email, userName, password, passed to applicationdb users database"
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
