describe('Friend app', function() {
    it('renders first page', function() {
      //just in case timeout due to my vpn conection to cloudDB :-(
      this.timeout(60000)
      cy.visit('http://localhost:3000')
      cy.contains('Friends')
    })

    it('renders content', function(){
      cy.get('.FriendRow').should('have.length', 6)
    })

    it('renders user page', function(){
      cy.get('.FriendRow').eq(0).contains('Details').click()
      cy.get('.FriendPage').should('not.be.empty')
    })

    it('trigger back button', function(){
      cy.get('.NavigationBackBtn').click()
      cy.contains('Friends')
    })
})