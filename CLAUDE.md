# Nativee Console Context

This project is the customer dashboard for the Nativee platform.

Architecture

```
Component

↓

Hook

↓

Service

↓

API Client

↓

FastAPI
```

Never

- call APIs inside components
- duplicate business logic
- hardcode endpoints

Always

- use hooks
- use services
- use constants
- use TypeScript