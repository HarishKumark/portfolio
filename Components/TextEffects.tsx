import { TypeAnimation } from 'react-type-animation';

const TextEffects = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Coder',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Web developer',
        1500,
        'Designer',
        1500,
        'Programmer',
        1500
      ]}
      wrapper="span"
      speed={50}
      className="text-[2rem] md:text-[3rem] text-black font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffects;