# Nativee Console

The official customer dashboard for the Nativee AI Language Platform.

Nativee Console allows developers and organizations to manage projects, API Keys, usage, analytics, and account settings.

---

## Features

- Dashboard
- Projects
- API Keys
- Usage
- Analytics
- Settings
- Authentication UI
- Responsive Layout
- Role-based Navigation

---

## Technology

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Axios
- Lucide Icons

---

## Project Structure

```
app/
components/
branding/
constants/
contexts/
hooks/
providers/
services/
types/
utils/
public/
```

---

## Architecture

```
Pages
    │
Components
    │
Hooks
    │
Services
    │
API Client
    │
FastAPI
```

---

## Backend

The Console connects to the Nativee FastAPI backend.

```
api.nativee.in
```

Current backend modules

- Projects
- API Keys
- Dashboard
- Usage
- Analytics
- Identity (planned)
- Authentication (planned)

---

## Current Status

### Completed

- Console Layout
- Navigation
- Dashboard UI
- Projects UI
- API Keys UI
- Usage UI
- Analytics UI
- Settings UI
- Login UI
- Register UI
- Forgot Password UI
- Design System
- Network Layer
- Services
- Hooks

### In Progress

- JWT Authentication
- Backend Integration

---

## Development

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Build

```bash
npm run build
```

---

## License

Copyright © Nativee.
All rights reserved.