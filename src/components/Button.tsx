import { ButtonColor } from '@/shared/types';
import { getHoverColor } from '@/utils/utils';
import Image from 'next/image';

type ButtonProps = {
  text: string;
  onClick: () => void;
  color?: ButtonColor;
  image?: string;
};

const Button = ({
  text,
  onClick,
  color = ButtonColor.Blue,
  image,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${color} mb-4 rounded p-4 text-white shadow transition-shadow duration-300 hover:${getHoverColor(color)} hover: cursor-pointer hover:shadow-lg`}
    >
      {!!image ? (
        <Image src={image} alt="Button Icon" className="h-6 w-6" />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
