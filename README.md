# CRUD_refresh

A simple Node.js CRUD (Create, Read, Update, Delete) application using Express and MongoDB.

## Features

- User management with full CRUD operations
- Clean MVC structure
- EJS templating for views
- MongoDB for data persistence
- Organized public and views folders

## Folder Structure

```
CRUD_refresh/
├── index.js           # Main server file
├── package.json       # Project dependencies
├── models/
│   └── user.js        # Mongoose user model
├── public/
│   └── styles/
│       └── index.css  # Stylesheet
├── views/
│   ├── index.ejs      # Home page
│   ├── read.ejs       # Read user data
│   └── update.ejs     # Update user data
└── README.md          # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SidduSanmukh/CRUD_refresh.git
   cd CRUD_refresh
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up MongoDB connection in `index.js` or via environment variables.
4. Start the server:
   ```bash
   node index.js
   ```
5. Open your browser and go to `http://localhost:3000`

## Usage

- Add, view, update, and delete users via the web interface.
- All user data is stored in MongoDB.

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- EJS
- CSS

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
