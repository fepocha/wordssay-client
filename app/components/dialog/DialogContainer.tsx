import { PropsWithChildren } from 'react';

export interface DialogContainerProps {
  buttonText?: string;
  onClick?: () => void;
}

export function DialogContainer({ children, onClick, buttonText = 'Close' }: PropsWithChildren<DialogContainerProps>) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-dim z-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] px-4">
        <div className="w-full h-full bg-white-mid rounded-lg text-center px-6 py-8">
          {children}
          <footer className="mt-8">
            <button
              type="button"
              className="button-sm"
              onClick={onClick}
            >
              {buttonText}
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
