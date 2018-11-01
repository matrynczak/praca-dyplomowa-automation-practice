@naglowek

Feature: Testy dla naglowka strony

  Background:
    Given Użytkownik otwiera stronę Automation Practice

  Scenario: Użytkownik może otworzyć stronę Contact Us przez nagłówek
    When wciska przycisk Contact Us
    Then użytkownik zostaje przeniesiony na stronę kontaktową sklepu

  Scenario: Użytkownik może otworzyć stronę Sign In przez nagłówek
    When wciska przycisk Sign In
    Then użytkownik zostaje przeniesiony na stronę logowania rejestracji do sklepu

  Scenario: Kliknięcie w logo w nagłówku otwiera stronę główną
    When przechodzi na dowolną podstronę
    And wciska przycisk loga w nagłówku
    Then użytkownik zostaje przeniesiony na stronę główną
