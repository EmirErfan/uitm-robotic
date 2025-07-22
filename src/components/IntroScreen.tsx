// src/components/IntroScreen.tsx
import React from 'react';

const IntroScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <h1 className="text-5xl font-monoton text-yellow-400 animate-pulse">
        UiTM Robotic
      </h1>
      <h1 className="text-5xl font-monoton text-yellow-400 animate-pulse">
        Competition
      </h1>
    </div>
  );
};

export default IntroScreen;
