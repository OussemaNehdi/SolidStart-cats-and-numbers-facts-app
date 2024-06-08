
import { Database } from '~/types';
import { Kysely, PostgresDialect } from 'kysely';
import pkg from 'pg';
import { APIEvent } from "@solidjs/start/server";
const { Pool } = pkg;
//seperation
//this file is for for inserting only
const dialect = new PostgresDialect({
    pool: new Pool({
      database: 'database',
      host: 'host',
      user: 'owner',
      port: 5432,
      max: 10,
      ssl: true,
      password: 'mypass',
    }),
  });
  
  const db = new Kysely<Database>({
    dialect,
  });

  
  export async function POST(event: APIEvent) {
    try {
      const body = await event.request.json();
      const fact = body.fact;

  
      if (!fact) {
        return new Response('Invalid input', { status: 400 });
      }
  
      await db.insertInto('fact').values({ fact_text: fact, fact_type: 'cat' }).execute();
  
      return new Response(JSON.stringify({ message: "Fact inserted successfully" }), { status: 200 });
    } catch (error) {
      console.error('Error inserting fact:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  }