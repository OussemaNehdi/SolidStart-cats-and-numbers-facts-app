
import styles from '/src/components/styles.module.css';

import { createEffect, createSignal } from 'solid-js';


type CatFact = {
    fact: string,
    length: number
}


export default function CatFacti() {
    const [myFact, setMyCatFact] = createSignal({fact : "Loading..." , length: 12});
    console.log("LOG 1")

    const fetchCatFact = async () => {
        await console.log("LOG 2")
        const res = await fetch("http://localhost:3000/api/getCatFact");
        const data = await res.json();
        setMyCatFact(data);
        
    };
    
    const saveCatFact= async () => {
        const res = await fetch("http://localhost:3000/api/insertFact/insertingTheFact", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(myFact())
        });
        if (res.ok) {
            console.log("Cat fact saved successfully!");
        } else {
            console.log("Failed to save cat fact.");
        }
        
    }
    
    
    createEffect(() => {
        console.log("LOG 5")
        fetchCatFact();
        console.log("LOG 3")
    });
    console.log("LOG 4")
    return (
        <main class={styles.main}>
            <h1>Cat Fact</h1>
            <p>{myFact().fact}</p>
            <button onClick={fetchCatFact}>Get a new fact</button>
            <button onClick={saveCatFact}>Save cat fact</button>
            
        </main>
    );
}
