# Library-Microservice
A web based library app using the microservices architecture

<p>This is a library web application with different components communicating with each other</p>

<h1>Services</h1>
<li>Book services</li>
<li>Customer services</li>
<li>Oder services</li>

<h1>Book Services</h1>
<h4>http://localhost:3030/api/books</h4>

<p>Book services is a service that handles all the book related operations</p>
<h4>Routes/Paths</h4>
<li>GET /find : Get all books available in the library</li>
<li>GET /book/:id Get a particular book from the library</li>
<li>POST /create Add a new boook to the library</li>
<li>DELETE /delete/:id Delete a book from the library</li>

<h3>Book Model</h3>
<p>Book model is the model that is used to create a book object</p>
<h4>Properties</h4>
<li>title</li>
<li>author</li>
<li>numberOfPages</li>

<h3>API Visualization and Doc</h3>
<p>API visualization and documentation is done using Swagger</p>
<li>Swagger is a tool that is used to visualize and document RESTful APIs</li>
<h4>Url: http://localhost:3030/api-docs</h4>



