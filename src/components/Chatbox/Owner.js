const Owner = ({ text, image, time }) => {
  return (
    <div className="grid gap-1 pt-4 pb-8 px-4 ml-auto w-72 text-white bg-primary-400 rounded-xl rounded-br-md">
      {
        text ? <p className="max-w-28ch w-full">{text}</p> : null
      }
      {
        image ? <img src={image} className="w-full aspect-video rounded-xl object-cover"/> : null
      }
      <time className="justify-self-end text-xs">{time}</time>
    </div>
  );
};

export default Owner;
