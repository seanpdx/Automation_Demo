Feature: Search a term  in each of the major search engines
   Feature Description: Validate that the Wikipedia article is returned in the results

   @searchTerm
   Scenario Outline: User should be able to search a term with each of the following search engines
      Given I can access the <searchEngine> homepage at <URL>
      When I search "quality assurance wikipedia"
      Then I should be able to visit the corresponding Wikipedia page

      Examples:
         | searchEngine | URL                     |
         | Google       | https://www.google.com/ |
         | DuckDuckGo   | https://duckduckgo.com/ |
         | Bing         | https://www.bing.com/   |

