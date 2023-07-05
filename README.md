# About

This repo is about displaying analytics for students doing the bootcamp.
This app has three main components:

- A REST API (HTTP POST) that accepts a payload posted by Github Webhooks
- Sveltekit app to display the analytics
- A script that should be run at the beginning of a new cohort

## Setting up the environment

This app is intended to be live all the time, since github will constantly trigger the Webhook to your API route. So it's recommended to deploy the app to a hosting service.

### .env

1. Generate a new github token and assign it to `GITHUB_TOKEN`
2. Assign the name of the cohort to `GITHUB_ORG`
3. Create a remote database and assign it to `DATABASE_URL`

```bash
npm i
npm run dev
```

## TODO Tasks

- Use @tanstack/table to add more interactivity (clicking columns to sort)
- Add charts using svg and svelte
