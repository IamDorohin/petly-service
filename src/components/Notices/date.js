import dayjs from 'dayjs';

export const currentPetAge = birthdate => {
  const utc = require('dayjs/plugin/utc');
  dayjs.extend(utc);
  const duration = require('dayjs/plugin/duration');
  dayjs.extend(duration);

  const nowDate = new Date();
  const petAge = dayjs(birthdate);
  const petAgeFormat = petAge.$d.getTime();
  const currentAge = nowDate - petAgeFormat;
  const finalResult = dayjs.duration(currentAge).$d;

  return finalResult;
};
