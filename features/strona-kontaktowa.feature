@strona-kontaktowa

Feature: Testy dla strony kontaktowej

  Background:
    Given Użytkownik otwiera stronę Automation Practice
    When wciska przycisk Contact Us

  Scenario: Użytkownik wysyła wiadomość do sklepu - dane prawidłowe
    And wybiera dowolny temat wiadomości
    And wpisuje adres email
    And wpisuje dowolny tekst wiadomości
    And wciska przycisk Send
    Then otrzymuje potwierdzenie wysłania wiadomości do sklepu

  Scenario: Użytkownik nie może wysłać wiadomości z nieprawidłowymi danymi
    And wybiera dowolny temat wiadomości
    And wpisuje nieprawidłowy adres email
    And wpisuje dowolny tekst wiadomości
    And wciska przycisk Send
    Then otrzymuje odmowę wysłania wiadomości – nieprawidłowe dane
