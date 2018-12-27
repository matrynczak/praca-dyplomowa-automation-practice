# praca-dyplomowa-automation-practice
Testy automatyczne dla strony Automation Practice wykonane w ramach pracy dyplomowej inżynierskiej.

Do uruchomienia testów niezbędne jest posiadanie zainstalowanego środowiska Node.js oraz menadżera pakietów npm.

W celu uruchomienia testów należy wykonać następujące kroki:
1. Skopiować zawartość repozytorium na dysk lokalny
2. Wewnątrz katalogu 'praca-dyplomowa-automation-practice' w terminalu odpalić komendę:
    <pre><code>npm install</code></pre>
3. Po zainstalowaniu wszystkich pakietów niezbędnych do prawidłowego działania biblioteki można uruchamiać testy

W celu uruchomienia wszystkich testów należy w terminalu odpalić komendę:

    npm run test-local

W celu uruchomienia testów dla wybranego featura należy w terminalu odpalić komendę:

    npm run test-local --spec nazwa_featura.feature
gdzie nazwa_featura to nazwa pliku z katalogu '/features', dla którego chcemy uruchomić zestaw testów.


W celu wygenerowania raportu z wykonanych testów należy w terminalu odpalić komendę:

    allure generate

