# Multiplayer realtime — architecture proposal (NOT IMPLEMENTED)
Status: design only. Do not present offline alpha as multiplayer-ready.

## Goal
2–5 players in a shared room; authoritative server validates all actions; reconnection supported. Never trust client-reported dice or rewards.

## Recommended deployment
- Existing Vercel site serves static UI at `/games/hai-trinh/`.
- Realtime API: Cloudflare Durable Objects (one object per room) with WebSocket Hibernation; or another server with persistent WebSockets and durable state. Vercel static hosting alone does not supply this room state.
- API URL set via environment config; CORS restricted to trusted production and preview origins.
- Room creation returns random high-entropy join code and player reconnect token. Do not put reconnect token in public invitation URL.
- Server owns shuffled deck, dice rolls, turn order, hidden card state, actions, scores, game-end result.
- Clients send intents only: `join`, `start`, `move`, `fish`, `explore`, `sell`, `buy`, `quest`, `display`, `rest`, `pass`.
- Server responds with `snapshot` (redacted per player), `event` (sequence number), `error` (validation), `ack` (action id).
- Prevent double-spend and duplicated actions using per-player monotonic sequence numbers / idempotency keys.
- Validate ownership, active player, dice indices, inventory caps, action preconditions, market availability, and day phase.
- Store snapshots and event log; restore room after disconnect and avoid losing the state if host closes browser.
- Security: per-room rate limits, payload validation, origin checking, no secrets in repo, expiry/cleanup, test unauthorized actions.

## Release gates
1. Offline engine fully extracted and unit tested, including 6-day deterministic simulation.
2. Browser E2E tests for 2/5 players, reconnect/local save, mobile widths.
3. Real multiplayer server implementation and tests with 2–5 simulated sockets.
4. Deploy isolated Vercel Preview + realtime staging backend; inspect logs and smoke test.
5. PR review; explicit approval before merge to `main`.

## Known alpha limitations
The existing UI is offline pass-and-play, with browser localStorage only. It is not suitable for online multiplayer or multi-device synchronization. The alpha uses temporary choices for Gió Thuận and replacing equipment, subject to design approval.
