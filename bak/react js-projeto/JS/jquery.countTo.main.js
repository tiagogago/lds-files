import React, { useEffect, useRef } from "react";
const CountTo = ({
  from,
  to,
  speed,
  refreshInterval,
  decimals,
  formatter,
  onUpdate,
  onComplete,
}) => {
  const intervalRef = useRef(null);
  const [counter, setCounter] = React.useState(from);

  useEffect(() => {
    const interval = setInterval(() => {
      const distance = to - from;
      const step = distance / (speed / refreshInterval);
      const newCounter = Math.ceil(counter + step);

      if (newCounter >= to) {
        setCounter(to);
        clearInterval(intervalRef.current);
        if (onComplete) {
          onComplete(to);
        }
      } else {
        setCounter(newCounter);
        if (onUpdate) {
          onUpdate(newCounter);
        }
      }
    }, refreshInterval);

    intervalRef.current = interval;

    return () => clearInterval(intervalRef.current);
  }, [from, to, speed, refreshInterval]);

  return <span>{formatter ? formatter(counter, { decimals }) : counter}</span>;
};

CountTo.defaultProps = {
  from: 0,
  to: 0,
  speed: 1000,
  refreshInterval: 100,
  decimals: 0,
  formatter: (value) => value.toFixed(value.decimals),
  onUpdate: null,
  onComplete: null,
};

export default CountTo;
