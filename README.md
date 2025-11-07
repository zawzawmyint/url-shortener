# URL Shortener

A modern, full-stack URL shortening application built with Next.js 15, React 19, and Prisma.

## Overview

This repository contains a complete URL shortening service that allows users to convert long URLs into short, memorable links. The application is built using **Next.js 15**, **React 19**, and **Prisma** for database management, featuring a clean and intuitive user interface.

## Technologies

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Database**: [Prisma](https://www.prisma.io/) with PostgreSQL
- **Styling**: [Emotion](https://emotion.sh/)

## Features

- **URL Shortening**: Convert long URLs into short, memorable codes
- **Styling**: Clean, responsive design with Emotion
- **Database Integration**: Persistent storage with Prisma ORM

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)

- pnpm or yarn or npm

### Set up environment variables

DATABASE_URL="file:./dev.db" # For PostgreSQL

# DATABASE_URL="\*\*\*" # For PostgreSQL

# Optional: Custom domain for short URLs

NEXT_PUBLIC_DOMAIN="http://localhost:3000"

### Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git https://github.com/zawzawmyint/url-shortener.git
   cd url-shortener
   ```

2. **Install dependencies**:

   ```bash
   pnpm install

   ```

3. **Start the development server**:

   ```bash
   pnpm run dev
   ```

4. **Build the project for production**:
   ```bash
   pnpm run build
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. **Shorten a URL**: Enter a long URL in the input field and click "Shorten"
2. **Copy Short URL**: Click the copy button to copy the shortened URL
3. **Track History**: View Home page to see your shortened URLs history
4. **Update Long URL**: Update the original URL for a shortened URL
5. **Delete Short URL**: Delete a shortened URL from the history
6. **Share on Social Media**: Share your shortened URL on social media platforms

## Database Schema

The application uses Prisma with the following main entities:

- **Url**: Stores the original URL, short code, and history data

## API Endpoints

- `POST /api/shorten` - Create a new short URL
- `PUT /api/shorten/[shortCode]` - Update the original URL for a shortened URL
- `DELETE /api/shorten/[shortCode]` - Delete a shortened URL from the history

## Live Demo

Check live demo at [https://z-usnr.vercel.app/](https://z-usnr.vercel.app/)
