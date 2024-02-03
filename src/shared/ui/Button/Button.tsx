const Button = () => {
  return (
    <button
      className="outline outline-offset-2 outline-1 relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full"
    >
      label
    </button>
  );
};

export default Button;
