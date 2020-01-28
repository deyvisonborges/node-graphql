let express = require('express');
let express_graphql = require('express-graphql');
let { buildSchema } = require('graphql');

// Schema
let schema = buildSchema(`
    type Query {
        message: String
    }
`);
// Mapeamento
let root = {
    message: () => 'Hello World!'
};


let app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(3000, () => console.log('Express GraphQL Server Now Running On localhost:3000/graphql'));