describe("Home page spec", () => {
  beforeEach(() => {
    cy.customCmdVisit();
  });

  function modalCheck() {
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
  }
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
      cy.wait(3000);
      cy.wrap(nav).children().contains(`${navText[i][language]}`);
      cy.location("pathname").should("eq", path[i][language]);
      if (i === 0) {
        modalCheck();
      } else if (i === 1) {
        cy.getByCyId("more-info-icon").each((open, index) => {
          cy.wrap(open).click({ force: true });
          cy.wait(1000);
          if (index > 4) {
            cy.scrollTo(1200, 0);
          }
        });
      }
    });
  }
  it("dashboard spec", () => {
    getPathname("en");
  });
  //   it("page navigation", () => {

  //   });

  it("locale navigation", () => {
    cy.getByCyId("locale-btn").should("exist").click();
    cy.getByCyId("locale-zh").click();
    // .then(() =>));
    cy.wait(5000);
    getPathname("zh");
  });
});
