import Card from './Card'

function Books (props) {

    return (
    <>
    <h1 id="book" className="display-4 my-4 text-center text-muted">book</h1>
    <div className="row">
      {
        props.book.map((book, index) => <Card key={index} book={book}/>)
      }
    </div>
    </>
    )
}