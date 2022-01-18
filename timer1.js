const intervals = process.argv.slice(2).sort((a, b) => a - b)


for (let interval of intervals) {
  let parsedInterval = Number(interval);
  if(intervals.length > 0 && parsedInterval >= 0  && typeof parsedInterval === 'number') {
      setTimeout(() => {
      process.stdout.write(`. => ${interval}\n`);
    }, parsedInterval * 1000)
  }
}