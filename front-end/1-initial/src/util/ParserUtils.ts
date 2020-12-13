export class ParserUtil {
  static parseJson(input:string): any {
    const rawParse = JSON.parse(input);
    ParserUtil.prepareObject(rawParse);
    return rawParse;
  }

  static prepareObject(input: any) {
    if (input == null || input === undefined) {
      return;
    }
    Object.keys(input).forEach( prop => {
      if (typeof input[prop] === "string" ) {
        ParserUtil.trySetObjectValue(input, prop);
      } else if (typeof input[prop] === "object" ) {
        ParserUtil.prepareObject(input[prop]);
      } else if (Array.isArray(input[prop])) {
        input[prop].forEach((item: any) => {
          ParserUtil.prepareObject(item);
        });
      } else if (typeof input === "object" ) {
        ParserUtil.prepareObject(input[prop]);
      }
    })
  }

  static trySetObjectValue(input: any, prop: string) {
    const propToLower = prop.toLowerCase()
    if (propToLower.includes("date") || propToLower.includes("time")) {
      try {
        const date = new Date(input[prop])
        input[prop] = date;
      } catch {

      }
    }
  }
}