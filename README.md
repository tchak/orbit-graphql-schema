# orbit-graphql-schema [![Build Status](https://github.com/tchak/orbit-graphql-schema/workflows/CI/badge.svg)](https://github.com/tchak/orbit-graphql-schema/actions)

GraphQL schema builder for Orbit.

## Installation

Install with yarn:

```
yarn add orbit-graphql-schema
```

## Usage

```javascript
import { ApolloServer } from 'apollo-server';
import { Schema } from '@orbit/data';
import { makeExecutableSchema } from 'orbit-graphql-schema';
import SQLSource from 'orbit-sql';

const schema = new Schema({
  models: {
    author: {
      attributes: {
        name: { type: 'string' }
      },
      relationships: {
        books: {
          type: 'hasMany',
          model: 'book',
          inverse: 'author'
        }
      }
    },
    book: {
      attributes: {
        title: { type: 'string' }
      },
      relationships: {
        author: {
          type: 'hasOne',
          model: 'author',
          inverse: 'books'
        }
      }
    }
  }
});

const source = new SQLSource({
  schema,
  knex: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
});

const server = new ApolloServer({
  schema: makeExecutableSchema(schema),
  context: {
    source
  }
});

server.listen();
```

## License

MIT License (see LICENSE for details).
