@koszyk

Feature: Testy dla koszyka i procesów związanych z używaniem go na stronie

  Background:
    Given Użytkownik otwiera stronę Automation Practice

  Scenario: Użytkownik dodaje do koszyka produkt ze strony głównej
    When dla dowolnego produktu z oferty ze strony głównej wciska przycisk Add to cart
    And wciska przycisk Proceed to checkout na wyświetlonym oknie
    Then wybrany produkt znajduje się w koszyku

  Scenario: Użytkownik dodaje do koszyka produkt ze strony kategorii
    When wciska przycisk kategorii 'Women' w menu głównym
    And dla dowolnego produktu z oferty ze strony kategorii wciska przycisk Add to cart
    And wciska przycisk Proceed to checkout na wyświetlonym oknie
    Then wybrany produkt znajduje się w koszyku

  Scenario: Użytkownik dodaje do koszyka produkt ze strony szczegółów produktu
    When dla dowolnego produktu z oferty ze strony głównej wciska przycisk z nazwą
    And wciska przycisk Add to cart na stronie produktu
    And wciska przycisk Proceed to checkout na wyświetlonym oknie
    Then wybrany produkt znajduje się w koszyku

  Scenario: Użytkownik dodaje kilka różnych produktów do koszyka
    When dla dowolnego produktu z oferty ze strony głównej wciska przycisk z nazwą
    And wciska przycisk Add to cart na stronie produktu
    And wciska przycisk Continue shopping
    And wciska przycisk loga w nagłówku
    When dla dowolnego produktu z oferty ze strony głównej wciska przycisk z nazwą
    And wciska przycisk Add to cart na stronie produktu
    And wciska przycisk Continue shopping
    And wciska przycisk loga w nagłówku
    When dla dowolnego produktu z oferty ze strony głównej wciska przycisk z nazwą
    And wciska przycisk Add to cart na stronie produktu
    And wciska przycisk Proceed to checkout na wyświetlonym oknie
    Then wybrane produkty znajdują się w koszyku

  Scenario: Usuwanie produktu z koszyka
    When dla dowolnego produktu z oferty ze strony głównej wciska przycisk Add to cart
    And wciska przycisk Proceed to checkout na wyświetlonym oknie
    And wciska przycisk usunięcia produktu
    Then koszyk jest pusty

  Scenario: Przejście do koszyka z poziomu nagłówka
    When wciska przycisk Cart w nagłówku strony
    Then zostaje przeniesiony do strony zawartości koszyka

  Scenario: Podgląd zawartości koszyka poprzez okno w nagłówku
    When dla dowolnego produktu z oferty ze strony głównej wciska przycisk Add to cart
    And wciska przycisk Continue shopping
    And rozwija zawartość koszyka w nagłówku
    Then koszyk zawiera dodany wcześniej produkt

  Scenario: Użytkownik sprawdza zawartość koszyka na jego stronie i wraca do zakupów
    When dla dowolnego produktu z oferty ze strony głównej wciska przycisk Add to cart
    And wciska przycisk Proceed to checkout na wyświetlonym oknie
    And wciska przycisk Continue shopping na stronie koszyka
    Then użytkownik zostaje przeniesiony na stronę główną
#
  Scenario: Użytkownik dodaje produkt do koszyka i przechodzi do kupna
    When dla dowolnego produktu z oferty ze strony głównej wciska przycisk Add to cart
    And wciska przycisk Proceed to checkout na wyświetlonym oknie
    And wciska przycisk Proceed to checkout na stronie koszyka
    Then zostaje poproszony o zalogowanie się – proces kupna został rozpoczęty

