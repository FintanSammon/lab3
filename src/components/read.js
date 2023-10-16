import Books from "./books";

//// This is a functional component named Read that displays a list of books using the Books component
function Read(){

//Here I defined a sample data array with book information
            const data = 
                [
                    {
                    "title": "Learn Git in a Month of Lunches",
                    "isbn": "1617292419",
                    "pageCount": 0,
                    "thumbnailUrl":
                    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
                    "status": "MEAP",
                    "authors": ["Rick Umali"],
                    "categories": []
                    },
                    {
                    "title": "MongoDB in Action, Second Edition",
                    "isbn": "1617291609",
                    "pageCount": 0,
                    "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg","status": "MEAP",
                    "authors": [
                    "Kyle Banker",
                    "Peter Bakkum",
                    "Tim Hawkins",
                    "Shaun Verch",
                    "Douglas Garrett"
                    ],
                    "categories": []
                    },
                    {
                        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
                        "isbn": "1617292036",
                        "pageCount": 0,
                        "thumbnailUrl":
                        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg","status": "MEAP",
                        "authors": ["Simon Holmes"],
                        "categories": []
                        }
                    
                ];
    return(
        <div>
//Here displays a greeting from the Read component
            <h2>Hello from my Read Component</h2>
// Here is a render for the Books component and pass the sample book data to it
            <Books myBooks={data}></Books>
        </div>
    );
    
}
// Here I exported the Read component to make it available for use in other parts of the app
export default Read;
