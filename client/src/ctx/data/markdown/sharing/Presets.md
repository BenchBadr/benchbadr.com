
# Math preset

```
$\newcommand{\K}{\mathbb{K}}\newcommand{\m}[1]{\begin{pmatrix}#1\end{pmatrix}}\newcommand{\ub}[2]{\underset{#2}{\underbrace{#1}}}\newcommand{\R}{\mathbb{R}}\newcommand{\id}{\text{id}}\newcommand{\eps}{\varepsilon}\newcommand{\cases}[1]{\begin{cases}#1\end{cases}}\newcommand{\rcases}[1]{\begin{rcases}#1\end{rcases}}\newcommand{\N}{\mathbb{N}}\newcommand{\sun}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\sum}}}\newcommand{\mc}{\mathcal}\newcommand{\ms}{\mathscr}\newcommand{\Z}{\mathbb{Z}}\newcommand{\sub}{\subset}\newcommand{\pron}[2]{\overset{#2}{\underset{\begin{matrix}#1\end{matrix}}{\prod}}}\newcommand{\C}{\mathbb{C}}\newcommand{\align}[1]{\begin{array}{l}#1\end{array}}\newcommand{\tr}{\text{tr}}\newcommand{\dt}[1]{\left|\begin{array}{l}#1\end{array}\right|}\newcommand{\piv}[1]{\underset{\begin{array}{l}#1\end{array}}{=}}\newcommand{\ov}[2]{\overset{#2}{\overbrace{#1}}}\newcommand{\mb}[1]{\begin{matrix}#1\end{matrix}}\newcommand{\com}{\text{com}}\newcommand{\td}[1]{\underset{#1}{\longrightarrow}}\newcommand{\Q}{\mathbb{Q}}\newcommand{\supp}{\text{supp}}\newcommand{\card}{\text{card}}\newcommand{\sp}{\text{Sp}}\newcommand{\vect}[1]{\text{Vect}\left(#1\right)}\newcommand{\ifff}[1]{\underset{#1}{\iff}}\newcommand{\eqv}[1]{\underset{#1}{\sim}}$
```

# TikZ preset

```tikz

```
```tikz
\usepackage{amsmath,amssymb}
\usetikzlibrary{decorations.pathreplacing}
\begin{document}


% Function
\newcommand{\f}{y = x} % Alt
\newcommand{\fo}{\x} % Eval

% Grid controls 
\newcommand{\xa}{0} % xa
\newcommand{\xb}{5} % xb

\newcommand{\ya}{\xa} % ya
\newcommand{\yb}{\xb} % yb

% Optional negative arrows
\newcommand{\xc}{5}
\newcommand{\yc}{5} 

% Advanced settings
\newcommand{\gridSizeX}{-0.9}
\newcommand{\gridSizeY}{\gridSizeX}

% Utilities
\edef\xmin{\number\numexpr \xa - \xc\relax}
\edef\xmax{\number\numexpr \xb\relax}
\edef\ymin{\number\numexpr \ya - \yc\relax}
\edef\ymax{\number\numexpr \yb\relax}

\edef\xe{\number\numexpr \xb - 1\relax}
\edef\ye{\number\numexpr \yb - 1\relax}

% overflow margin: one cell dim * 0.9
\newcommand{\cellMargin}{0.9}
\pgfmathsetmacro{\xminGrid}{\xmin - \cellMargin}
\pgfmathsetmacro{\yminGrid}{\ymin - \cellMargin}
\pgfmathsetmacro{\xmaxGrid}{\xmax + \cellMargin}
\pgfmathsetmacro{\ymaxGrid}{\ymax + \cellMargin}

% Drawing -----------------------------------
\begin{tikzpicture}


% Grid
\draw[step=1cm,gray,very thin] (\xminGrid, \yminGrid) grid (\xmaxGrid,\ymaxGrid);


\begin{scope}
  \clip (\xminGrid,\yminGrid) rectangle (\xmaxGrid,\ymaxGrid);

  % Arrows
  \draw[thick,->] (\xa,\ya) -- (\xmax, \ya);
  \draw[thick,->] (\xa,\ya) -- (\xa, \ymax);
  \ifnum\numexpr\xc>0\relax
    \draw[thick,->] (\xa,\ya) -- (\xmin,\ya);
  \fi
  \ifnum\numexpr\yc>0\relax
    \draw[thick,->] (\xa,\ya) -- (\xa,\ymin);
  \fi


  % Axis alt
  \draw[thick,->] (\xa,\ya) -- (\xmax,\ya) node[anchor=north west] {x};
  \draw[thick,->] (\xa,\ya) -- (\xa,\ymax) node[anchor=south east] {y};

  % Graduation x
  \foreach \x in {\xmin,...,\xe}
     \draw (\x cm,1pt) -- (\x cm,-1pt) node[anchor=north] {$\x$};

  % Graduation y  
  \foreach \y in {\ymin,...,\ye}
      \draw (1pt,\y cm) -- (-1pt,\y cm) node[anchor=east] {$\y$};
      
      
  \draw[red,thick,domain=\xmin:\xmax,samples=100] plot (\x,\fo) node[right] {\f};

\end{scope}

\end{tikzpicture}
\end{document}
```

