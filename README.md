# Giveaway

Giveaway is an open-source web application that allows people to publish items they no longer need and lets others view and reach out to them via direct messaging. This platform aims to facilitate the exchange and donation of items, starting with a single-city implementation, with plans to expand to multiple cities in the future.

---

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)

---

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally or hosted on a cloud service (e.g., MongoDB Atlas)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/giveaway-backend.git
   cd giveaway-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the server:
   ```bash
   npm start
   ```
   The backend server will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   git clone https://github.com/yourusername/giveaway-frontend.git
   cd giveaway-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

---

## Roadmap

- [x] Implement user registration and login.
- [x] Add the ability to publish items.
- [x] Enable direct messaging.
- [ ] Extend the platform to support multiple cities.
- [ ] Add search and filter functionalities.
- [ ] Build a mobile app version.

---

## Contribution Guidelines

We welcome contributions from the community! Here’s how you can get involved:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

Please ensure your contributions align with the project's coding standards and include appropriate documentation.

---

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software as per the terms of the license.

---

## Acknowledgments

- Thanks to the open-source community for their support and inspiration.
- Special thanks to contributors who make this project better every day.

---

## Contact

For questions, suggestions, or feedback, please reach out:

- **Email**: r240825@gmail.com
- **GitHub**: [rahulkpareek](https://github.com/rahulkpareek)
- **Issues**: [Submit an issue](https://github.com/yourusername/giveaway/issues)

---

Together, let's make it easier to share and reuse resources, one city at a time!

