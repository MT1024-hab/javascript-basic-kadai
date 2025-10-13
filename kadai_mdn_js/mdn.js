

// 今日の日付を取得してコンソールに出力
const today = new Date();
console.log(today.toLocaleString('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}));
// ...existing code...
