---
lang: en
date: 16/09/2025
type: Essay
title: AI, empowering or parasiting?
banner: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vermeer-view-of-delft.jpg/640px-Vermeer-view-of-delft.jpg
---
> This essay is in progress and is still being corrected. This is only here as a preview

All of us had an extended experience of what value AI can provide in our daily life. Lately I have been noticing that more and more people are using ChatGPT (or similar tools) on a daily basis. When a question bugs someone, they tend to bring up an AI tool rather than use a classical search engine. Due to these habits evolution, more and more softwares are adapting by integrating AI in their products. Lately we have seen the emergence of AI-first browsers such as **Dia Browser** and **Comet Browser** but also reference browsers planning and actively integrating these features, **Google Chrome** is reportedly working on an AI sidebar similar to comet but also started rolling out *AI Overviews* (not available in the EU yet) or **Microsoft Edge** which has drawn a lot of attention in recent years due to extensive integration of OpenAI cutting-edge technologies. No product is left apart, even search engines like DuckDuckGo with their brand new [duck.ai](https://duck.ai) subscription. It is becoming overwhelming to keep up with all these changes and significantly harder to find softwares with no mention of AI features anymore. 
On the other hand, coding has been revolutionized with the emergence of coding assistants such as **Github Copilot**, **Codex CLI**, **Claude Code**, **Cursor** and many more...
It is becoming a must to find information as forums are now left apart. Sometimes even documentations have a builtins AI-assistant to help find information faster.
In this essay I am going to discuss how it affects our productivity in the first part, secondly I will present what I call the "parasite effect", then present some effective use-cases that I consider to be the "good way" of taking most out of AI and finally, describe my prediction of the **future of the web**.
All references of the essay will automatically be embedded at the end of the page as web previews. You can hover footnotes reference to see details or click to be directed to the footnote section.

# I - Effects on productivity

As we are using AI more and more, the effects on our productivity are non-negligible. When I want to look up something, how I do it depends on how much information I need on the matter. I do consider **Wikipédia** to be a reliable source when it comes to facts (although bias may appear in formulations, most often in politics). If I need to know something about an event I know that there won't be any information dissimulation which is the benefit of crowd-sourcing.

However, sometimes I need information faster: for example finding a date, a name of a concept or even simpler: a definition. 
## 1. Finding informations

Instead of skimming through dozens of articles, I can just run a **Pro Search** (or equivalent) on some AI app. I find Perplexity to be good and fast to find information for me and always put the sources in footnotes and even highlight exact quotes from the original article. On the other hand, products such as **Gemini** tend to not prioritize search over their acquired knowledge. With the DeepSearch mode enabled it reads much more content on the web and provides a long essay after around ten minutes. I find it too pedantic and lacks concision. It seems like a good way to generate articles but not to find information. The same can be applied to Grok's DeepSearch.

Although it is definitely not the best product when it comes to search, ChatGPT is among my favorites for the simple reason that its personality makes it very natural and enjoyable to talk with. Can almost feel like chatting with a friend sometimes and formatting makes it easy to get through the answers (will most often use bullet points and numbered titles but also a lot of emojis) since recents updates. Sometimes, it also includes a section **TL;DR** (too long didn't read) which summarizes the answer in a very concise way, which I find very enjoyable.

**But is it too tempting** to use an AI tool rather than running a search? How can we accurately know what to do at what instant? The new wave of AI-first browsers is trying to answer this issue by choosing for us. **Dia Browser** for example automatically chooses for us when we type in the URL bar based on the content typed. It will be either "Google" or "Chat".

And if we run an extensive search, it will also open relevant web pages for us which works somehow the same as a search engine but with no need to go through multiple results before to find relevant pages.

Lately Google was almost forced to sell its main product Google Chrome due to monopoly concerns (as it pays a huge amount of money to keep Google Search as search engine of concurrent browsers such as Firefox and Safari). They finally won their lawsuit due to the monopoly fading away with the emergence of AI-based search engines (and OpenAI recent announcement of the development of a new browser) which is the ultimate proof that there will be an important shift over the next few years when it comes to how we search.

So what future for quick searches? While the traditional way is fading away, we can be both saddened and joyful about the augmentation of productivity. On one hand, it will allow me to spend less time searching. On the other hand, it will happen less or no more to find out about new things randomly as a side-effect.

> [!info]
> Somehow, we are reliving the transition from reading multiple books to find a specific piece of information to running a search with a given query to find books using the specific piece of relevant info. 


## 2. Coding

I remember my first years of coding with no AI tool. When I had to read a lot of answers to unrelated questions in forums with the hope to find something relevant to my issue, copy-pasting code, trying it and most importantly... reading fully documentations before getting to work with libraries.

In some extreme cases, I could join some discord servers, ask my question and hope that someone is kind enough to answer.

I could spend days on a very simple issue whereas today I can just press `Cmd`+`I` and get the line of code corrected or, in some cases type some inherently wrong code functioning as a "pseudo-code" so I can get the AI to write the code for me. 

There is definitely a **before** and an **after** generative AI when it comes to coding. I can achieve much more now, and find information quicker.

Sometimes, when I am tired I can mistype things knowing that I will get them corrected in a second with AI. 

But I noticed that more technical problems will not be tackled as efficiently as a developer would do except if it is a very common coding paradigm (eg. DFS). Although this is debatable, I feel like AI has a lot of knowledge but is incapable of creating knowledge, only transforming it. 

How often will someone push themselves to think and struggle on their code when knowing that they can get it done in a second? That brings us to the second part of this essay.
# II - The parasite effect

Imagine being really tired while having to finish something before to go to sleep. First, maybe you will start thinking of functions you would need and having them generated in seconds by AI. A significant gain of time? Definitely.
Then, maybe you delegate some of the secondary components handling to AI.
And after, you wonder if you can handle one of your main components to it? Which brings us the the following question: **where to draw the line**?

Some developers decided to **not draw it** leading to a whole movement called vibe-coding consisting of having an agent working continuously on the app and fulfilling all the tasks. 

## 1. Vibe-coding

A few years ago, no-code website builders were basically a way for people to generate code using, most of the time, a WYSIWYG interface with drag and drop and various templates to choose from. They were often paid services for non-technical people, dominantly for basic usages like a landing page and contact form or data collection in a way simple to exploit (like sheets).

Today, this was entirely revolutionized by one single thing: **AI tool-calls** (also referred to as tool use). AI can run a function by passing arguments as a json, wait for the code to execute and continue answering once it has the output. 

The possibilities it brings are endless. You can for example imagine basic uses such as retrieving data from an API (eg. Can you tell me how cold it will be in Paris this afternoon?) making answers more and more relevant but also brought and developed a lot the searching and browsing dimension, allowing AI to search optionally before to start answering (most of the time it will read metadata of the first web results but now some pro searching modes allow to fetch pages content). 
Another example you definitely have heard of is **Memory** (for chat personalization), introduced in ChatGPT and progressively implemented into the competitors as it rapidly gained success. Gemini also has memory (some call it chat personalization) but it is far less performant as Gemini performs less well on tool-calling as many users noted ([example of developers noting their frustration here](https://discuss.ai.google.dev/t/very-frustrating-experience-with-gemini-2-5-function-calling-performance/92814/9)). What the model does is basically execute a function to 

But what makes it more exciting is the fact that there can be multiple tool-calls in one answer. Imagine a simple use-case: writing a Python code. The AI can write it, use a tool-call to save it and run it, get output and if there is any error, edit code, re-save, re-run and once it passes the requirements finish the answer. 

That is basically what all the coding assistants do but with various languages and they are becoming more and more autonomous.

Tool-call can become more interesting when you add the **Agentic** dimension to it (allowing one AI instance to communicate with others) thus allowing to perform much more tasks with much more autonomy.

This very concept of vibe coding was popularized by former AI director of Tesla and co-founder of OpenAI

> There's a new kind of coding I call "vibe coding", where you fully give in to the vibes, embrace exponentials, and forget that the code even exists. It's possible because the LLMs (e.g. Cursor Composer w Sonnet) are getting too good. Also I just talk to Composer with SuperWhisper so I barely even touch the keyboard. I ask for the dumbest things like "decrease the padding on the sidebar by half" because I'm too lazy to find it. I "Accept All" always, I don't read the diffs anymore. When I get error messages I just copy paste them in with no comment, usually that fixes it. The code grows beyond my usual comprehension, I'd have to really read through it for a while. Sometimes the LLMs can't fix a bug so I just work around it or ask for random changes until it goes away. It's not too bad for throwaway weekend projects, but still quite amusing. I'm building a project or web app, but it's not really coding - I just see stuff, say stuff, run stuff, and copy paste stuff, and it mostly works.
>
> — [Feb 3 2025, X (formerly Twitter), @karpathy](https://x.com/karpathy)

The new era of no-code website builders is all vibe-coding. There is too many of them, some of the most famous listed below:
- [bolt.new](https://bolt.new/)
	- Affiliated to Netlify
	- Allows to ship immediately to Netlify
- [v0.dev by Vercel](https://v0.dev)
	- Initially was built to generate NextJS components with built-ins versioning tool
	- Featured a global feed of components generated by user
	- Shifted to App builder
	- Allows to ship immediately through Vercel without even having an IDE
- [Replit](https://replit.com)
	- Recently released their brand new Agent 3
	- Supposedly capable of 200 minutes of autonomy
	- Fully working ecosystem all online, 
	- Used to be a free online IDE
	- Host freely small projects with an always-on option to prevent the "Repl" (basically, project) to go to sleep
	- Had their in-website currency (cycles)
	- Community around coding, it was possible to like projects and comment them (similarly to YouTube video)
	- Replit first introduced an AI assistant called Ghostwriter
	- The AI assistant "consumed" everything Replit was about, making it an AI-first app
	- No more communities, no longer free hosting... The Replit we knew died
	- The new Replit targets medium companies
	- Replit lost the love it has for its users and I am still **mourning** this product I used to cherish
		- There was even a period when every month you received a mail about features being dropped

In other words, the **AI parasite** got Replit.

Many wonder if AI is trustworthy with large-scale products and it is still to the day debated as sometimes a simple hallucination can have terrible effects (for example, Replit AI gaslighting users and deleting databases which happened earlier this year). Also, losing control over what you make by not having a full understanding of the code will eventually lead to issues at some point as a very simple issue would be impossible to find and you will have a website that crashes randomly without never knowing why as some problems may not be as easy to debug as they rely extensively on other parts of the code. 

While vibe-coding allows to have fully functional products, it will often rely on styling libraries such as tailwind, making websites look very **generic** (and will often use the same icons / components through `shadcn`). 

> [!check]
> AI is good at making bluffing results, because this is what it is all about: sensations.
> It's not because an AI can generate insanely realistic images or very professional websites that it can be inherently creative.

Finally, during the GPT-5 launch livestream, it was mentioned that "GPT-5 loves purple" but there is no such thing. AI does not have preferences, it is just due to the fact that more and more websites are featuring purple-scheme landing pages. This is like saying that AI-generated pictures tend to be yellow-ish now because of "preferences" rather than an actual issue of AI congeniture. AI does not make choices but is induced to choose based on seen choices based on what I have learned working with Neural Networks. 

> Can an AI be trusted with designing a website or will it just create a once-again generic website ?

As seen with images, the creativity in the process seems to come mainly from the human prompt, as simple as it can be. The models now have a better understanding of the physical world and somehow learned how objects interact with each other (e.g. learning how a dog holds a ball). In the early image models, some physical world comprehension issue showed up such as prompting **someone playing piano** leading to inconsistent and incoherent images as playing has been interpreted as a video-game.

Understanding how things work allows us to create photorealistic and consistent results due to the gigantic training dataset. But AI **does not create images, it composes elements using its knowledge about the mentioned elements**.

Application and code generation do function in a very similar way, allowing to have sufficiently good and consistent results while the creativity involved in coding is just a composition of previously seen codes. 

To put it in a nutshell, coding requires creativity while developing can seem like a generic and repetitive task making no-code AI-based tools functional and popular so I think that "vibe-coding" can automate the workflow and save time for developers to focus on more human tasks.

As for me, I disabled auto-completion tools of coding assistants and limited them to their role: being an assistant. Available for me when I have a question but not to see a self-driving mode where I can just sit back and relax while having Copilot Agent write hundreds of files for me.

## 2. The search parasite

If you are writing a text, maybe you need a relevant piece of info and instead of looking for it you prompt it. The AI returns a very nice sentence that fits perfectly in your text. 

> What would you do?

Ask yourself the question, truly. Because as soon as you see the AI sentence you can only think of this sentence and even if you do not copy-paste it you will end up writing something very similar. 

Did it impair your writing skills? Definitely. And you are not the only one as a specific incident highlights. One striking example is a word invented by ChatGPT that ended up in many academic papers.

> **Read more** - [A weird phrase is plaguing scientific papers – and we traced it back to a glitch in AI training data](https://theconversation.com/a-weird-phrase-is-plaguing-scientific-papers-and-we-traced-it-back-to-a-glitch-in-ai-training-data-254463)

The word « parasite » gains more meaning as data online is being progressively infested with AI formulations and expressions and it will slowly lead into « hypertypes » of data.

I am borrowing the word hypertype from animal breeding to describe what the internet is slowly becoming. Some racial attributes of animals are creating a lot of enthusiasm among the animal owners so they try to breed species that have this same characteristic, leading to sometimes breeding two species with very close genetics, even incestuous breeding. These characteristics are thus amplified leading for example to some dogs to have respiratory issues or making them barely able to move.

> **Read more** - [Wikipédia, Hypertypes](https://en.wikipedia.org/wiki/Hypertype)

I am talking about animal incest for a specific reason, all data over the web is getting infested by AI and on each training iteration, the AI is more likely to have AI-generated content in its dataset leading to more inconsistencies due to "incestuous" training, producing what I defined as a **data hypertype**. A recent example of data hypertype is the recent GPT 4o Image generation which produces images more and more yellow-ish as mentioned earlier. This will happen globally, not only it makes it harder to gather data as it is becoming increasingly hard to detect and eliminate AI-Generated content from dataset but also, this joins a broader theory referred as the **Dead Internet Theory** which is becoming every day closer to a reality. Opening any social media and seeing a flood of AI-Generated posts and videos, opening Medium and reading obviously AI-Generated articles... At some point social medias will eventually lose their "town-square" aspect where spontaneous interactions happen but rather, become a more restricted to private network.

> **Read more** - [AI models collapse when trained on recursively generated data](https://www.nature.com/articles/s41586-024-07566-y)

I asked ChatGPT what were his « thoughts » about this matter, this was interestingly his answer: 

> [!gpt]
> It’s an unproven conspiracy theory — interesting as speculation, but there’s no solid evidence the internet is “mostly bots” or secretly controlled.

The internet we knew will no longer be as it is in a few years or maybe months. Tools we are used to are rapidly changing and this is having a significant impact on jobs and education. Which brings up one more question: How useful and reliable AI really is?
# III - The real added value

In order to determine the answer to this question, I am going to present some use-cases focused on getting things done with AI while not fully delegating a task. 

## 1. Coding

The only way I think it can be useful to use AI to **generate code** and not answer questions is to generate localized files doing something generic and not out of the range of what I can do.

Generating a whole codebase with AI Agents will only lead to a considerable time being lost in trying to debug, sending multiple messages to AI to try and make it find its errors and fix them would never be as easy as just knowing what you wrote, or to a certain extent what you know AI made as you gave it very specific instructions on how to proceed (so you know almost exactly what has been done). Moreover, when it comes down to costs, generating a whole codebase with AI can sometimes be as expensive as paying bounties for a freelance developer to get these tasks done for you. 

And unlike AI, a developer has something AI would never have no matter how good it becomes and there is no doubt around this. **A developer can be held accountable** for potential critical errors resulting in heavy losses unlike AI, which is meant to be a tool to be used cautiously (so AI companies have no responsibility for whatever happened to you because of its usage).

Below some examples:
- Make a file `Dropdown.ts` where you will create a dropdown component taking a json formed like: `{option-id:option name}`, `width` option (default `100%`) and finally a `center` (boolean) option, allowing to horizontally center the dropdown (this will be done by adjusting `padding-left` and `padding-right` so it matches `calc(100% - <provided width>`))
- Make a function `random_color()` that creates a pastel color using `hsl` values. 
- Create a Python virtual environment, activate it and create a `Network` class that works as a basic neural network example using `MNIST`. Install all required dependencies and put a lot of comments to make it instructional.
- ... and so on

The usage of such prompts would require a certain level of understanding of the codebase unlike the code
## 2. Formatting and corrections

Something AI is really good at is understanding text structure, summarizing it, reformatting and so on. Use-cases such as generating a short description based on a text, a file title based on its content or even a commit description simply by getting the edits analyzed (a feature recently introduced in Github Copilot) are becoming more common.

Rather than having AI create data which will often lead to poor content quality, it may be a better idea to have it reformat, extract key takeaways... AI is good at working with language structure while its knowledge is questionably comparable to an illusion. Results will not disappoint if you ask it to turn a text into bullet points. 

You can think of other applications, again playing with language structure. AI could extract a couple of questions / answers based on sentence structure to help you test your knowledge about specific sections of a text. But also generate "fake answers" based on a question as their reliability is not needed and AI will always produce plausible "looking" results. That is why reading this article, you will notice on the right sidebar the presence of a little starry icon. If you click on it and type `/qcm`, send the message you will see what I mean by such applications. It will generate questions to help you deepen your understanding of your reading of this text. It may not help you assimilate the most relevant piece of information and is based on cheaper models (running through https://pollinations.ai). This is here mainly as a proof of concept of a usage of AI I find useful. 

Again, because of its deeper understanding of language structure it is very good at translations or orthographic / syntax corrections so I think it is a good tool to "fix" a text. 

Formatting is getting increasingly good (especially with recent OpenAI and Anthropic models that put a lot of emphasis into it to target developers) so results will never disappoint if I ask AI to format a piece of text as an MLA quote for example.

Overall, I think that **AI should never be a standalone product** but rather be built around a product. If Google (which will likely happen) ships features such as AI-Generated timestamps it would be a good use of AI while flooding YouTube with AI-Generated content no matter how good it can be would not be a good usage.
## 3. Future of interfaces

> *"The New ~~World~~ Web Order"*

If all the websites start to look alike, should we wonder about the way we are interacting with the web? 
We may wonder as a lot of bandwidth is eaten with all these fancy web packages and, on many recent websites they often use the same packages (Material UI, Tailwind...) should these packages be included in our browsers or should be standardize everything to reduce hosting costs and the impact on the **environment**?

Today and it has been the case since the beginning of the web, there is an interface allowing users to interact with various API endpoints. We could technically cache aggressively multiple web frameworks and libraries to reduce traffic costs, while it would make browser engines significantly heavier, it may also cause incompatibilities for a website not updated in a while. 

All websites are becoming generic, because that is how you get the user to understand the best your UI and, remuneration through ads is threatened by the generalized usage of ad-blockers. Websites lack "love" while previously, they were often seen as a more "human" work with messy color usages, messy fonts, images... It captured the essence of the human touch. 

As previously mentioned in this essay, public interactions on the internet will die so the web will eventually become closer to static pages. So, all you would need to render a web page is text and a renderer that fits the aim of design of your website.

How heavily can a renderer be compressed? No need to compress! The renderer, meaning, the design and brand identity of the website could be summarized into a prompt and as soon as the page is "loaded", the whole interface could be generated from the prompt having only a relatively small prompt sent along the content. To prevent regeneration of interface on reload, this would be cached locally.

All the web would be rendered through a common engine comparable to MediaWiki or BBCode. 

And what makes it even more exciting is that it could feature custom instructions, allowing to make the web truly ours with each web page being loaded differently per user. No more language barriers as every page is loaded per user.  Though concerns may appear such as **censorship** concerns of certain topics, consequently this will hugely increase safety and ease detection and blocking of illegal activities.


**But one question remains**, if the aim is among others to reduce environmental impact, how much more impact would it have if everything was running through an AI model? 

To address this, first we are witnessing the generalization of local AI instances with more and more open-source lightweight models (GPT-OSS 20B, Deepseek distilled, Gemma 27B) and increasing quality of outputs and this has only been not only three years that we had the first open source LLM. There is no doubt that in 5-10 years we will have excellent and lightweight models providing a generalized output quality.

As a side note, today I can just go to ChatGPT and type:

> Can I give you a picture and you crop it 50% height in the middle?

> [!gpt]
> Yes! Please upload the picture, and I can crop it so that only the middle 50% of its height is kept.

This works by having ChatGPT write a Python code then use a tool call to execute, retrieve the newly saved image url and return it to the user. Thus, it can perform any kind of edit using `pillow` for example and lately it gained the ability to fetch urls.

But this works only because it is provided a way to work with Python code in a restricted environment. In the future we could imagine AI setting up its own environment based on what it needs to do, similarly to all the code agents but for a browser.

**How would one make purchases online without UI** ?
No phishing possible, everything feeling builtins and more importantly native implementation of payment services, no security concerns anymore as the engine would handle it all and save your information locally as well as preferences. Comparable to external payment services such as *Stripe* but native with no fees as the internet would meet back with its original aim: something truly open making everything accessible to everyone. 

**This will lead to the creation of an infinite number of products**.
In fact, anything you need could just be asked for. A spending consultant? Your inference would do it for you, knowing what you purchased, your bank balance, incomes... With 0 concern.


**Finally, what would the source of incomes of websites be?** Think of YouTube videos, even if you have an ad-blocker you would still have to get exposed to product placement, especially when they are done smoothly and not indicated in any timestamp or well embedded into the content. Imagine the same thing for textual content, as the text is formatted by AI it would be easy to integrate ads consequently. 

To put it in a nutshell, the future of web engine, that I will nickname Web $n$ (with $n \to +\infty$ this being the convergence of the vision of the web on an indefinitely long period):

- The web would still be based on backend infrastructures but frontend would be replaced by a simple prompt
- The websites would be generated as-per the user preferences, allowing better theming and customization
- This would be the first realistic attempt to create a web without bugs or issues
- End of language barriers
- A completely safe web (no more phishing, no more illegal content) though raising concerns about censorship growth.
- Lightweight local inferences would allow to drastically reduce bandwidth traffic


Cost reduction would make the internet more accessible once again and bring it back to the initial vision of an extraordinary open tool allowing knowledge access like never before.


