describe("Navigation spec", () => {
  beforeEach(() => {
    cy.customCmdVisit();
    cy.wait(1000);
    cy.viewport(1280, 720);
  });
  function getPathname(language) {
    const navText = [
      { en: "Basic info", zh: "基本資料" },
      { en: "Experience", zh: "學經歷" },
    ];
    const path = [
      { en: "/", zh: "/zh" },
      { en: "/experience-timeline", zh: "/zh/experience-timeline" },
    ];
    cy.getByCyId("nav-item").each((nav, i) => {
      cy.wrap(nav).children().click({ force: true });
      cy.wrap(nav).children().contains(navText[i][language]);
      cy.location("pathname").should("eq", path[i][language]);
    });
  }
  it("page navigation", () => {
    getPathname("en");
  });

  it("locale navigation", () => {
    cy.getByCyId("locale-btn").should("exist").click();
    cy.getByCyId("locale-zh")
      .click()
      .then(() => getPathname("zh"));
    // ;
  });
});
