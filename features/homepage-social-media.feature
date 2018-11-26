@social-media-homepage

Feature: Testy dla odnosnikow do social media na stronie głównej

  Background:
    Given Użytkownik otwiera stronę Automation Practice

  Scenario: Otwarcie linku do Facebooka z poziomu stopki
    When wciska ikonę 'facebook' w stopce
    Then zostaje przeniesiony na nowej karcie na konto 'facebook'

  Scenario: Otwarcie linku do Twittera z poziomu stopki
    When wciska ikonę 'twitter' w stopce
    Then zostaje przeniesiony na nowej karcie na konto 'twitter'

  Scenario: Otwarcie linku do YouTube z poziomu stopki
    When wciska ikonę 'youtube' w stopce
    Then zostaje przeniesiony na nowej karcie na konto 'youtube'

  Scenario: Otwarcie linku do GooglePlus z poziomu stopki
    When wciska ikonę 'google-plus' w stopce
    Then zostaje przeniesiony na nowej karcie na konto 'google-plus'
