const Divider = ({ color = 'border-primary', thickness = '1', className = 'Divider' }) => {

  // Construct Tailwind class for border color and thickness
  const dividerClass = `border-t-${thickness} border-${color} ${className}`;

  return (
    <hr className={dividerClass} />
  );
};

export default Divider;
