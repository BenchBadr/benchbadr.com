# Non-continuité

> Montrer qu'une fonction n'est pas continue
## Option 1

$f$ n'est pas continue en $a$
- si $¬(\forall \epsilon > 0, \exists \delta > 0, |x - a|<\delta \Rightarrow |f(x) - f(a)|<\epsilon)$ 
- soit (on particularise $\epsilon$, il suffit de trouver un contre-exemple)
	- $\exists \epsilon_0 > 0$  et $\forall \delta > 0, \exists x_0 \in \R$ avec $|x_0 - a|≤\delta$ et $|f(x)-f(a)|>\epsilon$

## Option 2

$f$ n'est pas continue ne $a$ s'il existe une suite $(v_n)_{n≥0}$ telle que:
- $\lim{n\to+\infty}v_n = a$
- $\lim{n\to+\infty}{v_n} ≠ f(a)$

