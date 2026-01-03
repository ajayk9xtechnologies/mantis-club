# 🍸 Mantis Dubai - Premium Nightclub & Lounge

Mantis Dubai is a high-end, cinematic web experience for one of Dubai's most exclusive nightlife destinations located in DIFC. Built with a focus on immersive visual storytelling, smooth performance, and robust content management.

![Mantis Dubai](https://www.mantisdubai.com/og-mantis.jpg)

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform) + [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Smooth Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Mapping**: [Leaflet.js](https://leafletjs.com/) (react-leaflet)

## ✨ Key Features

- **Cinematic Experience**: Immersive video backgrounds with custom GSAP-driven entrance animations and "curtain" reveals.
- **Scroll-Driven Storytelling**: Interactive sections using ScrollTrigger for pinning, parallaxes, and layered reveals.
- **Dynamic CMS**: A custom blog engine powered by MongoDB, featuring dynamic routing and SEO-optimized pages.
- **Admin Portal**: A secure dashboard (`/mc-admin`) for managing blogs, categories, and tags.
- **Performance Optimized**: Fine-tuned navigation cleanup handling GSAP ScrollTrigger instances to prevent memory leaks and DOM errors.
- **SEO & Social Media**: Comprehensive metadata, Open Graph integration, and pixel-perfect favicon sets.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB instance (Atlas or local)
- Environment variables configured in `.env.local`:
  ```env
  MONGODB_URI=your_mongodb_connection_string
  ```

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/mantis-club.git
    cd mantis-club
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

- `app/`: Next.js App Router directory.
  - `api/`: Backend routes (Blog CRUD, Stats).
  - `blogs/`: Dynamic blog listing and detail pages.
  - `mc-admin/`: Admin dashboard and management screens.
  - `components/`: Modular UI, Section, and Navigation components.
- `models/`: Mongoose schemas (Blog, Category, Tag).
- `lib/`: Utility functions (DB connection, API helpers).
- `public/`: Static assets (Videos, Fonts, Images).

## 📄 License

Part of the Mantis Dubai Digital Experience. All rights reserved.