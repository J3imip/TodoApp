import express, { Request, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import cors from 'cors';
import compression from 'compression';

import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

async function start() {
    const app = express();
    app.use(cors());
    app.use(compression());
    const port = 3600;

    app.get("/", (req: Request, res: Response) => {
        res.send("Hello, Jeimip!");
    });


    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    await mongoose.connect("mongodb://localhost:27017/Todo");

    await server.start();

    server.applyMiddleware({app});

    app.listen( port, () => {
        console.log(`server started at http://localhost:${ port }`);
    });
}

start()