import { createSignal } from "solid-js";
import styles from '/src/components/styles.module.css';

type NumberFact = {
    text: string,
    number: number,
    found: boolean,
    type: string
}

async function getNumberFact(number: number): Promise<string> {
    console.log(number)
    const res = await fetch(`http://localhost:3000/api/getNumberFact/${number}`);
    const data: NumberFact = await res.json() as NumberFact;
    await console.log(data)
    return await data.text;
}

export default function NumberFacti() {
    const [myfact, setMyfact] = createSignal<string>("");
    const [number, setNumber] = createSignal<number>(0);

    const handleClick = async () => {
        const fact = await getNumberFact(number());
        console.log(fact)
        setMyfact(fact);
    };

    const handleInput = (e: Event) => {
        const value = parseInt((e.target as HTMLInputElement).value, 10);
        if (!isNaN(value)) {
            setNumber(value);
        }
    };

    return (
        <main class={styles.main}>
            <h1>Number Fact</h1>
            <div>
                <input type="text" id="num" value={number()} onInput={handleInput} placeholder="Enter a number" />
                <button onClick={handleClick}>Get Fact</button>
                
            </div>
            <p>{myfact()}</p>
        </main>
    );
}
