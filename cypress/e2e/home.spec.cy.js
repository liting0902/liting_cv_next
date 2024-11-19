describe("Home page spec", () => {
  beforeEach(() => {
    cy.customCmdVisit();
  });
  it("nav bar spec", () => {
    cy.get(".nav").find("img");
    cy.getByCyId("nav-item").as("navItem");
    cy.get("@navItem").should("have.length", 2);
    cy.get("@navItem").eq(0).contains("Basic info");
    cy.get("@navItem").eq(1).contains("Experience");
    cy.getByCyId("locale-btn").should("exist").click();
    cy.getByCyId("locale-menu").should("exist");
    cy.getByCyId("locale-zh").should("exist");
    cy.getByCyId("locale-en").should("exist");
  });

  it("dashboard spec", () => {
    cy.location("origin").then((url) => {
      cy.log("origin:", url);
    });
    cy.getByCyId("dashboard-cards").each((element, i) => {
      if (i > 2) {
        expect(element.attr("href")).to.equal(
          "https://github.com/liting0902/liting_cv_next"
        );
      } else {
        cy.wrap(element).click({ force: true });
        cy.getByCyId("modal")
          .should("exist")
          .then(() => {
            cy.wait(2000);
            cy.getByCyId("modal-close").click();
          });
      }
    });
  });
});
