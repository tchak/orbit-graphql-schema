import { Schema } from '@orbit/data';
import { GraphQLSchema } from 'graphql';

import { makeExecutableSchema } from '../src';

QUnit.module('makeExecutableSchema', function (hooks) {
  let schema: Schema;
  let graphqlSchema: GraphQLSchema;

  hooks.beforeEach(async function () {
    schema = new Schema({
      models: {
        user: {
          attributes: {
            name: { type: 'string' },
          },
        },
      },
    });

    graphqlSchema = makeExecutableSchema(schema);
  });

  QUnit.test('it exists', function (assert) {
    assert.ok(graphqlSchema);
    assert.ok(graphqlSchema instanceof GraphQLSchema);
  });
});
