import React, { useRef, useEffect, useState } from "react";

const AFFIX_CSS_CLASS = "affix affix-top affix-bottom";
const AFFIX_EVENT_PREFIX = "affix";

const Affix = ({
  target = window,
  offset = { top: 0, bottom: 0 },
  onChange,
}) => {
  const [state, setState] = useState({
    affixed: null,
    unpinned: null,
    pinnedOffset: null,
    height: 0,
    scrollTop: 0,
  });
  const elementRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const target = targetRef.current;
    const config = {
      affixed: null,
      unpinned: null,
      pinnedOffset: null,
      height: 0,
      scrollTop: 0,
    };

    const checkPosition = () => {
      if (!element || !target || !element.isVisible()) {
        return;
      }

      const elementHeight = element.offsetHeight;
      const targetHeight = target.offsetHeight;
      const scrollTop = target.scrollTop();
      const elementTop = element.offsetTop;
      const documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );

      const offsetTop =
        "object" === typeof offset.top
          ? offset.top(element)
          : offset.top;
      const offsetBottom =
        "object" === typeof offset.bottom
          ? offset.bottom(element)
          : offset.bottom;

      const affixedState = getState(
        documentHeight,
        elementHeight,
        scrollTop,
        elementTop,
        targetHeight,
        offsetTop,
        offsetBottom
      );

      if (config.affixed !== affixedState) {
        config.affixed = affixedState;
        config.unpinned =
          "bottom" === affixedState
            ? config.pinnedOffset
            : null;
        config.height = elementHeight;
        config.scrollTop = scrollTop;

        setState(config);

        if ("function" === typeof onChange) {
          onChange(affixedState);
        }
      }

      if ("bottom" === affixedState) {
        element.style.top = `${documentHeight - scrollTop - elementHeight - offsetBottom}px`;
      }
    };

    const getState = (
      documentHeight,
      elementHeight,
      scrollTop,
      elementTop,
      targetHeight,
      offsetTop,
      offsetBottom
    ) => {
      if (config.affixed === null) {
        return scrollTop < offsetTop ? "top" : null;
      }

      if ("bottom" === config.affixed) {
        return null;
      }

      if ("top" === config.affixed) {
        return scrollTop <= offsetTop ? "top" : null;
      }

      const pinnedOffset = config.pinnedOffset;
      if (pinnedOffset !== null) {
        return scrollTop + elementHeight + offsetBottom <=
          documentHeight - pinnedOffset
          ? "bottom"
          : null;
      }

      return scrollTop + elementHeight >= elementTop + targetHeight - offsetBottom
        ? "bottom"
        : null;
    };

    const getPinnedOffset = () => {
      if (config.pinnedOffset !== null) {
        return config.pinnedOffset;
      }

      element.classList.remove(AFFIX_CSS_CLASS);
      element.classList.add("affix");

      const elementTop = element.offsetTop;
      const scrollTop = target.scrollTop();

      config.pinnedOffset = elementTop - scrollTop;

      return config.pinnedOffset;
    };

    const handleScroll = () => {
      requestAnimationFrame(checkPosition);
    };

    const handleResize = () => {
      requestAnimationFrame(() => {
        checkPosition();
        getPinnedOffset();
      });
    };

    const handleTargetClick = (event) => {
      event.preventDefault();
      requestAnimationFrame(checkPosition);
    };

    const element = elementRef.current;
    const target = targetRef.current;

    target.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    element.addEventListener("click", handleTargetClick);

    getPinnedOffset();

    return () => {
      target.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      element.removeEventListener("click", handleTargetClick);
    };
  }, [offset, onChange]);

  return (
    <div ref={elementRef}>
      {React.cloneElement(children, { ref: targetRef })}
    </div>
  );
};

export default Affix;