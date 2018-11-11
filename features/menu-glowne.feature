@menu-glowne

Feature: Testy dla menu głównego

  Background:
    Given Użytkownik otwiera stronę Automation Practice

  Scenario: Rozwinięcie treści menu głównego
    When umieszcza kursor na przycisku 'Women' w menu głównym
    Then menu rozwija się
    And użytkownik ma możliwość wyboru podstron

  Scenario: Użytkownik otwiera podstrony kategorii głównych
    When wciska przycisk kategorii 'Women' w menu głównym
    Then zostaje przeniesiony na wybraną podstronę kategorii

  Scenario: Użytkownik przegląda podstrony wewnątrz kategorii
    When wybiera z menu kategorię 'Women' podstronami produktów
    Then wybierając kolejne podstrony zostaje przeniesiony pod poprawne adresy
