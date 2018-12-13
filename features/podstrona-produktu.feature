@podstrona-produktu

Feature: Testy dla podstrony produktu

  Background:
    Given Użytkownik otwiera stronę Automation Practice
    When otwiera stronę szczegółów dowolnego produktu z oferty ze strony głównej

  Scenario: Przeglądanie galerii zdjęć produktu bez powiększania
    Then umieszcza kursor nad dowolnym zdjęciem z galerii i zdjęcie zostaje zmienione

  Scenario: Przeglądanie galerii zdjęć produktu w powiększeniu
    And wciska dowolne zdjęcie z galerii
    Then wciska przycisk kolejnego zdjęcia i zdjęcie w galerii zostaje zmienione

  Scenario: Produkt posiada opis oraz tabelę własności
    Then strona produktu zawiera opis
    And strona produktu zawiera tabelę własności produktu

  Scenario: Przełączanie stron z użyciem nawigacji ze ścieżką podstron
    Then wciskając dowolny element ze ścieżki zostaje przeniesiony na odpowiednią podstronę
