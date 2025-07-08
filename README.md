# StudentMart - Campus E-Commerce Platform

A modern, student-focused e-commerce platform built with Next.js, NestJS, and TypeScript.

## 🎯 Project Overview

StudentMart is designed specifically for students, offering a seamless shopping experience for textbooks, electronics, dorm essentials, and more. The platform features a psychology-driven color scheme and user experience optimized for the student demographic.

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom color palette
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Hosting**: Vercel (recommended)

### Backend
- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL (Neon.tech)
- **ORM**: TypeORM
- **Authentication**: JWT + OTP (SMS/Email)
- **Validation**: Class-validator
- **Hosting**: Render/Railway

### Additional Services
- **File Storage**: Cloudinary
- **SMS/Email**: Brevo
- **Caching**: Redis (Upstash)
- **Monitoring**: Sentry (future)

## 🎨 Color Psychology

Our color scheme is carefully chosen to resonate with students:

| Component | Color | Psychology |
|-----------|-------|------------|
| Primary | #4F46E5 (Indigo) | Trust, education, confidence |
| Accent | #10B981 (Emerald) | Energy, success, action |
| Background | #F9FAFB (Gray 50) | Clean, non-fatiguing |
| Text Dark | #111827 (Gray 900) | High readability |
| Success | #34D399 (Green 400) | Positive feedback |
| Error | #F87171 (Red 400) | Clear warnings |
| Highlight | #FBBF24 (Amber 400) | Deals and promotions |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database
- Redis (optional for caching)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/studentmart

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d

# CORS
FRONTEND_URL=http://localhost:3000

# File Upload (Cloudinary)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# SMS/Email (Brevo)
BREVO_API_KEY=your-brevo-api-key

# Redis (Upstash)
REDIS_URL=your-redis-url

# Server
PORT=3001
NODE_ENV=development
```

Then run the backend:

```bash
npm run start:dev
```

The API will be available at `http://localhost:3001/api/v1`

## 📁 Project Structure

```
SSM/
├── frontend/                 # Next.js frontend
│   ├── src/
│   │   ├── app/             # App router pages
│   │   ├── components/      # Reusable components
│   │   ├── lib/             # Utilities and config
│   │   ├── providers/       # Context providers
│   │   └── types/           # TypeScript types
│   └── public/              # Static assets
├── backend/                  # NestJS backend
│   ├── src/
│   │   ├── users/           # User management
│   │   ├── products/        # Product catalog
│   │   ├── categories/      # Product categories
│   │   ├── orders/          # Order management
│   │   ├── auth/            # Authentication
│   │   └── common/          # Shared utilities
│   └── test/                # E2E tests
└── README.md
```

## 🔧 Key Features

### Frontend Features
- ✅ Modern, responsive design
- ✅ Student-focused UI/UX
- ✅ Product catalog with filtering
- ✅ Shopping cart functionality
- ✅ User authentication
- ✅ Order tracking
- ✅ Search functionality
- ✅ Product reviews and ratings

### Backend Features
- ✅ RESTful API
- ✅ JWT authentication
- ✅ OTP verification (SMS/Email)
- ✅ Product management
- ✅ Order processing
- ✅ User management
- ✅ File upload handling
- ✅ Data validation

## 🛠️ Development

### Running in Development

1. **Start the backend:**
   ```bash
   cd backend
   npm run start:dev
   ```

2. **Start the frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001/api/v1

### Database Migrations

```bash
cd backend
npm run migration:generate -- src/migrations/InitialMigration
npm run migration:run
```

### Testing

```bash
# Frontend tests
cd frontend
npm run test

# Backend tests
cd backend
npm run test
npm run test:e2e
```

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables
3. Deploy automatically on push

### Backend (Render/Railway)
1. Connect your repository
2. Set environment variables
3. Deploy automatically on push

## 📝 API Documentation

The API documentation will be available at `/api/v1/docs` when the backend is running.

### Key Endpoints

- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `GET /api/v1/products` - Get products
- `POST /api/v1/orders` - Create order
- `GET /api/v1/orders` - Get user orders

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@studentmart.com or create an issue in the repository.

---

**Built with ❤️ for students everywhere** 