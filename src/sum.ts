export const add = (numbers: string): number | Error => {
  try {
    if (!numbers) {
      return 0
    }
    let total = 0;
    numbers = numbers.trim();
    if (numbers.length <= 2 ) {
      const num = parseInt(numbers);
      if (num < 0) {
        return new Error(`negative numbers not allowed ${num}`);
      }
      return num;
    }

    const nums = numbers.split(",");
    total = nums.reduce((sum, num) => sum = sum + parseInt(num), 0);
    return total;
  } catch (error) {
    return new Error("Unexpected Error");
  }
};