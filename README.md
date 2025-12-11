# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

Chatbot deployment
------------------

The Proteciot Assistant requires a server runtime for the chat API. For reliable operation in production choose one of the following options:

- Deploy the Next.js app to a server-capable host (recommended):
	- Vercel: push this repo to GitHub and import the project in Vercel. The built-in Pages API route `src/pages/api/chat.ts` will run as a serverless function and the chatbot will work using the internal `/api/chat` endpoint.
	- Other Node/Serverless hosts that support Next.js API routes.

- If you must use a fully static host (no server/runtime):
	- Deploy the chat API separately as a serverless function (Vercel Function, Netlify Function, Cloud Function, etc.). Then set the environment variable `NEXT_PUBLIC_CHAT_API_URL` to the external endpoint so the client calls that instead of the internal API.

Examples

1) Deploy to Vercel (recommended)

```bash
# push branch to GitHub then
# from Vercel dashboard import the repo and deploy
```

2) Deploy chat as a separate function

```bash
# Create a serverless function that accepts POST /chat and returns the chat response
# Set NEXT_PUBLIC_CHAT_API_URL=https://your-function.example/chat in your Next.js deployment
```

Local testing

- `npx next build` builds the app and collects pages. If you want to test server routes locally, run `npx next start` after building (this runs a Node server that supports API routes).

Notes
- Static exporting the app (`output: 'export'`) disables internal Pages API routes when you run a pure `next export` on some hosts. Use a server-capable deployment for the chat API, or host the API separately and set `NEXT_PUBLIC_CHAT_API_URL`.
