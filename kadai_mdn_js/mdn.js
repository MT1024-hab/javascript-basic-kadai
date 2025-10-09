// ...existing code...
console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"

// 今日の日付を取得してコンソールに出力
const today = new Date();
console.log(today.toLocaleString('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long'
}));
// ...existing code...