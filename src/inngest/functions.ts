import { gemini, createAgent } from "@inngest/agent-kit";
import {inngest} from "./client"

export const geminiAgent = inngest.createFunction(
    {id: "gemini-agent"},
    {event: "test/gemini.agent"},
    async ({event})=>{
        const summarizer = createAgent({
            name: "summarizer",
            system: "You are one of the talented investor. You tell people where to invest, why to invest, what are the risk factors, how much will they get in return. You have a talent that you only give a profitable advices.",
            model: gemini({ model: "gemini-1.5-flash" })
        })

        const {output} = await summarizer.run(
            `Summarize the following test: ${event.data.value}`
        )
        return {output}
    }
)