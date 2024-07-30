import { useState } from 'react';
import Confetti from 'react-dom-confetti';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { PartyPopper } from 'lucide-react';

const confettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '10px',
  height: '10px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
};

const Index = () => {
  const [isExploding, setIsExploding] = useState(false);
  const [confettiAmount, setConfettiAmount] = useState(70);

  const handleConfetti = () => {
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 100);
  };

  const handleSliderChange = (value) => {
    setConfettiAmount(value[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <h1 className="text-4xl font-bold text-white mb-8">Brilliant Confetti App</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Button
            onClick={handleConfetti}
            className="text-lg font-semibold"
          >
            <PartyPopper className="mr-2 h-5 w-5" />
            Celebrate!
          </Button>
          <Confetti active={isExploding} config={{...confettiConfig, elementCount: confettiAmount}} />
        </div>
        <div className="space-y-4">
          <Label htmlFor="confetti-amount" className="text-sm font-medium">
            Confetti Amount: {confettiAmount}
          </Label>
          <Slider
            id="confetti-amount"
            min={10}
            max={200}
            step={1}
            value={[confettiAmount]}
            onValueChange={handleSliderChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
