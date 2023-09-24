describe('SauceDemo Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should login with problem_user and add items to cart', () => {


    cy.log('Visit auction page');
    cy.get('[data-test=username]').type('problem_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();

    const failedItems = [];
    cy.get('.inventory_list .inventory_item').each(($item) => {
      const itemName = $item.find('.inventory_item_name').text();
      $item.find('.btn_inventory').click();

      cy.get('.shopping_cart_badge').then(($badge) => {
        const cartCount = parseInt($badge.text());
        expect(cartCount).to.be.greaterThan(0);
      });

      cy.get('.shopping_cart_link').click();

      cy.get('.cart_list .inventory_item_name').should(($cartItem) => {
        if (!$cartItem.text().includes(itemName)) {
          failedItems.push(itemName);
        }
      });
    }).then(() => {
      if (failedItems.length > 0) {
        cy.log(`Failed to add the following items to the cart: ${failedItems.join(', ')}`);
      }
    });

  });

  it('should login with standard_user and verify login and sorting', () => {


    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();

    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

    cy.get('.product_sort_container').select('Name (Z to A)');

    cy.get('.inventory_list .inventory_item')
      .should('have.length.gt', 0)
      .then(($items) => {
        const itemNames = $items.toArray().map((item) =>
          Cypress.$(item).find('.inventory_item_name').text()
        );

        const sortedItemNames = [...itemNames].sort((a, b) => b.localeCompare(a));

        expect(itemNames).to.deep.equal(sortedItemNames);
      });
  });

});