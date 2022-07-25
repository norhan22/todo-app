describe("TODO app", function () {
  it("Add Task", () => {
    // cy.electronVisitUrl("./mainWindow", "http://localhost:9080/#/");
    cy.visit("/");
    cy.get("input").type("cypress task 1");
  });
});
