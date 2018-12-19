@zakup-towaru

Feature: Testy dla procesu zakupu towaru

  Background:
    Given Użytkownik otwiera stronę Automation Practice
    When wciska przycisk Sign In
    And wpisuje adres email w formularzu logowania
    And wpisuje hasło
    And wciska przycisk Sign in w formularzu logowania
    And wciska przycisk loga w nagłówku
    And dla dowolnego produktu z oferty ze strony głównej wciska przycisk Add to cart
    And wciska przycisk Proceed to checkout na wyświetlonym oknie

  Scenario: Kupno produktu – użytkownik zalogowany
    And wciska przycisk Proceed to checkout na stronie koszyka
    And potwierdza zgodność danych dostawy
    And zaznacza znajomość regulaminu
    And potwierdza sposób dostawy
    And wybiera dowolny sposób płatności
    And potwierdza zamówienie
    Then otrzymuje potwierdzenie dokonania zakupu

  Scenario: Kupno produktu – użytkownik niezalogowany
    And użytkownik wylogowuje się
    And wciska przycisk loga w nagłówku
    And dla dowolnego produktu z oferty ze strony głównej wciska przycisk Add to cart
    And wciska przycisk Proceed to checkout na wyświetlonym oknie
    And wciska przycisk Proceed to checkout na stronie koszyka
    And wpisuje adres email w formularzu logowania
    And wpisuje hasło
    And wciska przycisk Sign in w formularzu logowania
    And potwierdza zgodność danych dostawy
    And zaznacza znajomość regulaminu
    And potwierdza sposób dostawy
    And wybiera dowolny sposób płatności
    And potwierdza zamówienie
    Then otrzymuje potwierdzenie dokonania zakupu

  Scenario: Użytkownik może wrócić do dowolnego etapu kupna korzystając z kafelków etapów
    And wciska przycisk Proceed to checkout na stronie koszyka
    And potwierdza zgodność danych dostawy
    And zaznacza znajomość regulaminu
    And potwierdza sposób dostawy
    And wybiera dowolny sposób płatności
    Then wciska dowolny wcześniejszy etap i zostaje przeniesiony na stronę odpowiadającą wybranemu etapowi procesu kupna

  Scenario: Anulowanie procesu zakupu i powrót do oferty
    And wciska przycisk Proceed to checkout na stronie koszyka
    And potwierdza zgodność danych dostawy
    And zaznacza znajomość regulaminu
    And potwierdza sposób dostawy
    And wciska przycisk Continue shopping na stronie koszyka
    Then użytkownik zostaje przeniesiony na stronę główną
