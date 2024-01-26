def berechne_m(x, y, b):
    m = (y - b) / x
    return m

# Beispielwerte
maxLevel = 100
max_wert = 120
min_wert = 95

# Berechne m
ergebnis_m = berechne_m(maxLevel, max_wert, min_wert)

# Ausgabe des Ergebnisses
print(f'Das Ergebnis für m ist: {ergebnis_m}')


# petLevel
level = 23

print("Berechneter wert: ", ergebnis_m*level + min_wert)