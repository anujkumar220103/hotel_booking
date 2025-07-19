# 🏨 QuickStay - Hotel Booking Website (MERN Stack)

Welcome to **QuickStay**, a full-stack hotel booking system where users can explore hotels, book rooms, receive confirmation emails, and securely pay via Stripe. Admins can manage hotels and bookings from a dedicated dashboard. Built with the **MERN stack**, integrated with **Clerk Auth**, and deployed on **Vercel**.

🌐 **Live Demo**: [https://quickstay-woad.vercel.app](https://quickstay-woad.vercel.app)

---

<p align="center">
  <img src="https://img.shields.io/badge/LIVE-QuickStay-28a745?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/BUILD-PASSING-brightgreen?style=for-the-badge&logo=githubactions&logoColor=white" />
  <img src="https://img.shields.io/badge/FRONTEND-React-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/BACKEND-Express-black?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/DATABASE-MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/AUTH-Clerk-blue?style=for-the-badge&logo=clerk&logoColor=white" />
  <img src="https://img.shields.io/badge/PAYMENT-Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white" />
  <img src="https://img.shields.io/badge/EMAIL-Nodemailer-yellowgreen?style=for-the-badge&logo=gmail&logoColor=white" />
  <img src="https://img.shields.io/badge/LICENSE-ISC-yellow?style=for-the-badge" />
</p>

---

## 🚀 Features

- 🔐 User authentication & session management with **Clerk**
- 🏨 Browse hotels, view details, and make bookings
- 📩 Booking confirmation email using **Nodemailer**
- 💳 Online payments via **Stripe**
- 🧑‍💼 Admin dashboard to manage hotels & bookings
- 🖥️ Backend with Express & MongoDB
- 🌐 Fully responsive & deployed on **Vercel**

---

## 🧰 Tools & Technologies Used

### 🖼️ Frontend (Vite + React)
- React 19
- React Router DOM
- Tailwind CSS
- Clerk React
- Axios
- React Hot Toast

### 🧠 Backend (Node.js + Express)
- Express.js
- Mongoose (MongoDB)
- Clerk SDK Node + Clerk Express
- Stripe SDK
- Svix (for Clerk Webhooks)
- Multer (file uploads)
- Nodemailer (email confirmation)
- Cloudinary (for image storage)

### 🔧 Dev Tools
- Vite
- ESLint
- Nodemon
- dotenv
- GitHub + Vercel

---

## 🗂️ Project Structure (Client + Server)

📦 root/
├── client/
│ └── src/
│ ├── components/
│ ├── context/
│ ├── pages/
│ │ ├── AllRooms.jsx
│ │ ├── Home.jsx
│ │ ├── MyBookings.jsx
│ │ ├── RoomDetails.jsx
│ │ └── HotelOwner/
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│ ├── .env
│ ├── vite.config.js
│ └── vercel.json
├── server/
│ ├── configs/
│ └── controllers/
│ ├── bookingController.js
│ ├── clerkWebhooks.js
│ ├── hotelController.js
│ ├── roomController.js
│ ├── stripeWebhooks.js
│ └── userController.js
│ ├── server.js
│ └── .env


---

## 📌 Project Roadmap

- 📌 Project Planning & Setup
- ⚙️ Vite + Tailwind + React Project Bootstrapping
- 🧭 Navigation Bar UI
- 🏠 Home Page Components
- 🔐 Clerk Authentication Integration
- 🏨 Hotel List & Details Page
- 📅 Booking Management Page
- 🧑‍💼 Admin Dashboard for Room Management
- 🗃️ MongoDB + Mongoose DB Setup
- 👥 User / Hotel / Booking APIs
- 🔗 Frontend & Backend Connection
- 📧 Email Confirmation Setup
- 💳 Stripe Payment Gateway
- 🚀 Deployment on Vercel

---

## 🧑‍💻 Getting Started (Local Setup)

1. **Clone the repo**
```bash
git clone https://github.com/anujkumar220103/quickstay.git

2. Install frontend & backend dependencies
cd client
npm install

cd ../server
npm install

3. Environment Variables

 Frontend .env
VITE_CLERK_PUBLISHABLE_KEY=your_key

Backend .env
CLERK_SECRET_KEY=your_key
MONGO_URI=your_mongodb_uri
STRIPE_SECRET_KEY=your_stripe_key
EMAIL_USER=your_email
EMAIL_PASS=your_password

4. Start the app
# frontend
cd client
npm run dev

# backend
cd ../server
npm run server

## 👨‍💻 About the Author

Hey there! I'm **Anuj Kumar Gond**
 — a passionate Full Stack Developer who loves building modern, scalable web applications using the **MERN stack**.
 I enjoy turning ideas into real-world projects with clean, efficient code and sleek UI.

- 🔭 Currently working on: More full-stack projects & improving backend architecture
- 🌱 Learning: Advanced DevOps, GraphQL, and scalable system design
- 💬 Ask me about: React, Node.js, MongoDB, Clerk Auth, Stripe, REST APIs
- 📫 Let's connect:

  [![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue)](https://www.linkedin.com/in/anuj-kumar-gond-943204211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
  [![Email](https://img.shields.io/badge/Email-gmail-red?style=flat&logo=gmail)](24204031218@stu.manit.ac.in)

---

💡 *"Building projects is the best way to learn — and sharing them is the best way to grow!"*


#FullStack #MERNStack #React #NodeJS #MongoDB
#HotelBooking #StripePayments #ClerkAuth #Nodemailer
#TailwindCSS #ProjectShowcase #Vite #Vercel #BookingSystem



