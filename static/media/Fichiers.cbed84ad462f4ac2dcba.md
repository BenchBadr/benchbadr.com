- On accède la plupart du temps aux lignes successives d'un fichier à l'aide d'une boucle `for`

## Lire et écrire

- Lecture (mode `'r'`)
- Tout lire d'un coup 
	- `f.read()`
- Liste des lignes
	- `f.readlines()`
- Écriture (modes `a` et `w`)
	- `w` supprimé ou créé
	- `a` : complété s'il existe

# Exemples

## Ajout à un fichier

```python
f = open(path, 'a')
f.write('signé...')
f.close()
```

## Lecture

```python
f = open(path, 'r')
...
```

# With

La syntaxe `with` permet d'éviter d'avoir à fermer le fichier