# Library / Biblioteca

- [Instrucciones en Español](README_ES.md)
- [Instructions in English](README_EN.md)

# NDJ BookStore Web Project

This React Applications allows you to get all the available books in the
NDJ store and access book's details with just a few clicks!

    Made By: Nelson De Jesus | NDJ | nelsondjsh

     Technologies Used:

        - FrontEnd: ReactJS & Bootstrap
        - BackEnd: NestJS
        - Database: MySQL

        Other Tools Used:
        - DB Hosting: Docker Container & PlanetScale Cloud DB

## Installation & Setting Up

```
- git clone https://gitlab.com/gbh-candidates/nelson-de-jesus-santos-hidalgo-nelsonjdsh-2022-10-3-library-api-js.git
- git checkout develop
- cd nelson-de-jesus-santos-hidalgo-nelsonjdsh-2022-10-3-library-api-js
```

## Dependencies Installation & Running Projects

### FrontEnd:

```
- cd Book-Store.Presentation
- cd Book-Store.FrontEnd
- npm i
- npm start
```

### BackEnd

Since we are using PlanetScale Cloud MySQL DB Service, you only need to run the following commands:

The database connection credentials should work just fine, thanks to the PlanetScale Cloud MySQL Service that we are using as dummy db for this project.

```
- cd Book-Store.Presentation
- cd book-sttore.web-api
- npm i
- npm run start:Dev
```

### Seeder

Now that both your projects are running, you will need to execute the seeder service on your server, using [Postman HTTP Client](https://www.postman.com) or your favorite browser, make a `[GET]` request to the following URL:

```
http://localhost:5001/api/seed
```

Now you can use your application and get a list of Dummy Books for you to read!

### For HTTP Client testing

Included in the repository, you will find the [Book Store Postman Collection](BookStoreCollection.postman_collection.json), this will allow you to test and see every endpoint of the project's services using [Postman HTTP Client](https://www.postman.com).
