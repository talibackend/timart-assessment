## Prerequisites
1. Nodejs runtime environment
2. A running mysql server instance
3. Any web browser of your choice

## Steps
1. Clone the repo
2. Copy the content of `.env.example` and use it to create a new file called `.env` in the base directory of the cloned repo.
3. Update the `.env` file to match your setup.
4. Run `npm install`.
5. Run `npm start:prod`
6. You should get a message in the console indicating that the application has started.
7. Access `http://localhost/{PORT IN .env}/graphql`, a graphiql web interface will be loaded and you can use it to interact with the application, you can also choose to use the postman collection instead.