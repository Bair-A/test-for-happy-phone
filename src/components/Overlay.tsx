import { ReactNode } from 'react';

type OverlayProps = {
  onClick: () => void;
  children: ReactNode;
};

const Overlay = ({ onClick, children }: OverlayProps) => {
  return (
    <div
      onClick={onClick}
      className="fixed top-0 left-0 block flex h-full w-full items-center justify-center bg-black"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      {children}
    </div>
  );
};

export default Overlay;
