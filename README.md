## Zadanie 1

Napisz komponent User, który będzie wyświetlał informacje o użytkowniku:

* imię
* nazwisko
* adres (ulica, miasto)
* adres email
* datę rejestracji w systemie sformatowaną w przyjazny do czytania    sposób (np. poniedziałek, 11 maja)
* zdjęcie profilowe

Skorzystaj do tego z API Random User, aby pobrać listę 10 użytkowników i przechowywać ją w komponencie UserList. Ten komponent będzie posiadał iterację i będzie wykorzystywał komponenty User.

Jeżeli nie jest przekazany adres, należy wpisać tekst brak. Jeżeli nie przekaże się imienia lub nazwiska, wówczas wyświetl komunikat: Nie przekazano imienia i nazwiska.

## Zadanie 2

Mając listę użytkowników w komponencie UserList, stwórz nową ścieżkę url w aplikacji (np. /users/:id), która będzie wykorzystywała komponent UserDetails aby wyświetlić informacje o pojedynczym użytkowniku (możesz do tego wykorzystać komponent User). W tym zadaniu nie masz API do pobrania poszczególnego użytkownika, więc jego dane musisz przekazać z poziomu listy.

### Modyfikacja

Możesz opóźnić ładowanie danych z API (np. korzystając z setTimeout) i wykorzystać bibliotekę React Placeholder, aby pokazać miejsca, w których dane się pojawią.


## Zadanie 3

Na podstawie Zadania 1 i 2 oraz informacji o lokalizacji użytkownika z API:

`"location": {
  "street": "9278 new road",
  "city": "kilcoole",
  "state": "waterford",
  "postcode": "93027",
  "coordinates": {
    "latitude": "20.9267",
    "longitude": "-7.9310"
  },
  "timezone": {
    "offset": "-3:30",
    "description": "Newfoundland"
  }
}`

wyświetl na mapie jego położenie. Wykorzystaj do tego Leaflet oraz opcjonalnie React Leaflet.

