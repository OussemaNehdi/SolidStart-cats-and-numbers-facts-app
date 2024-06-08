import { APIEvent } from "@solidjs/start/server";
import { createResource } from "solid-js";

//returns this object
type CatFact = {
    fact: string;
    length: number;
}

async function fetchCatFact(): Promise<CatFact> {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    console.log("xAPI response data:", data); // Log the response data
    return data;
    
}

export async function GET(event: APIEvent) {
    try {
        const fact = await fetchCatFact();
        console.log(fact)
        return fact;
    } catch (error) {
        console.error("Error fetching cat fact:", error);
        return { fact: "Failed to fetch cat fact", length: 0 };
    }
}