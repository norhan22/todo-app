import { todo } from "../../../server/index.js";

describe("Todo Add New Task", function () {
  ////////////////////
  // testFun
  ////////////////////
  const testFun = (data, result) => {
    test(`${Object.values(data)} should return ${result}`, () => {
      expect(todo.addTask(data)).toBe(result);
    });
  };
  /////////////////////
  // Test Cases
  /////////////////////
  testFun({ content: "test1", isDone: false }, [
    { id: 1, content: "test1", isDone: false },
  ]);
  testFun({ content: "", isDone: false }, "The content is invalid");
});
