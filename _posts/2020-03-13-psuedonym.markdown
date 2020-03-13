---
layout: post
title: "Psuedonym"
image: psuedonym.png
date: 2020-03-13 00:00:00 +0000
description: "A smart self-service nickname mod."
tags: ["forge", "1.12.2", "utility"]
---

# Introduction
Psuedonym is a Forge mod for Minecraft 1.12.2. It is distributed under the
[Creative Commons BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).
It will not be distributed on CurseForge; this is the official website at
carbide-sun.github.io. Yes, this license means you can use it in modpacks.
Without asking. Really. Please do not ask. The only conditions are you credit
me (BY), don't make money off it (NC), and don't make changes to it (ND). I
consider the mod authorship information shown in the mods screen as sufficient
attribution in modpacks — websites and redistributions must link back to this
page. **Note that this page and the screenshots on it are All Rights Reserved
and you cannot reproduce this page's content.** Link, don't mirror.

# Downloads

## v1.0
<a href="{{site.baseurl}}/dl/Psuedonym-1.0.jar" title="Download Psuedonym Beta v1.0 for Forge on Minecraft 1.12.2" class="download forge beta"><span class="title">Psuedonym</span><span class="version">1.0</span><span class="mcversion">1.12.2</span></a>  
Released <span class="time" data-timestamp="1584122400">March 13th, 2020</span>

### New Features
- Initial release

# Description
Psuedonym is a smart self-service nickname/fakename/displayname mod. It's smart
because it keeps track of all currently-used nicknames and prevents usage of
ones that are taken, whether they are nicknames or usernames. It additionally
supports color codes, with a config option to not allow them, without allowing
the problematic &k and &0 codes, or any of the bold/italic/etc codes.

It's self-service because the /nick and /clearnick commands do not require op
to use; however, ops can use /clearnick with a player argument to force-unset
problematic nicks.

It's also full-featured, affecting the names above players' heads, the tab list,
chat, join messages, etc. It will also send a global message in chat when
someone changes their nick to inform users of the change.

It's easy to use; just run the /nick command with your nick of choice as
arguments. Multiple arguments will be joined with spaces automatically; no need
to go through odd metacharacter contortions. If allowed in the config (it is by
default) you can additionally use ampersand-formatted (&) format codes. For
example, /nick &cCarbide will set your name to "Carbide" in light red. If you
don't want a nickname anymore, just use /clearnick.

# Contact

**If you are rude I will ignore you, period**. I don't use an issue tracker or
forum, comments, etc. Instead you can contact me via email — [carbide-sun@pm.me](mailto:carbide-sun@pm.me).
Warning: don't waste my time. I do this as a small hobby for fun.

Feel free to ask questions, report bugs, talk about mods in general, etc. As
long as you're polite and understand I have better things to do than field
vitriol.
