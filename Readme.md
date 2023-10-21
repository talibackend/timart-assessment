## Prerequisites
1. Nodejs runtime environment
2. A running mysql server instance
3. Any web browser of your choice

## Graphql Documentation
The GraphQL documentation is located in the `schema.md` file.

## Steps
1. Clone the repo
2. Copy the content of `.env.example` and use it to create a new file called `.env` in the base directory of the cloned repo.
3. Update the `.env` file to match your setup.
4. Run `npm install`.
5. Run `npm start:prod`
6. You should get a message in the console indicating that the application has started.
7. Access `http://localhost/{PORT IN .env}/graphql`, a graphiql web interface will be loaded and you can use it to interact with the application, you can also choose to use the postman collection instead.

## Database Test
After performing the steps above, Users and Orders table should have been created with a relationship between them. The next step is the **sql assessment test**, you can check this by taking the following steps.
1. Run `npm run seed`, this will create a list of 1000 users and 5000 orders, where the users share the orders amongst themselves.
2. Run `npm run query` this will output the result of the optimize query to pull the users sorting by the ones with the highest amount of orders.

```
The mock data was generated using https://www.mockaroo.com/
```