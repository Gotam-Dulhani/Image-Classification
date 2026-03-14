# 🖼️ Image Classification System

[![Contributors](https://img.shields.io/github/contributors/Gotam-Dulhani/Image-Classification)](https://github.com/Gotam-Dulhani/Image-Classification/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/Gotam-Dulhani/Image-Classification)](https://github.com/Gotam-Dulhani/Image-Classification/network/members)
[![Stars](https://img.shields.io/github/stars/Gotam-Dulhani/Image-Classification)](https://github.com/Gotam-Dulhani/Image-Classification/stargazers)
[![Issues](https://img.shields.io/github/issues/Gotam-Dulhani/Image-Classification)](https://github.com/Gotam-Dulhani/Image-Classification/issues)
[![License](https://img.shields.io/github/license/Gotam-Dulhani/Image-Classification)](https://github.com/Gotam-Dulhani/Image-Classification/blob/main/LICENSE)

> A **full-stack Image Classification System** powered by deep learning that categorizes images into predefined categories with a modern, premium Glassmorphism web interface.

🌐 **[Explore the docs »](#)**
🚀 **[View Demo](#)** · 🐛 **[Report Bug](#)** · 🌟 **[Request Feature](#)**

---

## 📌 Table of Contents

* [About The Project](#-about-the-project)
* [Key Features](#-key-features)
* [Built With](#-built-with)
* [File Structure](#-file-structure)
* [How It Works](#-how-it-works)
* [Getting Started](#-getting-started)
* [Contributing](#-contributing)
* [License](#-license)
* [Contact](#-contact)

---

## 💡 About The Project

The **Image Classification System** is a full-stack deep learning web application that uses **MobileNetV2** (pre-trained on ImageNet) to classify images into 1,000 categories. Users can drag and drop any image and instantly receive the top 3 predictions with confidence scores, rendered as interactive progress bars.

---

## ✨ Key Features

* **Deep Learning Inference** – MobileNetV2 model pre-trained on ImageNet with 1,000 categories.
* **Top-3 Predictions** – Returns the most likely classes with confidence scores.
* **Drag & Drop Upload** – Intuitive image upload with live preview.
* **Premium Glassmorphism UI** – Modern design with gradients, blur, and smooth transitions.
* **Responsive Layout** – Works seamlessly across all screen sizes.
* **Scalable Architecture** – Easily swap MobileNetV2 for ResNet, Inception, or any CNN model.

---

## 🛠 Built With

### Backend

| Technology | Purpose |
|---|---|
| Python 3.10+ | Core language |
| Flask | REST API framework |
| TensorFlow / Keras | Deep learning model |
| MobileNetV2 | Pre-trained image classifier |
| NumPy | Numerical processing |
| Pillow (PIL) | Image preprocessing |

### Frontend

| Technology | Purpose |
|---|---|
| React.js | UI framework |
| Vite | Build tool |
| Vanilla CSS | Premium Glassmorphism styling |

---

## 📁 File Structure

```
Image-Classification/
│
├── backend/
│   ├── app.py              # Flask API entry point
│   ├── model_utils.py      # ML logic & model loading
│   └── requirements.txt    # Python dependencies
│
├── frontend/
│   ├── src/
│   │   ├── components/     # UI components (Uploader, Result)
│   │   ├── App.jsx         # Main app logic
│   │   └── index.css       # Global premium styles
│   └── package.json        # Node.js dependencies
│
└── venv/                   # Python virtual environment
```

---

## 🧠 How It Works

1. **User Interaction** – User drags an image into the Glassmorphism card interface.
2. **Frontend Preview** – React app immediately displays a live preview of the image.
3. **API Request** – Image is sent to the Flask backend as a `FormData` POST request.
4. **Model Inference** – Backend converts the image to a 224×224 RGB numerical array, MobileNetV2 analyzes visual features (edges, textures, shapes) and outputs probabilities for 1,000 categories.
5. **Results** – Top 3 most likely categories are returned and rendered as animated progress bars.

```
User Uploads Image
        │
        ▼
React Frontend (Preview)
        │
        ▼
POST /predict (Flask API)
        │
        ▼
Image Preprocessing (224×224 RGB)
        │
        ▼
MobileNetV2 Inference (1,000 classes)
        │
        ▼
Top-3 Predictions + Confidence Scores
        │
        ▼
React Dashboard (Progress Bars)
```

---

## 🚀 Getting Started

### Prerequisites

* Python 3.10+
* Node.js & npm

### Backend Setup

**1. Clone the repository**

```bash
git clone https://github.com/Gotam-Dulhani/Image-Classification.git
cd Image-Classification
```

**2. Activate the virtual environment**

```bash
# Windows
.\venv\Scripts\activate

# macOS / Linux
source venv/bin/activate
```

**3. Install Python dependencies**

```bash
pip install -r backend/requirements.txt
```

**4. Run the Flask server**

```bash
python backend/app.py
```

> Backend runs at: `http://127.0.0.1:5000`

### Frontend Setup

**1. Navigate to frontend**

```bash
cd frontend
```

**2. Install Node dependencies**

```bash
npm install
```

**3. Start the dev server**

```bash
npm run dev
```

> Frontend runs at: `http://localhost:5173`

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch:

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes:

```bash
git commit -m "Add AmazingFeature"
```

4. Push and open a Pull Request:

```bash
git push origin feature/AmazingFeature
```

---

## 📝 License

Distributed under the **MIT License**. See `LICENSE` for details.

---

## 📫 Contact

**Gotam Dulhani**
GitHub: [https://github.com/Gotam-Dulhani](https://github.com/Gotam-Dulhani)

---

## 🙏 Acknowledgments

* [TensorFlow Documentation](https://www.tensorflow.org/)
* [MobileNetV2 Paper](https://arxiv.org/abs/1801.04381)
* [Flask Documentation](https://flask.palletsprojects.com/)
* [React Documentation](https://react.dev/)
* Open Source Community ❤️
