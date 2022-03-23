# Pierwsza apka Reactowa, część 3

Twoim zadaniem będzie przerobić i rozbudować twoją aktualną aplikację.

## Część wizualna

Użyj bibliotek komponentów (Material UI/Bootstrap/Antdesign/coś innego) żeby zbudować nową (być może lepszą) wersję wizualną swojej aplikacji. W razie potrzeby popraw style. Nie musisz decydować się na jedną konkretną bibliotekę, możesz użyć kilku, w zależności od swoich potrzeb.

Wybór bibliotek należy umieć uzasadnić, co w szczególności oznacza, że należy przejrzeć biblioteki podane na wykładzie (i być może jakieś dodatkowe) i umieć uargumentować wybór konkretnej.

## Część funkcjonalna

Wykonaj dowolne dwa z poniższych trzech podpunktów

- Dodaj routing do aplikacji (z użyciem [React Router](https://reactrouter.com/) lub innej podobnej biblioteki). Twoja aplikacja powinna składać się ze strony głównej (na której wyświetlane będzie podsumowanie wydatków i przychodów), strony wydatków (listującej wszystkie wydatki oraz formularz dodania wydatku) oraz strony przychodów (listującej wszystkie przychody oraz formularz dodawania przychodu). Na górze każdej z podstron powinna być nawigacja. Zadbaj o to, żeby aplikacja pamiętała stan twojej listy pomiędzy zmianami podstrony.

- Dodaj walidację do formularza (z użyciem [React Hook Form](https://react-hook-form.com/) lub innej podobnej biblioteki do obsługi formularzy). Walidacja powinna zapobiegać dodawaniu ujemnych przychodów i dodatnich wydatków, a także podawaniu innych wartości niż liczby w polu wartości (w tym zapobiegać podawaniu wartości pustej). Dodaj również dodatkowe walidacje jeśli uznasz to za konieczne (np. maksymalna długość jakiegoś pola). Pamiętaj, że błędy powinny być w sposób czytelny komunikowane użytkownikowi.

- Dodaj tłumaczenia do aplikacji (z użyciem [react-i18next](https://react.i18next.com/) lub innej podobnej biblioteki). Skonfiguruj bibliotekę tak, żeby dane były otypowane, to znaczy, żeby twoje IDE potrafiło podpowiadać ci odpowiednie zmienne językowe. Przetłumacz aplikację na przynajmniej dwa języki, i dodaj funkcjonalność zmiany języka w aplikacji (na przykład za pomocą buttonów albo dropdowna). Zadbaj o to, żeby tłumaczenia znajdowały się w osobnych plikach tłumaczeń (plikach z rozszerzeniem `.json`).
