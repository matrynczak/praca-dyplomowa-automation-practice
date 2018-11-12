@wyszukiwarka

Feature: Testy dla wyszukiwarki na stronie

  Background:
    Given Użytkownik otwiera stronę Automation Practice

  Scenario: Użytkownik wyszukuje produkt po frazie
    When wpisuje w wyszukiwarkę 'Printed'
    And wciska przycisk wyszukiwania
    Then otrzymuje listę zapytań ze słowem 'Printed'

  Scenario: Użytkownik wpisuje w wyszukiwarce pustą frazę
    When wciska przycisk wyszukiwania
    Then otrzymuje komunikat z prośbą o umieszczenie słowa kluczowego w celu wyszukiwania

  Scenario: Użytkownik wyszukuje produktu z niepoprawną frazą
    When wpisuje w wyszukiwarce dowolny zbiór znaków
    And wciska przycisk wyszukiwania
    Then otrzymuje komunikat o braku wyników dla szukanego słowa
