# From The Other Side

A small Node.js app for recording and viewing paranormal sightings.

## Features

- View sightings on the `Sightings` page
- Upload a new sighting from a form
- Persist sightings to `data/data.json`
- Emit a `sighting-added` event on new uploads

## Tech Stack

- Node.js (ES modules)
- Vanilla HTML/CSS/JavaScript

## Project Structure

- `server.js`: HTTP server and route entry
- `handlers/routeHandlers.js`: API handlers (`GET /api`, `POST /api`)
- `events/sightingEvents.js`: EventEmitter setup
- `utils/`: helpers for parsing, sanitizing, persistence, and responses
- `upload-sighting.html` + `upload-sighting.js`: form UI and submit logic
- `sightings.html` + `index.js`: sightings list UI

## Prerequisites

- Node.js 18+
- npm

## Installation

```bash
npm install
```

## Run

```bash
npm start
```

Server runs on:

- `http://localhost:8000`

## API

### `GET /api`

Returns all sightings as JSON.

### `POST /api`

Creates a new sighting.

Request body example:

```json
{
  "location": "London, UK",
  "timeStamp": "15 April 2026, 21:30",
  "title": "Footsteps in the Hall",
  "text": "I heard heavy footsteps upstairs at 2AM."
}
```

Successful response:

- Status `201`
- JSON body with the saved sighting

## Notes

- Input is sanitized before being stored.
- The app emits a `sighting-added` event after a successful new sighting submission.

## License

ISC
