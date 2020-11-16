

interface FunctionParameter{
  key: string;
  value: string;
  defaultValue?: string;
}

class TypeFunction{
  protected parameters: FunctionParameter[];
  protected functionName: string;
  protected returnType?: string;

  constructor(functionName: string){
    this.functionName = functionName;

  }

}
const lacin: number = 13;
export function test(): any{
}
var yuksel: string = "hello world";
class ClassFunction extends TypeFunction{
  private accessSpecifier: AccessSpecifier;
  
  constructor(functionName: string){
    super(functionName);
  }
}

let fatoma: ();


/**
 * Function description.
 * @param {string} sample Param description.
 * @returns Promise<string> Return description.
 */
export function sample(sample:string): Promise<string>{
}

class ClassVariables {

}


enum AccessSpecifier {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
  PROTECTED = "PROTECTED",
  DEFAULT = ""
}

class TypeClass {
  private functions: ClassFunction[] = [];
  private variables: ClassVariables[] = [];
  private className: string;
  private exported: boolean;
  private abstract: boolean;
  private extends: boolean;
  private implements: boolean;


  constructor(className: string, abstract: boolean) {
    this.className = className;
    this.abstract = abstract;
  }


  /**
   * Function description.
   * @param {string} funcName Param description.
   * @param {string} parameters Param description.
   * @param {string} returnType Param description.
   * @param {AccessSpecifier} accessSpecifier Param description.
   */
  addFunction(funcName: string, parameters: string, returnType: string, accessSpecifier: AccessSpecifier) {
    this.functions.push();
  }

  addVariable() {

  }


  public getVariables(): ClassVariables[] {
    return this.variables;
  }

  protected getFunctions(): ClassFunction[] {
    return this.functions;
  }



}