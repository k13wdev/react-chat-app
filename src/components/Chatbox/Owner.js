const Owner = ({text, time, image}) => {
  console.log(image);
  return (
    <div className="grid gap-1 pt-4 pb-8 px-4 ml-auto w-72 text-white bg-primary-400 rounded-xl rounded-br-md">
      <p>{text}</p>
      {image ? <img src={`data:image/jpg;base64,${image}`} alt="lol"/> : null}
      <time className="justify-self-end text-xs">{time}</time>
    </div>
  );
}

export default Owner;