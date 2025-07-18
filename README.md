# Portfolio V2

## Overview

This is a personal portfolio web application designed to showcase my work, skills, and background as a developer. It features a clean, responsive design with smooth navigation between the main sections: Homepage, Projects, and About.

**My Portfolio WebApp** allows you to:

-  Showcase professional and personal projects with content managed through Strapi CMS.

-  Serve media assets (like logos and screenshots) through a CDN for performance and speed.

-  Share my story, experience, and skills using content structured in a PostgreSQL database behind Strapi.

This is a fullstack portfolio application that separates content from presentation. All dynamic content (such as project details, tech stack, or bio) is created and managed in Strapi, which connects to a PostgreSQL database.

**Design Overview:**

I have created detailed UX / UI design assets using Figma to guide the development process. These include a style guide, visual mockups and prototypes that showcase the actual design and user experience of the application.

Access the Design Files:

You can explore both the prototypes and the design frames through the following links:

Desktop Frames Design:
https://www.figma.com/design/IOdrQXV0OQiVj2Oho3th0r/Portfolio-V2?node-id=0-1

Mobile Frames Design:
https://www.figma.com/design/IOdrQXV0OQiVj2Oho3th0r/Portfolio-V2?node-id=147-2

Desktop Prototype:
https://www.figma.com/proto/IOdrQXV0OQiVj2Oho3th0r/Portfolio-V2?page-id=0%3A1&node-id=220-531&viewport=99%2C145%2C0.37&t=iSkMiKyoOFnyzUVs-1&scaling=contain&content-scaling=fixed

Mobile Prototype:
https://www.figma.com/proto/IOdrQXV0OQiVj2Oho3th0r/Portfolio-V2?page-id=147%3A2&node-id=631-1219&p=f&viewport=380%2C201%2C0.12&t=d5A15I9Nk7R5vMF8-1&scaling=min-zoom&content-scaling=fixed

**Code Overview:**

This portfolio project is a fullstack web application that merges design experimentation with a scalable architecture. It integrates modern technologies like Strapi, PostgreSQL, Node.js, Strapi, Next.js, Cloudinary, and SCSS, making it a technical showcase and a creative expression. Key highlights include:

Strapi (Headless CMS powered by Node.js):
All dynamic content is managed through Strapi, a headless CMS that runs on Node.js. It connects to a PostgreSQL database and provides a fully customizable admin panel along with a RESTful API. The frontend, built with Next.js, fetches data directly from Strapi, eliminating the need to build a custom backend from scratch while still maintaining full control over the data structure and delivery.

Next.js (Frontend Framework):
Built with Next.js for its hybrid rendering capabilities — combining server-side rendering (SSR), static site generation (SSG), and built-in API routes — to enhance performance, SEO, and scalability.

Cloudinary (Media CDN):
Images are stored and delivered through Cloudinary, which handles on-the-fly optimization, responsive resizing, and fast delivery via CDN — all crucial for a smooth user experience.

Unique Design and Color Scheme:
The UI embraces a modern, bold visual style that sets the tone for the personal brand. It’s a space for experimentation, featuring a fresh layout and custom color palette to stand out from traditional portfolio designs.

SCSS + BEM (Block Element Modifier):
Styling is handled through SCSS, using BEM naming conventions to create a modular, scalable, and easy-to-read stylesheet structure. SCSS also brings in features like nesting, variables, mixins, and partials for enhanced control and reusability.
