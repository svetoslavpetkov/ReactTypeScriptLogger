export class PromiseUtil {
  static wait(milliseconds: number = 500): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds)
    });
  }

  static async return<T>(data: T, milliseconds: number = 500) : Promise<T> {
    await PromiseUtil.wait(milliseconds);
    return data;
  }

  static async do(action: CallableFunction, milliseconds: number = 500) : Promise<void> {
    await PromiseUtil.wait(milliseconds);
    return action();
  }
}