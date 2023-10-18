# [FiveManager](https://ccc.sublaze.com/)

[![FiveManager](./public/images/screenshot/landing-page-screenshot.png)](https://ccc.sublaze.com/)

Introducing an open-source FiveM server management web application, powered by the latest Next.js 13. Experience cutting-edge technology and a user-friendly interface that simplifies server management. With real-time updates, scalability, and a strong focus on security, this platform is designed for gaming communities seeking a robust, future-proofed solution. Join the open-source community and take control of your FiveM servers like never before.

> **Warning**
> This project is still in development and is not ready for production use.
>
> It uses new technologies (server actions, drizzle ORM) which are subject to change and may break your application.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **User Management:** [Auth js](https://authjs.dev)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Email:** [React Email](https://react.email)

## Features to be implemented

- [ ] Authentication with **AuthJS**
- [ ] Newsletter subscription with **React Email** and **Resend**
- [ ] ORM using **Drizzle ORM**
- [ ] Database on **PlanetScale**
- [ ] Validation with **Zod**
- [ ] User subscriptions
- [ ] Blog using **MDX** and **Contentlayer**
- [ ] Checkout with **Stripe Checkout**
- [ ] Admin dashboard with servers, whitelist, stores, subscriptions

## Running Locally

1. Clone the repository

```bash
git clone https://github.com/psnwd/fivemanager.git
```

2. Install dependencies using pnpm

```bash
pnpm install
```

3. Copy the `.env.example` to `.env` and update the variables.

```bash
cp .env.example .env
```

4. Start the development server

```bash
pnpm run dev
```

5. Push the database schema

```bash
pnpm run db:push
```

## How do I deploy this?

Follow the deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## Contributing

Contributions are welcome! Please open an issue if you have any questions or suggestions. Your contributions will be acknowledged. See the [contributing guide](./CONTRIBUTING.md) for more information.

## Contributors

Thanks goes to these wonderful people for their contributions:

<p align="center">
 <a href="https://github.com/psnwd/fivemanager/graphs/contributors">
   <img src="https://contrib.rocks/image?repo=psnwd/fivemanager" />
 </a>
</p>

<p align="center">
 Made with <a rel="noopener noreferrer" target="_blank" href="https://contrib.rocks">contrib.rocks</a>
</p>

## License

Licensed under the MIT License. Check the [LICENSE](./LICENSE) file for details.
