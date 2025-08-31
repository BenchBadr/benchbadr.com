---
lang: en
---

This website was built with React and relies on `react-markdown` along with a few `remark` and `rehype` plugins. It is a way for me to share thoughts and resources, which are mainly stored in markdown but there is also a page dedicated to my papers, which are not necessarily academic. Finally, you will find a section "About me" that includes personal information such as my *Curriculum Vitae*.

When reading an article, all the tools you'll need are already there. Details below:

> [!info]- Tools embedded in articles
>- Automated table of content
>	- Personalized and made from scratch. You can read more about the concept in this [LinkedIn post](https://www.linkedin.com/feed/update/urn:li:activity:7357369452708917249/)
>- Search tool
>	- Different from `Ctrl` + `F` as it searches through the markdown code rather than the rendered product. Allowing you for example to search math expressions and find the line of the corresponding rendered $\LaTeX$ (which you can't do with Ctrl + F)
>- AI tool
>	- Powered by https://pollinations.ai API. 
>		- Serving `GPT 4.1`
>	- No conversation is saved and no login is required. Rates may apply.
>	- Already provided with the current article's content so you can just ask questions about it.
>	- In order to make things faster, I refined prompts for the best use-cases I found and made them slash commands that you can use everywhere:
>		- `/qcm`  - Makes a multiple choice questions with answers in collapsed, can be reused to get other questions. Unless specified otherwise, language will be the language of the article.
>		- `/search <query>` - A permissive substitute to the search tool. Will find any sections that corresponds while not necessarily fully matching (formulation-wise).


## How to navigate

1. Manually
	- Click on the folders / files manually on display on this page
	- Otherwise you can the "file explorer" in the sidebar.
2. Intelligent search bar
	- Use `Ctrl/Cmd`+`P` to open the search bar. Otherwise you can use the search bar above as they have exactly the same utility.
	- It performs a conditional DFS in the file tree.
	- Is it **permissive**: you can type in wrong paths because folders are filters.
		- `maths/Ch1` while return all files (even in subfolders) in maths that starts with `Ch1`
	- Once results are found, either click manually (or `Ctrl/Cmd` + Click to open in a new tab)
	- Either use the shortcuts:
		- `Up` / `Down` : navigates to a given results
		- `Enter` : Open the result
		- `Ctrl/Cmd` + `Enter` : Open the result in a new tab

## Recent releases
- Publication of Map Maker in [/papers](/papers)
- Publication of L1 / S2 maths resources in [/maths](/maths). 


# Blog posts

Below you can find my personal blog which ranges from projects showcase to personal thoughts.

