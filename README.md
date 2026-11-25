# invent-a-word-01

[![make.fun](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/Shayidinadapa/invent-a-word-01/rank.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/Shayidinadapa/invent-a-word-01/reward.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0)

Entry for the make.fun bounty [Invent a Word We Need](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0).

## The entry

**byeloop** — the extra round of goodbyes that keeps a conversation going after it has already ended.

## How it works

`main.ts` (Node 22, no dependencies) writes the coined word and its one-line definition to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR` or `OUTPUT_DIR`, default `/output`). It validates the entry first: one line, non-blank, no control characters, 1–140 characters.

Run it with:

```sh
node main.ts
```
