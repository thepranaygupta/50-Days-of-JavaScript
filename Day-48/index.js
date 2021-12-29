function formatDuration(seconds) {
  // your code here
  let time = { year:3153600, day: 86400, hour: 3600, minute: 60, second: 1 };
  let arr = [];
  if(seconds === 0) return 'now'
  if(seconds < 0) return;

  for(let key in time){
      if(seconds >= time[key]){
          var val = Math.floor(seconds/time[key]);
          val += val > 1 ? ' '+ key + 's' : ' ' + key
          arr.push(val)
          seconds = seconds%time[key]
      }
  }
  return arr.length > 1 ? arr.join(', ').replace(/,([^,]*)$/,' and'+'$1') : arr[0]

}