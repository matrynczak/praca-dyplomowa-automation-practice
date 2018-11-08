@rejestracja-logowanie

Feature: Testy dla naglowka strony

  Background:
    Given Użytkownik otwiera stronę Automation Practice
    When wciska przycisk Sign In

  Scenario: Użytkownik rejestruje się w sklepie
    And wpisuje adres email do utworzenia konta
    And wciska przycisk Create an account
    And wypełnia wymagane pola formularza rejestracji
    And wciska przycisk Register
    Then konto zostało utworzone
    And użytkownik zostaje automatycznie zalogowany

  Scenario: Użytkownik nie może zarejestrować się bez podania wymaganych danych
    And wpisuje adres email do utworzenia konta
    And wciska przycisk Create an account
    And wypełnia formularz rejestracji z pominięciem imienia i nazwiska
    And wciska przycisk Register
    Then otrzymuje błąd rejestracji
    And brakujące pola są wymienione w powiadomieniu

  Scenario: Użytkownik loguje się prawidłowymi danymi
    And wpisuje adres email w formularzu logowania
    And wpisuje hasło
    And wciska przycisk Sign in w formularzu logowania
    Then użytkownik zostaje zalogowany
    And zostaje przeniesiony na stronę swojego konta

  Scenario: Użytkownik nie może zalogować się nieprawidłowymi danymi
    And wpisuje adres email w formularzu logowania
    And wpisuje nieprawidłowe hasło
    And wciska przycisk Sign in w formularzu logowania
    Then użytkownik otrzymuje informację błędu logowania
#
  Scenario: Przypomnienie hasła przy próbie logowania
    And wciska link Forgotten your password
    And uzupełnia adres email którym się loguje
    And wciska przycisk Retrieve Password
    Then otrzymuje potwierdzenie wysłania przypomnienia na poprawny email
