const knex = require('./pg-connection');

const search = async () => {
  const json = await knex.raw(` SELECT '{"bar": "baz", "balance": 7.77, "active": false}'::json;  `);
  const jsonb = await knex.raw(` SELECT '{"bar": "baz", "balance": 7.77, "active":false}':: jsonb; `);

  console.log(json);
  console.log(jsonb);
};

search();