function convertNanosecondsToDays(nanoseconds) {
  const NANOSECONDS_IN_A_DAY = 864 * Math.pow(10, 11);
  return Math.floor(nanoseconds / NANOSECONDS_IN_A_DAY);
}

function convertNanosecondsToHours(nanoseconds) {
  const NANOSECONDS_IN_AN_HOUR = 36 * Math.pow(10, 11);
  return Math.floor(nanoseconds / NANOSECONDS_IN_AN_HOUR);
}

function convertNanosecondsToMinutes(nanoseconds) {
  const NANOSECONDS_IN_A_MINUTE = 6 * Math.pow(10, 10);
  return Math.floor(nanoseconds / NANOSECONDS_IN_A_MINUTE);
}

function convertNanosecondsToSeconds(nanoseconds) {
  const NANOSECONDS_IN_A_SECOND = 1 * Math.pow(10, 9);
  return Math.floor(nanoseconds / NANOSECONDS_IN_A_SECOND);
}

function convertNanosecondsToMilliseconds(nanoseconds) {
  const NANOSECONDS_IN_A_MILLISECOND = 1 * Math.pow(10, 6);
  return Math.floor(nanoseconds / NANOSECONDS_IN_A_MILLISECOND);
}

function convertNanosecondsToMicroseconds(nanoseconds) {
  const NANOSECONDS_IN_A_MICROSECOND = 1000;
  return Math.floor(nanoseconds / NANOSECONDS_IN_A_MICROSECOND);
}

function getRemainingNanoseconds(time, timeUnit, availableNanoseconds) {
  switch (timeUnit) {
    case "days": {
      const NANOSECONDS_IN_A_DAY = 864 * Math.pow(10, 11);
      const ms = time * NANOSECONDS_IN_A_DAY;
      return availableNanoseconds - ms;
    }
    case "hours": {
      const NANOSECONDS_IN_AN_HOUR = 36 * Math.pow(10, 11);
      const ms = time * NANOSECONDS_IN_AN_HOUR;
      return availableNanoseconds - ms;
    }
    case "minutes": {
      const NANOSECONDS_IN_A_MINUTE = 6 * Math.pow(10, 10);
      const ms = time * NANOSECONDS_IN_A_MINUTE;
      return availableNanoseconds - ms;
    }
    case "seconds": {
      const NANOSECONDS_IN_A_SECOND = 1 * Math.pow(10, 9);
      const ms = time * NANOSECONDS_IN_A_SECOND;
      return availableNanoseconds - ms;
    }
    case "milliseconds": {
      const NANOSECONDS_IN_A_MILLISECOND = 1 * Math.pow(10, 6);
      const ms = time * NANOSECONDS_IN_A_MILLISECOND;
      return availableNanoseconds - ms;
    }
    case "microseconds": {
      const NANOSECONDS_IN_A_MICROSECOND = 1000;
      const ms = time * NANOSECONDS_IN_A_MICROSECOND;
      return availableNanoseconds - ms;
    }
    default:
      throw new Error("Invalid value type");
  }
}

function parseMs(ms) {
  if (typeof ms !== "number") {
    throw new TypeError(`Expected number, received ${typeof ms}`);
  }
  const NANOSECONDS_IN_A_MILLISECOND = 1000000;
  let availableNanoseconds = ms * NANOSECONDS_IN_A_MILLISECOND;
  const timeObject = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    microseconds: 0,
    nanoseconds: 0
  };
  if (availableNanoseconds <= 0) {
    return timeObject;
  }
  timeObject["days"] = convertNanosecondsToDays(availableNanoseconds);
  availableNanoseconds = getRemainingNanoseconds(
    timeObject["days"],
    "days",
    availableNanoseconds
  );
  if (availableNanoseconds <= 0) {
    return timeObject;
  }
  timeObject["hours"] = convertNanosecondsToHours(availableNanoseconds);
  availableNanoseconds = getRemainingNanoseconds(
    timeObject["hours"],
    "hours",
    availableNanoseconds
  );
  if (availableNanoseconds <= 0) {
    return timeObject;
  }
  timeObject["minutes"] = convertNanosecondsToMinutes(availableNanoseconds);
  availableNanoseconds = getRemainingNanoseconds(
    timeObject["minutes"],
    "minutes",
    availableNanoseconds
  );
  if (availableNanoseconds <= 0) {
    return timeObject;
  }
  timeObject["seconds"] = convertNanosecondsToSeconds(availableNanoseconds);
  availableNanoseconds = getRemainingNanoseconds(
    timeObject["seconds"],
    "seconds",
    availableNanoseconds
  );
  if (availableNanoseconds <= 0) {
    return timeObject;
  }
  timeObject["milliseconds"] = convertNanosecondsToMilliseconds(
    availableNanoseconds
  );
  availableNanoseconds = getRemainingNanoseconds(
    timeObject["milliseconds"],
    "milliseconds",
    availableNanoseconds
  );
  if (availableNanoseconds <= 0) {
    return timeObject;
  }
  timeObject["microseconds"] = convertNanosecondsToMicroseconds(
    availableNanoseconds
  );
  availableNanoseconds = getRemainingNanoseconds(
    timeObject["microseconds"],
    "microseconds",
    availableNanoseconds
  );
  if (availableNanoseconds <= 0) {
    return timeObject;
  }
  timeObject["nanoseconds"] = Math.floor(availableNanoseconds);
  return timeObject;
}

export { parseMs };
