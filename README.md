# ExoGymondo

This project is a technical front end test for the company [gymondo](https://www.gymondo.com/en/). It's a web app connected to a database displaying list of workout.
Here is a quick resume of the acceptances criterias:

- List item
- I can see a global header with an image logo
- I can see a top bar with two filters: Start date and Category
- I can see a list of workouts
- I see maximum of 20 workouts per page
- I can see other workouts using the pagination component
- I can click on one workout and be redirected to the Workout Detail Page
- I can see a Workout Detail Page
- On the Workout Detail Page I can see the fields: name, description, start date and category
- On the Workout Detail Page I can come back to the Workout List Page from the Workout Detail Page

## Stack

The differents technologies used to build this app are :

### front

- ReactJs
- React-router
- styled-component
- Material-ui

### Server

- Express

### Database

- mongoDB

### Utils

- luxon
- Typescript
- nx

## Project tour

The project has been generated with the [nx](https://nx.dev/react) framework. This framework is a monorepo devtool which allow me to quick setup my client and server side for my project.
Here is a quick tour of the file structure:

`/apps/`
folder regroupe all the differents application repos.

`/apps/api`
folder contain the server side code. Server and api are located in `main.ts` and data set (database: mongoDB) are located in the `/assets/` folder. To connect to your mongodb you can modify variables located in the `/environments/environment.ts`

`/apps/workout-list`
folder contain the client side application. All components are located in the `/src/app/` folder. Api call are correctly redirected to the server through a proxy `proxy.conf.json` (automatically generated file).

`/apps/workout-list-e2e`
folder contain e2e tests. Those test are located in the `/integration/app.spec.ts` file.

`/libs/`
folder regroupe all shared librairies used in the monorepo. I use only one library `types` it allow me to share my custom type trough the project.

## Commande

You can install nx globally if you you want to use following commands:

    npm  install -g nx or yarn global add nx

or you can prefix all the commands with:

    npm run or yarn

run client

    nx serve workout-list

run server

    nx serve api

run e2e tests

    nx e2e workout-list-e2e --watch

If you have any questions don't hesitate to contact me.
