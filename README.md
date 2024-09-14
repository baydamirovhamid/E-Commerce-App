# CQRS Pattern
**CQRS** (*Command Query Responsibility Segregation*):

- **Command: Insert, Update, Delete - Commands are operations that allow us to manipulate data.**

- **Query: Select - Queries are used for reading data without making any modifications, such as reporting, listing, or obtaining statistical results from the existing data.**

**Why Should We Use It?** 

If an incoming request is a command, I might want to handle its operations in a separate layer or, if it's a query (Select), I might want to execute it from a different database, thus allowing for scalability and reducing costs.

By separating the operations that handle commands (insert, update, delete) from the operations that handle queries (Select) in the database, we can reduce the physical, software, and financial costs of the work done on servers.

**How Should We Use It?**

A client request can be either a command or a query. To handle this request, we need to have configurations that can be either insert, update, delete (command) or a Select (query) operation.

Regardless of the type of request, we need to have an object to handle it.

This incoming request will be processed by an API with a request object that matches the type of operation (command or query). Every request will return a response.

We will have command and query request objects that match the nature of the client's request, and our API will understand these objects and respond accordingly.

**How will the application know where to perform the operations?**

We will have **Handler Classes**. These handler classes will process all the command and query requests in the application and return response objects as a result.

The API will forward the incoming request to the handler class. The handler will return an appropriate response for the type of request it received.

# What is the MediatR Pattern?
The **MediatR pattern** organizes the chaotic flow into a more structured form by managing the dependencies between objects from a central point, allowing us to reduce dependencies.

This design focuses on what objects will communicate rather than how they will communicate with each other.

**MediatR** - suggests that instead of direct communication between objects that need to interact, their calls should be handled indirectly through a special mediator (MediatR) object, ensuring independence between the objects.
