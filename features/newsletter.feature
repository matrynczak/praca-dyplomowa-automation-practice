@newsletter

Feature: Testy dla newslettera sklepu Automation Practice

  Scenario: Użytkownik może zapisać się do newslettera
    Given Użytkownik otwiera stronę Automation Practice
    When w pole zapisu do newslettera wpisuje swój adres email
    And wciska przycisk zapisu
    Then otrzymuje potwierdzenie subskrypcji newslettera
