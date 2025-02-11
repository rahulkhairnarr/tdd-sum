export const add = (numbers: string): number | Error => {
  try {
    const total = 0;
    numbers = numbers.trim();
    if (numbers.length > 0 || numbers.length < 2) {
      const num = parseInt(numbers);
      if (num < 0) {
        return new Error(`negative numbers not allowed ${num}`);
      }
      return num;
    }
    return total;
  } catch (error) {
    return new Error("Unexpected Error");
  }
};
