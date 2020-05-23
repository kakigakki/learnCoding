/* Your task in order to complete this Kata
 is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. 
If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example: */

function formatDuration(seconds) {
  if (seconds == "") {
    return "now"
  }
  let sec, min, hour, day, year
  if (seconds >= 60) {
    min = Math.floor(seconds / 60)
    sec = seconds % 60
  } else {
    return ret({ value: seconds, data: "seconds" })
  }
  if (min >= 60) {
    hour = Math.floor(min / 60)
    min = min % 60
  } else {
    return ret({ value: min, data: "minutes" }, { value: sec, data: "seconds" })
  }

  if (hour >= 24) {
    day = Math.floor(hour / 24)
    hour = hour % 24
  } else {
    return ret({ value: hour, data: "hours" }, { value: min, data: "minutes" }, { value: sec, data: "seconds" })
  }
  if (day >= 365) {
    year = Math.floor(day / 365)
    day = day % 365
  } else {
    return ret({ value: day, data: "days" }, { value: hour, data: "hours" }, { value: min, data: "minutes" }, { value: sec, data: "seconds" })
  }
  return ret({ value: year, data: "years" }, { value: day, data: "days" }, { value: hour, data: "hours" }, { value: min, data: "minutes" }, { value: sec, data: "seconds" })
}

function ret(...value) {
  return [...arguments].filter(item => item.value !== 0).map(item => {
    if (item.value === 1) {
      item.data = item.data.slice(0, -1)
    }
    return `${item.value} ${item.data}`
  }).join(", ").replace(/(.*),(.*)$/, "$1 and$2")
}


/* 大神解法 */
// function formatDuration (seconds) {
//   var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
//       res = [];

//   if (seconds === 0) return 'now';

//   for (var key in time) {
//     if (seconds >= time[key]) {
//       var val = Math.floor(seconds/time[key]);
//       res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
//       seconds = seconds % time[key];
//     }
//   }

//   return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
// }