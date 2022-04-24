Feature: As a user, from different market regions, I want to be able to visit the store front and view the content available in my region

  Scenario Outline: De beers home page should display content based on selected market region
    Given A user from one of the "<CountryCode>"
    When The user visits the store front "<PageContent>"
    Then They should be able to view the content related to the "<MarketRegions>"
    Examples:
      | CountryCode | MarketRegions  | PageContent                                                                                                                                      |
      | FR          | France         | Trouvez votre cadeau idéal pour la fête des mères chez De Beers. Achetez maintenant et bénéficiez d'une livraison, retours et échanges gratuits. |
      | IT          | Italy          | Find your perfect diamond at De Beers. Shop now with complimentary delivery, returns and exchanges.                                              |
      | GB          | United Kingdom | Find your perfect diamond at De Beers. Shop now with complimentary delivery, returns and exchanges.                                              |

  Scenario Outline: Engagement Rings section should be available to user to select product
    Given A user from one of the market region
    When I view all available Engagement Rings
    Then I should be able to filter the product by all available filters "<Material>" and "<Size>" and "<Cut>" and "PriceFrom" and "PriceTo"
    Examples:
      | ResultCount | Material | Size | Cut     | PriceFrom | PriceTo | FilterResCount |
      | 95          | PLANTINM | 50   | CUSHION | 20        | 80      | 6              |

  Scenario Outline: user personalise the engaement ring and adds to shopping bag
    Given A user from one of the market region
    When I view all available Engagement Rings
    When I view the details of a ring
    Then I should be be able to personalise the ring on and add it to the shopping bag "<Clarity>" and "<Colour>" and "<Size>"
    Examples:
      | Clarity | Colour | Size |
      | VS1     | G      | 50   |
