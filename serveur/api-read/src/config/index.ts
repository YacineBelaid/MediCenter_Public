import { config } from 'dotenv';
console.log(`.env.${process.env.NODE_ENV || 'development'}`);

config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

export const { NODE_ENV, PORT, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;
