import React, { useState } from 'react';
import './App.css';
import MediaWindow from './MediaWindow';
import PlatformButton from './PlatformButton';

const platforms = [
  { name: 'Netflix', color: '#e50914', logo: '🎬' },
  { name: 'Hulu', color: '#1ce783', logo: '📺' },
  { name: 'HBO MAX', color: '#8a2be2', logo: '🎞️' },
  { name: 'Disney+', color: '#113ccf', logo: '🌠' }
];

export default function App() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  return (
    <div className="app-container">
      <h1>Stream Selector</h1>
      <div className="button-row">
        {platforms.map((p) => (
          <PlatformButton
            key={p.name}
            name={p.name}
            color={p.color}
            logo={p.logo}
            onClick={() => setSelectedPlatform(p)}
            active={selectedPlatform?.name === p.name}
          />
        ))}
      </div>
      <MediaWindow platform={selectedPlatform} />
    </div>
  );
}
