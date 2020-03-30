---
layout: post
title: "Psuedonym"
image: psuedonym.png
date: 2020-03-13 00:00:00 +0000
description: "A smart self-service nickname mod."
tags: ["forge", "1.12.2", "utility"]
theme-color: "#448AFF"
---

Psuedonym is a Forge mod for Minecraft 1.12.2. It is distributed under the
[Creative Commons BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).
It will not be distributed on Curse. **Note that this page and the screenshots
on it are All Rights Reserved and you cannot reproduce this page's content.**
Link, don't mirror. <a href="{{site.baseurl}}/license">More info</a>.

# Downloads

## v1.1
<a href="{{site.baseurl}}/dl/Psuedonym-1.1.jar" title="Download Psuedonym v1.1 for Forge on Minecraft 1.12.2" class="download forge"><span class="title">Psuedonym</span><span class="version">1.1</span><span class="mcversion">1.12.2</span></a>  
Released <span class="time" data-timestamp="1585504800">March 29th, 2020</span>

### Changes
- Fixed nicks being lost on death
- Fixed querying your nick by running just /nick showing an untranslated string
- Added a /freenick command to force a nick to be made available
- /nick will now tell you when your nick is changed even if it's a "trivial" change that doesn't broadcast
- /nick will now error if you attempt to change your nick to what it already is

<details markdown="1">
<summary style="font-family:'Livvic',sans-serif;font-size:36px;font-weight:bold;margin-bottom:15px">Old Downloads</summary>
## v1.0
<a href="{{site.baseurl}}/dl/Psuedonym-1.0.jar" title="Download Psuedonym Beta v1.0 for Forge on Minecraft 1.12.2" class="download forge beta"><span class="title">Psuedonym</span><span class="version">1.0</span><span class="mcversion">1.12.2</span></a>  
Released <span class="time" data-timestamp="1584122400">March 13th, 2020</span>

### New Features
- Initial release
</details>

# Description
Psuedonym is a smart self-service nickname/fakename/displayname mod. It's smart
because it keeps track of all currently-used nicknames and prevents usage of
ones that are taken, whether they are nicknames or usernames. It additionally
supports color codes, with a config option to not allow them, without allowing
the problematic &k and &0 codes, or any of the bold/italic/etc codes.

It's self-service because the /nick and /clearnick commands do not require op
to use; however, ops can use /clearnick with a player argument to force-unset
problematic nicks. Ops may additionally use /freenick to forcefully free a nick
for players that are offline or to free a nick that is wrongly marked as in
use.

It's also full-featured, affecting the names above players' heads, the tab list,
chat, join messages, etc. It will also send a global message in chat when
someone changes their nick to inform users of the change.

It's easy to use; just run the /nick command with your nick of choice as
arguments. Multiple arguments will be joined with spaces automatically; no need
to go through odd metacharacter contortions. If allowed in the config (it is by
default) you can additionally use ampersand-formatted (&) format codes. For
example, /nick &cCarbide will set your name to "Carbide" in light red. If you
don't want a nickname anymore, just use /clearnick.
