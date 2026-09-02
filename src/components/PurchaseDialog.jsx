import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export function PurchaseDialog({ isOpen, onClose, bookTitle }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePurchase = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, top: '60%', left: '50%', x: '-50%', y: '-50%', scale: 0.95 }}
            animate={{ opacity: 1, top: '50%', left: '50%', x: '-50%', y: '-50%', scale: 1 }}
            exit={{ opacity: 0, top: '60%', left: '50%', x: '-50%', y: '-50%', scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed z-50 w-full max-w-md bg-card p-6 rounded-xl shadow-2xl border border-border"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-close-dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-serif text-foreground mb-1">Purchase Copy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You are purchasing a signed hardcover edition of <span className="italic font-medium text-foreground">{bookTitle}</span>.
                  </p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg flex justify-between items-center mt-2">
                  <span className="text-sm font-medium">Total (including shipping)</span>
                  <span className="font-serif text-lg">$32.00</span>
                </div>

                <button
                  type="button"
                  className="w-full mt-4 h-12 text-base" 
                  onClick={handlePurchase}
                  disabled={isProcessing}
                  data-testid="button-confirm-purchase"
                >
                  {isProcessing ? 'Processing Securely...' : 'Confirm Demo Purchase'}
                </button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  This is a demonstration. No actual charge will be made.
                </p>
              </div>
            ) : (
              <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-foreground">Order Confirmed</h3>
                <p className="text-sm text-muted-foreground">Thank you for your support. Your copy will ship shortly.</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
