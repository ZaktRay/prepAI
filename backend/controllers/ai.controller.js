import Together from "together-ai";
import {parseQuestion} from "../utils/parseQuestion.js";

const generateResponse = async (req, res) => {
    try {
        const { prompt } = req;
        console.log(prompt);
        if (!prompt) {
            return res.status(400).json({
                success: false,
                message: 'empty prompt'
            })
        }

        const together = new Together();

        const response = await together.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `You are a helpful study assistant AI.
Your job is to read the notes provided by the user and generate relevant study questions.
The questions should test understanding and recall, make them multiple choice and after the question provide the answer as well.
Do not add unrelated information. Only use what the user gives you.
Generate at least ten questions.`
                },
                {
                    role: "user",
                    content: `${prompt}`
                }
            ],
            model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free"
        });

        console.log(response.choices[0].message.content);

        return res.status(200).json({
            success: true,
            message: parseQuestion(response.choices[0].message.content),
        })

    } catch (err) {
        console.log(err);
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

export default generateResponse;