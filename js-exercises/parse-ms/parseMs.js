function convertMillisecondsToDays(ms) {
  const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
  return Math.floor(ms / MILLISECONDS_IN_A_DAY);
}

function convertMillisecondsToHours(ms) {
  const MILLISECONDS_IN_AN_HOUR = 1000 * 60 * 60;
  return Math.floor(ms / MILLISECONDS_IN_AN_HOUR);
}

function convertMillisecondsToMinutes(ms) {
  const MILLISECONDS_IN_A_MINUTE = 1000 * 60;
  return Math.floor(ms / MILLISECONDS_IN_A_MINUTE);
}

function convertMillisecondsToSeconds(ms) {
  const MILLISECONDS_IN_A_SECOND = 1000;
  return Math.floor(ms / MILLISECONDS_IN_A_SECOND);
}

function getRemainingMilliseconds(time, timeUnit, availableMilliseconds) {
  switch (timeUnit) {
    case "days": {
      const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
      const ms = time * MILLISECONDS_IN_A_DAY;
      return availableMilliseconds - ms;
    }
    case "hours": {
      const MILLISECONDS_IN_AN_HOUR = 1000 * 60 * 60;
      const ms = time * MILLISECONDS_IN_AN_HOUR;
      return availableMilliseconds - ms;
    }
    case "minutes": {
      const MILLISECONDS_IN_A_MINUTE = 1000 * 60;
      const ms = time * MILLISECONDS_IN_A_MINUTE;
      return availableMilliseconds - ms;
    }
    case "seconds": {
      const MILLISECONDS_IN_A_SECOND = 1000;
      const ms = time * MILLISECONDS_IN_A_SECOND;
      return availableMilliseconds - ms;
    }
    default:
      throw new Error("Invalid value type");
  }
}

function parseMs(ms) {
  let availableMilliseconds = parseInt(ms);
  if (Number.isNaN(availableMilliseconds)) {
    throw new TypeError(`Expected number, received ${typeof ms}`);
  }
  const timeObject = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    microseconds: 0,
    nanoseconds: 0
  };
  if (availableMilliseconds <= 0) {
    return timeObject;
  }
  timeObject["days"] = convertMillisecondsToDays(availableMilliseconds);
  availableMilliseconds = getRemainingMilliseconds(
    timeObject["days"],
    "days",
    availableMilliseconds
  );
  if (availableMilliseconds <= 0) {
    return timeObject;
  }
  timeObject["hours"] = convertMillisecondsToHours(availableMilliseconds);
  availableMilliseconds = getRemainingMilliseconds(
    timeObject["hours"],
    "hours",
    availableMilliseconds
  );
  if (availableMilliseconds <= 0) {
    return timeObject;
  }
  timeObject["minutes"] = convertMillisecondsToMinutes(availableMilliseconds);
  availableMilliseconds = getRemainingMilliseconds(
    timeObject["minutes"],
    "minutes",
    availableMilliseconds
  );
  if (availableMilliseconds <= 0) {
    return timeObject;
  }
  timeObject["seconds"] = convertMillisecondsToSeconds(availableMilliseconds);
  availableMilliseconds = getRemainingMilliseconds(
    timeObject["seconds"],
    "seconds",
    availableMilliseconds
  );
  timeObject["milliseconds"] = availableMilliseconds;
  return timeObject;
}

export { parseMs };
