# orbit-graphql-schema ![Build Status](https://github.com/tchak/orbit-graphql-schema/workflows/CI/badge.svg)

GraphQL schema builder for Orbit.

## Installation

Install with yarn:

```
yarn add orbit-graphql-schema
```

## Usage

```javascript
import { makeExecutableSchema } from 'orbit-graphql-schema';
import { Schema } from '@orbit/data';

const schema = new Schema({
  models: {
    user: {
      attributes: {
        name: { type: 'string' }
      }
    }
  }
});

makeExecutableSchema(schema);
```

## License

MIT License (see LICENSE for details).
