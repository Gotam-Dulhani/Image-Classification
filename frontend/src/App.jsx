import { useState } from 'react'
import './App.css'
import ImageUploader from './components/ImageUploader'
import ClassificationResult from './components/ClassificationResult'

function App() {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [error, setError] = useState(null)

  const handleImageUpload = async (file) => {
    setLoading(true)
    setResults(null)
    setError(null)
    
    // Create preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result)
    }
    reader.readAsDataURL(file)

    // Prepare for upload
    const formData = new FormData()
    formData.append('image', file)

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setResults(data)
      } else {
        setError(data.error || 'Classification failed')
      }
    } catch (err) {
      setError('Could not connect to the backend server. Make sure it is running.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="glass-card">
      <h1>AI Image Classifier</h1>
      <p className="subtitle">Upload any image and let our deep learning model identify its contents.</p>
      
      <ImageUploader onImageUpload={handleImageUpload} loading={loading} />
      
      {error && (
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          background: 'rgba(239, 68, 68, 0.1)', 
          border: '1px solid rgba(239, 68, 68, 0.2)', 
          borderRadius: '12px', 
          color: '#ef4444',
          textAlign: 'center'
        }}>
          {error}
        </div>
      )}

      {loading && (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <div className="spinner" style={{ 
            width: '40px', 
            height: '40px', 
            border: '4px solid rgba(255,255,255,0.1)', 
            borderTop: '4px solid var(--primary)', 
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }}></div>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Analyzing image features...</p>
        </div>
      )}

      <ClassificationResult results={results} imagePreview={imagePreview} />

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default App
