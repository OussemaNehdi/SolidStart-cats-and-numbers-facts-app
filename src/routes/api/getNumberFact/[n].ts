import { APIEvent } from "@solidjs/start/server";
import { createResource } from "solid-js";

//returns this object
type NumberFact = {
    fact : string,
    number : number,
    found : boolean,
    type : string
}

async function fetchNumberFact(num : number): Promise<NumberFact> {
    const res = await fetch("http://numbersapi.com/"+ num.toString() + "/trivia?json");
    const data = await res.json();
    console.log("xAPI response data:", data); // Log the response data
    return data as NumberFact;
    
}

export async function GET(event: APIEvent) {
    try {
        const myNumber : number = parseInt(event.params.n);
        const fact = await fetchNumberFact(myNumber);
        console.log(fact)
        return fact;
    } catch (error) {
        console.error("Error fetching number fact:", error);
        return { fact: "Failed to fetch number fact", number: 0, found: false, type: "trivia" };
    }
}