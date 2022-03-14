import { useEffect, useRef, useState } from "react";
import Arrow from "../Arrow/Arrow";

const ChatboxGroup = ({ children }) => {
  const el = useRef(null);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    el.current.scrollIntoView({ behavior: "smooth" });
  }, [children]);

  const onScrollHandler = (event) => {
    const bottom = event.target.scrollHeight - event.target.scrollTop !== event.target.clientHeight;
    if(bottom) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  const onClickHandler = () => {
    el.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      onScroll={onScrollHandler}
      className="grid grid-rows-[1fr_min-content]  py-1 px-4 self-end h-full overflow-y-scroll"
    >
      <ul className="grid gap-1 self-end">{children}</ul>
      <div ref={el}></div>
      {showArrow ? <Arrow onClickHandler={onClickHandler}/> : null}
    </div>
  );
};

export default ChatboxGroup;
