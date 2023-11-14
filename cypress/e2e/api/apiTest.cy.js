describe('Api test', () => {
  let title; //title of element 
  for (let i = 1; i <= 100; i++) {

it(`[GET] Checks if titles more than 25 characters in a list items by number ${i}`, () => {
      cy.request({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/todos/${i}`,
    }).then((response) => {
      expect(response.body).to.have.property('title');
      expect(response.body.title).to.have.length.greaterThan(25)
      title = response.body.title;
        cy.log(`Title length more than 25: "${title}"`);
      });
    });
  }
});