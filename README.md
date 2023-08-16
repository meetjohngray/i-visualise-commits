# About

This repo is about displaying analytics for students doing the bootcamp.
This app has three main components:

- A REST API (HTTP POST) that accepts a payload posted by Github Webhooks
- Sveltekit app to display the analytics
- A script that should be run at the beginning of a new cohort

## Setting up the environment

This app is intended to be live all the time, since github will constantly trigger the Webhook to your API route. So it's recommended to deploy the app to a hosting service. Railway works good for this.

### .env

1. Generate a new github token and assign it to `GITHUB_TOKEN`
2. Assign the name of the cohort to `GITHUB_ORG`
3. Create a remote database and assign it to `DATABASE_URL`

```bash
npm i
npm run dev
```
- Pick a custom domain for the Cohort in Railway
- Set Up Web Hooks in cohort GitHub org using that custom domain
- Run script: this sets up the web hook to fire whenever someone in the org makes a push

`npx ts-node --esm src/script.ts`

The results will look something like this...
```
(node:76991) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
{ data: { organization: { membersWithRole: [Object] } } }
👥 26 members found
🗑  Deleted all data
👋 AhmedAnwarHafez 7552088 ()
👋 meetjohngray 7808672 ()
etc...
```
## TODO Tasks

- Use @tanstack/table to add more interactivity (clicking columns to sort)
- Add charts using svg and svelte
