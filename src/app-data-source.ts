import { DataSource } from 'typeorm';

export const myDataSource = new DataSource({
    type: 'postgres',

    host: 'localhost',

    port: 5432,

    username: 'postgres',

    password: '12345',

    database: 'twitter',

    entities: ["src/entity/*{.js,.ts}"],

    logging: true,

    synchronize: true,
});
