# Onion Architecture

- Each layer is dependent on only one inner layer.
- The fundamental principle is that each layer depends on a layer closer to the center.
- Dependencies are one-way, moving inward.
- Unlike traditional architecture, the data layer (Persistence) is designated as the outermost layer rather than the innermost layer. This allows for development independent of the source of the data in the application.
**Onion Architecture is a Clean Architecture Pattern.**

![Process](https://miro.medium.com/v2/resize:fit:640/format:webp/1*0Pg6_UsaKiiEqUV3kf2HXg.png)



**Domain Layer** - It is the core layer.There are objects related to the work to be done. Exceptions related to entities, value objects, enumerations, entities.

**Repository and Service Interfaces Layer/ Application Layer** - 
The layer between the domain and business layers is an abstraction layer. All service interfaces are defined here. The Repository and Service layers reference the Domain layer. The purpose of this layer is to adopt a loosely coupled approach in data access. DTO, ViewModel, Mapping, Validations, CQRS Pattern.

**Persistence Layer** - It is the layer that handles database operations/data access logic. The concrete objects of the repository interfaces in the Application layer are found here. DbContext, Migration, Configurations, Seeding, Repository Concrete Class.

**İnfrastructure Layer** - We can say that it is a layer that can integrate with the Persistence layer. Ultimately, both are business layers. The only difference from Persistence is that it is the layer where we carry out operations/services/processes outside of the database. All services other than data access from the database are built in this layer. Email/SMS, Notification, Payment.

**Presentation Layer** - It is the layer where the user interacts with the application.  Web API, MVC.



# What is the CORS Policy?
**CORS** (Cross-Origin Resource Sharing) policy is a way for browsers to allow some web pages to talk to other web pages. Browsers have a security rule called the *Same-Origin* Policy that stops bad websites from reading data from other websites.

If a client application runs in a browser (like Opera, Chrome, or Mozilla), the CORS policy is important. The browser will first check with the target site to see if it allows requests from different origins. If the target site says yes, the browser will let the request go through; if not, it will block it.

For example:
https://www.something.com

If the protocol, host, or port is different, the browser will block the request.





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





# RabbitMQ 

**What is RabbitMQ?**

- It was developed with Erlang by LShift and CohesiveFT companies in 2007.
- It is an open source message queuing system (Message Queue)
- Facilitates communication between non-connected systems (Cross). (Async)
- Supports AMQP, HTTP and MQTT protocols

**Where is it used?**

- In transactions where background services are very,
- In areas where instant transactions are not very important,
- In operations where data consistency is very important
- In transactions where the transaction volume is large

**What are the components?**

![Process](https://www.cloudamqp.com/img/blog/rabbitmq-beginners-updated.png)


