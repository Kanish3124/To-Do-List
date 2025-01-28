# 📝 To-Do List App

A To-Do List web application built with Node.js, Express, EJS, and PostgreSQL. Users can add, edit, and delete tasks with a user-friendly interface.

---

## 📂 Project Structure
```
project-directory
├── public
│   └── css
│       └── styles.css       # Styles for the application
├── views
│   ├── index.ejs            # EJS template for the main page
├── index.js                   # Main application file
├── package.json             # Project dependencies
├── .env                     # Environment variables
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or later)
- [PostgreSQL](https://www.postgresql.org/) (v12 or later)

---

### 2️⃣ Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and configure the following variables:
   ```env
   PG_USER=your_postgresql_user
   PG_HOST=your_postgresql_host
   PG_DATABASE=your_postgresql_database
   PG_PASSWORD=your_postgresql_password
   PG_PORT=your_postgresql_port
   ```

---

### 3️⃣ Database Setup

1. Start the PostgreSQL service and log in to the PostgreSQL shell:
   ```bash
   psql -U <your_user>
   ```

2. Create the database:
   ```sql
   CREATE DATABASE your_database;
   ```

3. Switch to the new database:
   ```sql
   \c your_database;
   ```

4. Create the `items` table:
   ```sql
   CREATE TABLE items (
       id SERIAL PRIMARY KEY,
       title VARCHAR(255) NOT NULL
   );
   ```

---

## 🛠️ Usage

1. Start the application:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

3. Use the interface to:
   - Add new tasks
   - Edit existing tasks
   - Delete tasks

---

## 📦 Dependencies

- [express](https://www.npmjs.com/package/express)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [pg](https://www.npmjs.com/package/pg)
- [ejs](https://www.npmjs.com/package/ejs)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 💡 Features

- Add, edit, and delete tasks dynamically.
- Database integration with PostgreSQL for persistent storage.
- Simple and responsive user interface.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork this repository and submit a pull request.

---

## 📧 Author
- Created by **Kanish**.
