const Chatter = ({ name, avatar, text, image, time }) => {
  return (
    <div className="flex gap-2">
      <img
        className="w-10 aspect-square rounded-md self-end object-cover"
        src={avatar}
      />
      <div className="grid gap-1 pt-4 pb-8 px-4 mr-auto w-64 bg-white rounded-xl rounded-bl-md">
        <h3 className="text-sm text-primary-400">{name}</h3>
          {
            text ? <p className="max-w-28ch w-full text-base text-dark-400 ">{text}</p> : null
          }

          {
            image ? <img src={image} className="w-full aspect-video rounded-xl object-cover"/> : null
          }
        <time className="justify-self-end text-xs text-dark-200">{time}</time>
      </div>
    </div>
  );
};

export default Chatter;
