@oferta-strona-glowna

Feature: Testy dla oferty ze strony głównej

  Background:
    Given Użytkownik otwiera stronę Automation Practice

  Scenario: Przeglądanie kategorii Popular i Best Sellers
    When wciska przycisk Best Sellers
    Then produkty na stronie zmieniają się
    And wciska przycisk Popular
    Then użytkownik wraca do widoku początkowego

  Scenario: Każdy produkt posiada link do strony szczegółów
    Then każda oferta na stronie posiada link do szczegółów

  Scenario: Podstrona szczegółów oferty odpowiada produktowi
    Then otwierając dowolny produkt z galerii ofert przechodzi na poprawną podstronę

  Scenario: Produkt posiada szybki podgląd
    When przesuwa kursor na dowolny produkt z galerii ofert i wciska Quick View
    Then zostaje otwarte okno z szczegółami produktu
