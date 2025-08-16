# Contributing to mongodb-vectors

First off, thank you for considering contributing to this project! 🚀  
This repository is for testing and experimenting with **MongoDB vector database** and **search functionality for AI**.  

We welcome contributions in the form of:
- New vector search examples
- Improvements to documentation
- Fixes to code or configurations
- Better tests and datasets

---

## 📦 Getting Started

1. **Fork the repository**
   ```bash
   git fork https://github.com/Ehbraheem/mongodb-vectors.git
   cd mongodb-vectors
   ```

2. **Clone your fork**

   ```bash
   git clone https://github.com/<your-username>/mongodb-vectors.git
   cd mongodb-vectors
   ```

3. **Install dependencies**
   Each package has its own dependencies. Navigate into the specific package folder and run:

   ```bash
   npm install
   ```

4. **Set up environment variables**
   Create a `.env` file inside the relevant package with your **MongoDB connection string** and any other required variables:

   ```bash
   MONGODB_URI=mongodb+srv://<your-cluster-url>
   ```

---

## 🛠 Development Workflow

1. Create a new branch:

   ```bash
   git checkout -b feature/my-new-feature
   ```

2. Make your changes (examples, docs, or bug fixes).

3. Commit your changes with a descriptive message:

   ```bash
   git commit -m "Added new vector search example using OpenAI embeddings"
   ```

4. Push your branch:

   ```bash
   git push origin feature/my-new-feature
   ```

5. Open a **Pull Request (PR)** to the `main` branch of this repo.

---

## 📝 Code Style

* Follow **ES Modules** (`import`/`export`) syntax.
* Keep examples **minimal and focused**.
* Document your code where necessary.
* If adding a new example, include a short `README.md` inside the example folder explaining:

  * What the example demonstrates
  * How to run it
  * Expected output

---

## ✅ Pull Request Guidelines

* Make sure your branch is up to date with `main`.
* Test your code before submitting.
* PR titles should be clear, e.g.,

  * `feat: add hybrid search example`
  * `fix: update env config loader`
  * `docs: improve setup instructions`

---

## 🙌 Need Help?

If you encounter issues setting up or contributing, please open an **Issue** on GitHub with details.
We’ll do our best to help!

---

Thanks again for contributing to **mongodb-vectors** ❤️

