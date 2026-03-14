import React from 'react';

const ClassificationResult = ({ results, imagePreview }) => {
  if (!results || results.length === 0) return null;

  return (
    <div className="result-card">
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div className="preview-container" style={{ flex: '1', minWidth: '300px' }}>
          <img 
            src={imagePreview} 
            alt="Preview" 
            style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }} 
          />
        </div>
        <div className="predictions-container" style={{ flex: '1', minWidth: '300px' }}>
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Predictions</h3>
          {results.map((res, index) => (
            <div key={index} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: '600', textTransform: 'capitalize' }}>{res.label.replace(/_/g, ' ')}</span>
                <span style={{ color: '#10b981' }}>{(res.probability * 100).toFixed(2)}%</span>
              </div>
              <div className="probability-bar">
                <div 
                  className="probability-fill" 
                  style={{ width: `${res.probability * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassificationResult;
