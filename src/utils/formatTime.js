export const formatTime = (param) => {
  let seconds = Math.floor(param % 60);
  let minutes = Math.floor((param / 60) % 60);
  let hours = Math.floor(param / 3600);

  seconds = seconds.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  hours = hours.toString().padStart(2, '0');

  const time = `${hours}:${minutes}:${seconds}`;

  //console.log(time);

  if (param === undefined || typeof (param) != 'number' || param < 0) {
    return null;
  } else {
    return time;
  }
};
