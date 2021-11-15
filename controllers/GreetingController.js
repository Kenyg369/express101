import { generateGreeting } from "../services/GreetingServie";

export function handleGreeting(req, res) {
    // get input from req
    // validation
    const name = req.params["name"]

    // run logics
    // xxx service
    const greeting = generateGreeting(name)

    // send response
    res.send(greeting)
}