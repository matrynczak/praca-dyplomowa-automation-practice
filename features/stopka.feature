@footer

Feature: Testy dla stopki

  Background:
    Given Użytkownik otwiera stronę Automation Practice

  Scenario: Otwarcie podstrony dla każdego klikalnego przycisku z menu stopkia
    Then wybierając kolejne przyciski menu stopki zostaje przeniesiony pod poprawne adresy

  Scenario: Otwarcie podstrony dla klikalnych przycisków z sekcji Store information stopki
    Then wybierając kolejne przyciski sekcji Store Information stopki zostaje przeniesiony pod poprawne adresy

  Scenario: Użytkownik może wysłać maila do sklepu poprzez przycisk w stopce
    When przesuwa kursor na przycisk kontaktu mailowego w stopce
    Then przycisk posiada link do wysłania wiadomości email
