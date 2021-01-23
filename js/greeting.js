// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = '';

// Here you can change your greetings
const gree1 = '𝘨𝘰 𝘵𝘰 𝘴𝘭𝘦𝘦𝘱  ';
const gree2 = '𝘨𝘰𝘰𝘥 𝘮𝘰𝘳𝘯𝘪𝘯𝘨  ';
const gree3 = '𝘨𝘰𝘰𝘥 𝘢𝘧𝘵𝘦𝘳𝘯𝘰𝘰𝘯  ';
const gree4 = '𝘨𝘰𝘰𝘥 𝘦𝘷𝘦𝘯𝘪𝘯𝘨  ';
const gree5 = '𝘨𝘰𝘰𝘥 𝘦𝘷𝘦𝘯𝘪𝘯𝘨  ';
const gree6 = '𝘨𝘰𝘰𝘥 𝘦𝘷𝘦𝘯𝘪𝘯𝘨  ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText = gree3 + name;
} else {
  document.getElementById('greetings').innerText = gree4 + name;
}
