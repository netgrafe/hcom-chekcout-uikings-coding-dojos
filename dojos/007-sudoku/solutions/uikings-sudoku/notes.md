# SudokuTable
- selectedCell
- pushedButton
- gameEnded
- 1: 0 darab van már a táblán
- 2: 2 darab van már a táblán
- 3: 9 darab van már a táblán (innen tudjuk, hogy inaktívra kell-e rakni)
- sorfolytonosan tárulunk benne SudokuCell -eket
- metódusok az egyes csoportosítások lekéréséhez:
    - `getRow(x)`
    - `getSection(x)` (3 x 3)
    - `getColumn(x)`

# SudokuCell

- value
- isReadOnly
- isSelected (mégsem kell, úgy döntöttünk, inkább a tábla adata ez)
- x
- y
- appearence  (lehetséges értékek)
    - `inactive`
    - `error` (törlés gombbal lehet kikerülni belőle)
    - `focused` - sötétebb kék
    - `highlighted` - világoskék - a kijelölt cella sorában és oszlopában lévő cellák
    - `grouped` - vörös, azonos számok kijelölése

# ValueSelector

- value
- appearence
    - `inactive`
    - `active`
    - `error`
- isDisabled

# Játékfolyamat

## Mezőbe kattintás

- selectedCell értéke beállít (tábla szinten)
- végigmegyünk minden cellán
    - ha adott cella = selectedCell
        - ha üres -> focused
        - ha nem üres -> grouped
    - ha adott cella nem a selectedCell
        - ha x vay y koordináta egyezik -> highlighted
        - egyébként ha az értéke megegyezik a selectedCell értékével ami nem üres -> grouped
        - egyébként inaktív

## Szám gombra rányomás

- írható cella egyáltalán?
- ha nem valid
    - a selectedCell és a pushedButton sárgítása
- ha valid
    - value frissít -> selectedCell
    - appearence frissít
    - group kijelöl / megszüntet (törlés gomb esetén)
    - ki kell-e szürkíteni a gombot (mind a 9 fenn van) / újra kékké tenni (törlés gomb esetén)?
