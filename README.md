# MongoDB Vectors

This repository is a playground for experimenting with **MongoDB Atlas Vector Search** and its applications in AI.  
It contains multiple example projects that demonstrate how to store embeddings in MongoDB, perform vector search, and build real-world use cases around it.

---

## 📂 Packages

### 1. [mongodb-book-vector](./mongodb-book-vector/README.md)
A project that demonstrates using MongoDB vector search for **semantic book search**.  
- Loads book embeddings into MongoDB.  
- Performs similarity queries to retrieve relevant books.  
- Useful as a reference for document-based semantic search.  

---

### 2. [mongodb-news-vector](./mongodb-news-vector/README.md)
A project that demonstrates **news article search** powered by MongoDB vectors.  
- Stores news article embeddings.  
- Enables fast similarity-based retrieval of articles.  
- Showcases practical usage of vector search for information retrieval.  

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/Ehbraheem/mongodb-vectors.git
cd mongodb-vectors
````

Each sub-package (`mongodb-book-vector` and `mongodb-news-vector`) has its own setup guide and dependencies.
Please follow their respective [READMEs](./mongodb-book-vector/README.md) and [READMEs](./mongodb-news-vector/README.md) for installation and usage instructions.

---

## 🧩 Tech Stack

* **MongoDB Atlas Vector Search**
* **Node.js (ESM)**
* **dotenv** for environment management
* **Embeddings from AI models** for vector storage

---

## 📌 Notes

* Ensure you have a **MongoDB Atlas cluster** with vector search enabled.
* Create a `.env` file in each project folder with the required connection details.
* This repo is for **testing and experimentation**, not production deployment.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

