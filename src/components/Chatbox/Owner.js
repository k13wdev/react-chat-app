const Owner = ({ text, time, image }) => {
  return (
    <div className="grid gap-1 pt-4 pb-8 px-4 ml-auto w-72 text-white bg-primary-400 rounded-xl rounded-br-md">
      {image ? (
        <img
          src={image}
          className="w-full aspect-video rounded-xl object-cover"
        />
      ) : (
        <p>{text}</p>
      )}
      <time className="justify-self-end text-xs">{time}</time>
    </div>
  );
};

export default Owner;
