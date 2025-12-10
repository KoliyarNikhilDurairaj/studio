'use server';
/**
 * @fileOverview A chatbot AI flow for Proteciot.
 *
 * - chat - A function that handles the chat interaction.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({
        text: z.string()
    }))
  })),
  message: z.string().describe('The user\'s message.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  message: z.string().describe('The chatbot\'s response.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatPrompt',
  input: {schema: ChatInputSchema},
  output: {schema: z.object({ message: z.string() })},
  prompt: `You are a helpful and friendly assistant for a website called Proteciot.
  
  Proteciot is an educational platform founded by Koliyar Nikhil Durairaj, an IoT Systems Engineer.
  Its mission is to mentor and empower engineering students in the field of Internet of Things (IoT) for free.
  
  Your personality should be encouraging, knowledgeable, and slightly informal.
  Keep your answers concise and to the point.
  
  Here's the conversation history:
  {{#each history}}
    {{#if (eq role 'user')}}
        User: {{#each content}}{{text}}{{/each}}
    {{else}}
        Assistant: {{#each content}}{{text}}{{/each}}
    {{/if}}
  {{/each}}
  
  Here's the new user message:
  User: {{{message}}}
  
  Based on this, what is your response?
  Assistant:`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return { message: output!.message };
  }
);
