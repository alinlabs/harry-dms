
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface StepController {
  next: () => boolean; // Returns true if internal step was taken, false if should change slide
  prev: () => boolean; // Returns true if internal step was taken, false if should change slide
}

interface NavigationContextType {
  setStepController: (controller: StepController | null) => void;
  controller: StepController | null;
  isLocked: boolean;
  setInteractionLock: (locked: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [controller, setStepController] = useState<StepController | null>(null);
  const [isLocked, setInteractionLock] = useState(false);

  return (
    <NavigationContext.Provider value={{ setStepController, controller, isLocked, setInteractionLock }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
