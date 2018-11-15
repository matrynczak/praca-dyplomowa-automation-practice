@promocje-strona-glowna

Feature: Testy dla oferty ze strony głównej

  Background:
    Given Użytkownik otwiera stronę Automation Practice

  Scenario: Użytkownik może sprawdzić szczegóły promocji klikając w obrazek na stronie głównej
    Then przesuwając kursor po promocjach każda posiada link do szczegółów

  Scenario: Przeglądanie slidera z promocjami
    When wciska przycisk przesunięcia w prawo
    Then promocja zostaje zmieniona na drugą
    And wciska przycisk przesunięcia w prawo
    Then promocja zostaje zmieniona na trzecią
    And wciska przycisk przesunięcia w lewo
    Then promocja zostaje zmieniona na drugą
