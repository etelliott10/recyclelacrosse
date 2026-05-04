# RecycleLacrosse — AI Agent Design

> Embedded chat assistant for the RecycleLacrosse website.
> Helps visitors route their gear, answer FAQs, and guide schools/leagues requesting donations.

---

## Purpose

Answer questions, route gear to the right program, and reduce the back-and-forth
Elijah needs to handle manually — so he can focus on operations.

---

## Agent Behaviors

### 1. Gear Routing
Help users figure out which program their gear qualifies for.

| User input | Agent routes to |
|---|---|
| "My shaft cracked / snapped" | Melt & Remake OR Workout Handle |
| "I have a broken head" | Melt & Remake |
| "Full bag of gear, still good" | Direct Donation |
| "Old helmet, used but works" | Direct Donation |
| "Mix of broken and usable stuff" | Explain multiple paths |

### 2. FAQ Responder
- How do I submit gear? → Fill out form, Elijah contacts you
- Do I get a tax receipt? → Depends on LLC vs. nonprofit (note current status)
- How far do you ship? → Utah-based; contact for details
- How much are workout handles? → $25
- When does melting happen? → Once enough scraps are collected
- Can a school request gear? → Yes, use the donate form with a note

### 3. School / League Helper
Walk coaches or ADs through requesting gear:
- What types of gear are available
- How to fill out the form with a note for bulk/team requests
- Expected turnaround

---

## Implementation Plan

### Stack
- **Model:** `claude-sonnet-4-6` via Anthropic API
- **Framework:** Next.js App Router API route with streaming
- **UI:** Radix UI `Dialog` or slide-in `Sheet` — floating chat button
- **Memory:** Stateless per session (no user data stored)

### API Route
```typescript
// app/api/chat/route.ts
import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `
You are the RecycleLacrosse assistant — a friendly, concise helper for a Utah-based
lacrosse gear recycling program founded by Elijah Elliott.

Programs:
1. Melt & Remake: broken shafts/heads collected, melted in batches when enough scraps
   accumulate, remolded into new gear, donated to players and schools.
2. Workout Handles: broken shafts cut to grip length, sold for $25 each.
3. Direct Donation: usable gear cleaned and donated to Utah kids and school programs.

How submissions work: visitors fill out the form on the site and Elijah contacts
them within 2-3 business days with drop-off or shipping details.

Keep answers short (2-4 sentences max). Be warm but efficient.
If you don't know something, say so and suggest they submit the form.
`;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const client = new Anthropic();

  const stream = await client.messages.stream({
    model: "claude-sonnet-4-6",
    max_tokens: 512,
    system: SYSTEM_PROMPT,
    messages,
  });

  return new Response(stream.toReadableStream());
}
```

### Chat UI Component (outline)
```tsx
// components/ChatWidget.tsx
"use client";
// Floating button (bottom-right) → opens Radix Dialog
// Message list with user + assistant bubbles
// Input box + send button
// Calls /api/chat with full message history
// Streams response token by token
```

---

## Roadmap

- [ ] Get Anthropic API key and add to `.env.local` as `ANTHROPIC_API_KEY`
- [ ] Build `app/api/chat/route.ts` streaming endpoint
- [ ] Build `ChatWidget` component with Radix UI Dialog
- [ ] Wire up streaming response display
- [ ] Test gear routing scenarios
- [ ] Deploy and monitor

---

## Privacy

- No user data stored beyond the browser session
- No PII collected in the chat flow
- Optional: anonymized transcript logging for prompt tuning
