# Image Classification System - Project Report

## Project Overview
This project is a full-stack **Image Classification System** that leverages deep learning to categorize images into predefined categories. It features a modern, premium web interface and a robust backend powered by TensorFlow.

---

## Technical Architecture

### 1. Backend (The Brain)
- **Framework**: Flask (Python)
- **Model**: MobileNetV2 (Pre-trained on ImageNet)
- **Processing**: TensorFlow/Keras & NumPy
- **Image Handling**: PIL (Pillow)
- **Functionality**: 
  - Receives image data via a POST request (`/predict`).
  - Preprocesses the image to a 224x224 RGB format.
  - Generates top-3 class predictions with confidence scores.

### 2. Frontend (The Interface)
- **Framework**: React.js (Vite)
- **Design Strategy**: Premium Glassmorphism
- **Styling**: Vanilla CSS with custom design tokens (gradients, blur, transitions).
- **Features**:
  - Drag-and-drop image upload.
  - Interactive prediction visualization (progress bars).
  - Responsive layout for all screen sizes.

---

## File Structure

```text
Image Classification/
├── backend/
│   ├── app.py              # Flask API Entry Point
│   ├── model_utils.py      # ML Logic & Model Loading
│   └── requirements.txt    # Python Dependencies
├── frontend/
│   ├── src/
│   │   ├── components/     # UI Components (Uploader, Result)
│   │   ├── App.jsx         # Main App Logic
│   │   └── index.css       # Global Premium Styles
│   └── package.json        # Node.js Dependencies
└── venv/                   # Python Virtual Environment
```

---

## How it Works

1. **User Interaction**: The user drags an image into the "Glass Card" interface.
2. **Frontend Preview**: The React app immediately displays a preview of the image.
3. **API Request**: The image is sent to the Flask backend as a `FormData` object.
4. **Model Inference**: 
   - The backend converts the image into a numerical array.
   - The MobileNetV2 model analyzes visual features (edges, textures, shapes).
   - It outputs probabilities for 1,000 different categories.
5. **Results**: The top 3 most likely categories are sent back and rendered as beautiful progress bars.

---

## Setup & Installation

### Prerequisites
- Python 3.10+
- Node.js & npm

### Backend Setup
1. Activate the environment: `.\venv\Scripts\activate`
2. Run the server: `python backend/app.py`

### Frontend Setup
1. `cd frontend`
2. Install packages: `npm install`
3. Run the app: `npm run dev`

---

## Key Achievements
- Implemented **Deep Learning** inference in a web context.
- Achieved a **Modern Aesthetic** that exceeds standard MVP designs.
- Built a **Scalable Architecture** that can be swapped with other CNN models (like ResNet or Inception).

---
*Created by Antigravity AI for Hex Software.*
