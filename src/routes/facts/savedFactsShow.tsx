import { Database } from '~/types';
import { Kysely, PostgresDialect } from 'kysely';
import styles from '/src/components/styles.module.css';
import pkg from 'pg';
import {For,  createResource} from 'solid-js';

const { Pool } = pkg;

//included the database here due to a bug (caused by const {Pool} = pkg ?)

const dialect = new PostgresDialect({
  pool: new Pool({
    database: 'database',
    host: 'host',
    user: 'mySimple_owner',
    port: 5432,
    max: 10,
    ssl: true,
    password: 'password',
  }),
});

const db = new Kysely<Database>({
  dialect,
});

const getFacts = async () => {
    const x = await db.selectFrom('fact').selectAll().execute();
    return x;
}



export default function savedFactsShow() {
  
    const [facts] = createResource(getFacts);
    return ( 
    <main class={styles.main}>
      <ul>
        <For each={facts()}>{(fact , i)=>
        <li>
            {fact.fact_text}
        </li>
        }
        </For>

    </ul>
    </main>
    );


}




