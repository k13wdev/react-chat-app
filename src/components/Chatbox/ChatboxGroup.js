import { useEffect, useRef, useState } from "react";
import Arrow from "../Arrow/Arrow";

const ChatboxGroup = ({ children }) => {
  const el = useRef(null);
  const [showArrow, setShowArrow] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if(showArrow === false) {
      el.current.scrollIntoView({ behavior: "smooth" });
    } else {
      setCounter(counter + 1);
    }
  }, [children]);

  const onScrollHandler = (event) => {
    if((event.target.scrollHeight - event.target.scrollTop - 200) > event.target.clientHeight) {
      setShowArrow(true);
    } else {
      setCounter(0);
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
      <ul className="row-start-1 row-end-1 grid gap-1 self-end">{children}</ul>
      <div ref={el} className="row-start-2 row-end-2"></div>
      {showArrow ? <Arrow onClickHandler={onClickHandler} counter={counter}/> : null}
    </div>
  );
};

export default ChatboxGroup;
