const convertDate = (commentDate) => {
  let theDate = commentDate;
  let month = parseInt(theDate.substring(5, 7))-1;
  let day = theDate.substring(8, 10);
  let year = theDate.substring(0, 4);
  let hour = theDate.substring(11, 13);
  let minute = theDate.substring(14, 16)
  let currentDate =  new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();
  let currentHour = currentDate.getHours();
  let currentMinute = currentDate.getMinutes();
  let theCommentDate = new Date(year, month, day, hour, minute);
  let nowDate = new Date(currentYear, currentMonth, currentDay, currentHour, currentMinute)
  let minutesSincePost = (Math.floor(((nowDate - theCommentDate) / (1000 * 60))) + 420)
  let minutesInHour = 60;
  let minutesInDay = minutesInHour * 24;
  let lessThanYear = Math.trunc(minutesSincePost / (minutesInDay * 365));
  let lessThanMonth = Math.trunc(minutesSincePost / (minutesInDay * 30));
  let lessThanDay = Math.trunc(minutesSincePost / minutesInDay);
  let lessThanHour = Math.trunc(minutesSincePost / minutesInHour);
  if (lessThanYear > 1) {
    return (lessThanYear + " years ago");
  } else if (lessThanYear === 1) {
    return "1 year ago";
  } else {
    if (lessThanMonth > 1) {
      return (lessThanMonth + " months ago");
    } else if (lessThanMonth === 1){
      return "1 month ago";
    } else {
      if (lessThanDay > 23) {
        return "4 weeks ago";
      } else if (lessThanDay > 17) {
        return "3 weeks ago";
      } else if (lessThanDay > 10) {
        return "2 weeks ago";
      } else if (lessThanDay > 6) {
        return "1 week ago";
      } else if (lessThanDay > 1) {
        return (lessThanDay + " days ago");
      } else if (lessThanDay === 1) {
        return "1 day ago";
      } else {
        if (lessThanHour > 1) {
          return (lessThanHour + " hours ago");
        } else if (lessThanHour === 1) {
          return "1 hours ago";
        } else {
          if (minutesSincePost > 1) {
            return (minutesSincePost + " minutes ago");
          } else if (minutesSincePost === 1) {
            return "1 minute ago";
          } else {
            return "Less than a minute ago";
          }
        }
      }
    }
  }
}

export default convertDate;
