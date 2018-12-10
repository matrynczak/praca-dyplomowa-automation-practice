@filtrowanie-na-stronie-kategorii

Feature: Testy dla filtra wewnątrz kategorii

  Background:
    Given Użytkownik otwiera stronę Automation Practice
    When wciska przycisk kategorii 'Women' w menu głównym

  Scenario: Filtrowanie według kategorii
    And zaznacza opcję Dresses
    Then w rezultacie otrzymuje sukienki

  Scenario: Filtrowanie według koloru
    And zaznacza dowolny kolor z listy
    Then w rezultacie otrzymuje tylko ubrania z wybranym kolorem

  Scenario: Filtrowanie według materiału ubrania
    And zaznacza dowolny materiał z listy
    Then w rezultacie otrzymuje zawężoną listę ubrań

  Scenario: Filtrowanie według ceny
    And wybiera dowolny zakres cenowy
    Then w rezultacie otrzymuje tylko ubrania z ceną z wybranego zakresu

  Scenario: Filtrowanie według kilku kryteriów
    And zaznacza opcję Dresses
    And zaznacza dowolny rozmiar z listy
    And zaznacza dowolny kolor z listy
    And zaznacza dowolny materiał z listy
    And zaznacza dowolny styl z listy
    And zaznacza dowolną cechę z listy
    And zaznacza produkty dostępne w magazynie
    And zaznacza produkt nowy
    Then otrzymuje listę produktów spełniających zaznaczone kryteria

  Scenario: Czyszczenie kryteriów filtracji – powrót do widoku początkowego
    And zaznacza opcję Tops
    And zaznacza dowolny rozmiar z listy
    And usuwa wszystkie kryteria z sekcji Enabled filters
    Then lista oferta zawiera listę początkową

  Scenario: Wprowadzone kryteria filtracji nie pasują do żadnego produktu
    And zaznacza opcję Tops
    And wybiera zakres cenowy maksymalny
    Then otrzymuje komunikat o braku produktów pasujących do kryteriów
