
# Exercice 1

```python
def aplatir(l):
	for elem in l:
		if type(l) == tuple:
			out.extend(aplatir(elem))

example = ((1, ((2,None), None)), (3, None))
print(aplatir(example))
```


