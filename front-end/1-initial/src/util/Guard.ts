export class Guard {
  static should(check: boolean, message: string): void {
    if (!check) {
      throw new Error(message);
    }
  }
  static ensure<T>(value: T | undefined, message: string): T {
    if (value === undefined || value === null) {
      throw new Error(message);
    }

    return value;
  }
}