export const add = (numbers: string): number | Error => {
  try {
    if (!numbers) {
      return 0;
    }
    let total = 0;
    numbers = numbers.trim();
    const delimiter = /,|\n/;
    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
    let customDelimiter = '';
    if (customDelimiterMatch) {
      customDelimiter = customDelimiterMatch[0];
      numbers = numbers.replace(/^\/\/(.+)\n/, '');
    }

    const delimiters = customDelimiter ? new RegExp(`[${customDelimiter},\n]`) : delimiter;
    const nums = numbers.split(delimiters).map(Number);
    
    if (numbers.length <= 2) {
      const num = parseInt(numbers);
      if (num < 0) {
        return new Error(`negative numbers not allowed ${num}`);
      }
      return num;
    }
    total = nums.reduce((sum, num) => (sum = sum + (num > 1000 ? 0 : num)), 0);
    return total;
  } catch (error) {
    return new Error("Unexpected Error");
  }
};