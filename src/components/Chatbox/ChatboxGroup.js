import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UN_READ } from "../../feature/socket/socketSlice";
import Arrow from "../Arrow/Arrow";

const ChatboxGroup = ({ children }) => {
  const { typing, unreadMsg } = useSelector((state) => state.socket);
  const [showArrow, setShowArrow] = useState(false);
  const dispatch = useDispatch();
  const el = useRef(null);

  const onScrollHandler = useCallback((event) => {
    setShowArrow(
      event.target.scrollHeight - event.target.scrollTop - 200 >
        event.target.clientHeight
    );
  }, []);

  const onClickHandler = () => {
    el.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (showArrow === false) {
      dispatch(UN_READ())
      el.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <div
      onScroll={onScrollHandler}
      className="grid grid-rows-[1fr_12px_min-content] gap-1  py-1 px-4 self-end h-full overflow-y-scroll"
    >
      <ul className="row-start-1 row-end-1 grid gap-1 self-end">{children}</ul>
      {typing && (
        <p className="row-start-2 row-end-2 h-3 text-xs text-dark-200 text-center animate-pulse">
          {typing}
        </p>
      )}
      <div ref={el} className="row-start-3 row-end-3 h-0"></div>
      {showArrow && (
        <Arrow
          unreadMsg={unreadMsg}
          onClickHandler={onClickHandler}
        />
      )}
    </div>
  );
};

export default ChatboxGroup;
