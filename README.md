
# A node js + Prisma starter code with MVC stucture. 

A code template to get quick started with node js, express js and prisma (SQL database ORM). It has error handling an database middleware ready to use. 

# Features 

- MVC structure
- prisma ORM
- response middleware to make the response sending structure same for all api point.
- error handling middleware with enum HTTP error codes
- monitor app by visiting url: /status
- a colorful console log function


## Script run sequence

Install packages

```
  npm i
```
change the followings in .env file before running the program.
- DATABASE_URL : "URL string of databse"

### Run 

Start the server on development

```bash
  npm run test
```
Start the server

```bash
  npm start
```

# Throw an error
```
// to throw error =>  return next(new ErrorHandler(message, statusCode));
```

# Colorful terminal codes

```
case 1: red
case 2: green
case 3: blue
case 4: yellow 
case 5: cyan 
case 6: magenta
default: white
```

