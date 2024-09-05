export function getTimeCurrent(){
      const date = new Date();
      let second = date.getSeconds();
      second = second > 9 ? second : `0${second}`;
      let minute = date.getMinutes();
      minute = minute > 9 ? minute : `0${minute}`;
      let hour = date.getHours();
      hour = hour > 9 ? hour : `0${hour}`;
      let day = date.getDay();
      day = day > 9 ? day : `0${day}`;
      let month = date.getDay();
      month = month > 9 ? month : `0${month}`;

      const year = date.getFullYear();
      return `${day}-${month}-${year} ${hour}:${minute}:${second}`;
}