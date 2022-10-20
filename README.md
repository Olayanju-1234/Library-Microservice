# Library-Microservice
A web based library app using the microservices architecture

<p>This is a library web application with different components communicating with each other</p>

<h1>Services</h1>
<li>Book services</li>
<li>Customer services</li>
<li>Oder services</li>

<h1>Book Services</h1>
<h4><a href="http://localhost:5050/api/books">Book service base url</a></h4>

<p>Book services is a service that handles all the book related operations</p>
<h4>Routes/Paths</h4>
<li>GET /find : Get all books available in the library</li>
<li>GET /book/:id Get a particular book from the library</li>
<li>POST /create Add a new boook to the library</li>
<li>DELETE /delete/:id Delete a book from the library</li>

<h3>Book Model</h3>
<p>Book model is the model that is used to create a book object</p>
<h4>Properties</h4>
<li>title : String</li>
<li>author : String</li>
<li>numberOfPages : int</li>

<h3>API Visualization and Doc</h3>
<p>API visualization and documentation is done using Swagger</p>
<li>Swagger is a tool that is used to visualize and document RESTful APIs</li>
<h4>Url:<a href="http://localhost:3030/api-docs"></a> </h4>

<p>Replace the YOUR_URI with your MongoDB URI</p>

<h1>Customer Services</h1>
<h4><a href="http://localhost:5050/api/customers">Customer service base url</a></h4>

<p>Customer service handles all customer related requests</p>
<h4>Routes/Paths</h4>
<li>GET /find : Get all customers</li>
<li>GET /customer/:id Get a particular customer</li>
<li>POST /create Add a new customer</li>
<li>DELETE /delete/:id Delete a customer</li>

<h3>Customer Model</h3>
<p>Customer model is the model that is used to create a customer object</p>
<h4>Properties</h4>
<li>name : String</li>
<li>age : int</li>
<li>address : String</li>

<h3>API Visualization and Doc</h3>
<p>API visualization and documentation is done using Swagger</p>
<li>Swagger is a tool that is used to visualize and document RESTful APIs</li>
<h4>Url:<a href="http://localhost:3030/api-docs"></a> </h4>

<p>Replace the YOUR_URI with your MongoDB URI</p>

<h1>Order Services</h1>
<h4><a href="http://localhost:5050/api/orders">Order service base url</a></h4>

<p>Order service handles all order related requests</p>
<h4>Routes/Paths</h4>
<li>GET /find : Get all orders</li>
<li>GET /order/:id Get a particular order</li>
<li>POST /create Add a new order</li>
<li>DELETE /delete/:id Delete a order</li>

<h3>Order Model</h3>
<p>Order model is the model that is used to create a order object</p>

<h4>Properties</h4>
<li>bookId : String</li>
<li>customerId : String</li>
<li>orderDate : Date</li>
<li>deliveryDate: Date</li>

<h3>API Visualization and Doc</h3>
<p>API visualization and documentation is done using Swagger</p>
<li>Swagger is a tool that is used to visualize and document RESTful APIs</li>

<h4>Url:<a href="http://localhost:3030/api-docs"></a> </h4>

<p>Replace the YOUR_URI with your MongoDB URI</p>







