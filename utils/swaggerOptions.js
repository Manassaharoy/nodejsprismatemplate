const swaggerOptions = {
  definition: {
    info: {
      title: "Nodejs with prisma template",
      version: "1.0.0",
      description:
        "A starter code template for Node.js and Express with prisma ORM, error handling, and response middleware.",
    },
  },
  apis: ["./routes/*.js"],
};

module.exports = swaggerOptions;
