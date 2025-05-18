+++
date = '2025-05-17'
draft = false
title = 'Deploy Your First Bun App — Railway & Fly.io'
description = "Here is how to deploy to production using Fly.io and Railway."
categories = ["GRC", "ISO 27001"]
+++

Let’s say you just built a small REST API using Bun. After testing it thoroughly, the next step is making it available to the public. But how do you do that? There are a lot of deployment options out there where as long as you have a Dockerfile you can be up and running pretty fast but what I want to focus on in the article is starting from a place where maybe this is your first time deploying an app.

## Fly.io

I want this to be as easy and straightforward as possible, which is why we’re checking out two very promising new projects: Fly.io and Railway.

[I'm an inline-style link](https://www.google.com) For this deployment, I will be using a lot of the code that we wrote in this article. This is a small blogging API that has endpoints for Posts and Users. The only difference is I will be switching out Prisma for Drizzle ORM as there are some issues with Bun and Prisma at the time of writing this.

Before we touch on each platform, one step we need to ensure we do is generating the migrations for our project. When we run migrations on production, we want to have them already generated. To do this, we simply just run bun run generate in our local environment to generate the drizzle folder. If this is your first time dealing with migrations using Drizzle, check out the video I made on the ORM here.
