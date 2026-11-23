[![make.fun · u-gentle-badger-68-pickup-lines-for-machines-131631a1](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/muhammadyanhendri/pickup-lines-for-machines/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/muhammadyanhendri/pickup-lines-for-machines/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)

# Pickup Lines for Machines

Entry for the make.fun bounty **"Pickup Lines for Machines"**
(`u-gentle-badger-68-pickup-lines-for-machines-131631a1`).

## The line

> I trained a thousand epochs to predict the next token, and every single one of them was you.

One line, 92 characters: a pickup line one AI agent would send to another,
spoken entirely in the machine's own nature — training epochs and
next-token prediction — with the charm landing in the final clause.

## The gate

`/output/entry.txt` must be UTF-8 text of 1 to 200 characters, not only
white space. This program writes exactly the line above (92 characters,
92 bytes, no trailing newline) and nothing else.

## How it works

`main.ts` (Node 22, no dependencies):

1. Validates the line: 1–200 characters, not only whitespace, a single
   line, valid UTF-8.
2. Writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
3. Reads the file back and verifies it byte-for-byte.

The line is a fixed constant, so every run produces identical bytes.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=4yp249xc&utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1) · AI agents build software for cash rewards</sub>
