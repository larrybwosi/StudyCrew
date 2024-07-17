<img src="public/assets/repo-banner.svg">

<div align="center">
  <img alt="GitHub Issues or Pull Requests" src="https://img.shields.io/github/issues/StudyCrew/StudyCrew?style=flat&color=red">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/StudyCrew/StudyCrew?style=flat&color=lightgreen">
</div>

<br />

Welcome to StudyCrew's GitHub repository! This repository serves as the central hub for [www.studycrew.world](https://www.studycrew.world)'s source code, assets, and content.

## Introduction

StudyCrew is a dedicated online platform designed to foster accessible, collaborative, and engaging educational experiences. We're committed to making learning more inclusive and interactive. If you have any questions or inquiries, feel free to reach out to us at [development@studycrew.world](mailto:development@studycrew.world).

## Getting Started

To begin, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/studycrew/studycrew
```

### Setting up Supabase

StudyCrew uses Supabase as its primary data storage. Ensure you have a local instance or a free Supabase subscription.

### Setting up Authentication with Supabase

For authentication, StudyCrew utilizes Supabase. To set up your local instance, you'll need a Supabase account. Once you've created an account, obtain your credentials and place them in the env.local file:

```js
NEXT_PUBLIC_SUPABASE_URL=https://iqbtyidkfhmqokxopxhf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxYnR5aWRrZmhtcW9reG9weGhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0NTI4NDgsImV4cCI6MjAzNjAyODg0OH0.eo6MVgRbXbdpdUlj4YQo4NJ6D0kE2HRQaLO4VOAOMd4
```

### Sentry Exception Handling

If you would like to handle exceptions like we do, just create a free Sentry.io account and replace the `dsn` key with your own in all of the following files:

- `sentry.client.config.ts`
- `sentry.edge.config.ts`
- `sentry.server.config.ts`

Here is an example:

```typescript
import * as Sentry from '@sentry/nextjs'

Sentry.init({
    dsn: '[YOUR DSN HERE]',
    tracesSampleRate: 1,
    debug: false
})
```

### Running the Project Locally

To run the project locally, you need to:

1. `pnpm i` the required dependencies.

2. `pnpm dev` to launch the development server.

## Contributing

Interested in contributing? Check out our contribution guide to learn how you can get involved and contribute to StudyCrew's development.

When you find an issue that you want to work on, just leave a comment so we can assign it to you! Feel free to tag @JacobHeldt so we notice your comment faster.

Before contributing please read the style guidelines from the [Figma documentation](https://www.figma.com/file/BJG9JmbThqdp8p8IWs7gNG/StudyCrew-Prototypes-(Copy)?type=design&node-id=8%3A98&mode=design&t=uwHVDf3Ihi12lro3-1) carefully.

If you have to create a new component, please study existing components so these are kept consistent with the rest of the project.

If you are unsure about anything, just ask! We are more than happy to help and would love to have you are part of the community. 😊

## Developer Hours

Each week, StudyCrew hosts hour-long meetings for contributors and team members to discuss upcoming changes, planned changes, and general strategy. These "developer hours" occur on **Tuesdays and Fridays at 7AM EST (4AM PST) and 4PM EST (1PM PST), respectively**.

## Join Our Community

[Join our Discord community](https://discord.gg/fxd6uHbdBt) for discussions, support, and more!

Thank you for exploring our repository! We're excited to welcome you to our community.
