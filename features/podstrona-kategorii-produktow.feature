@podstrona-kategorii

Feature: Testy dla podstrony kategorii produktów

  Background:
    Given Użytkownik otwiera stronę Automation Practice
    When wciska przycisk kategorii 'Women' w menu głównym

  Scenario: Produkt z sekcji posiada link do szczegółów produktu
    Then wciska obrazek produktu z Specials i zostaje przeniesiony na odpowiednia strone

  Scenario: Podgląd szczegółów produktu w oknie Quick View
    And przesuwa kursor na dowolny produkt z galerii ofert podstrony i wciska Quick View
    Then zostaje otwarte okno z szczegółami produktu

  Scenario: Otwarcie strony szczegółów wybranego produktu
    And wciska przycisk z nazwą dowolnego produktu i zostaje przeniosiony od odpowiednia strone
#
  Scenario: Sortowanie produktów według ceny
    And wybiera opcję sortowania od najniższej ceny
    Then produkty zostają uszeregowane od najtańszego do najdroższego
    And wybiera opcję sortowania od najwyższej ceny
    Then produkty zostają uszeregowane od najdroższego do najtańszego
#
#  Scenario: Sortowanie produktów według nazwy
#    And wybiera opcję sortowania według nazwy od A do Z
#    Then produkty zostają uszeregowane alfabetycznie od A do Z
#    And wybiera opcję sortowania według nazwy od Z do A
#    Then produkty zostają uszeregowane alfabetycznie od Z do A
#
#  Scenario: Sortowanie według dostępności w magazynie
#    And wybiera opcję sortowania według ilości w magazynie
#    Then produkty zostają uszeregowane według liczby w magazynie
#
#  Scenario: Przejście do strony subkategorii produktów
#    And wciska przycisk subkategorii Dresses
#    And wciska przycisk dowolnej subkategorii
#    Then zostaje przeniesiony na stronę wybranej subkategorii

