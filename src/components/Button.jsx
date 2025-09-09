import React from 'react';

const Button = ({ styles }) => {
  const handleButtonClick = () => {
    // Replace this URL with your desired Telegram link
    // window.open('https://t.me/rutvikraval1', '_blank');
    window.open('https://calendly.com/karmachaininfotech/30min', '_blank');
  };

  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
      onClick={handleButtonClick}
    >
      Get Started
    </button>
  );
};

export default Button;
