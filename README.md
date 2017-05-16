# Word Frequency Analyzer

This program consists of two source files, `generate.js` and `analyze.js`.
The first one selects random words from the dictionary file and writes to the input file.
The other one reads the input file and count how many times each word appears and writes the result to the output file.

## How to generate words

```
$ node generate <numWords> <srcFile> <destFile>
```

## How to analyze words

```
$ node analyze <inputFile> <outputFile>
```

## Example

```
$ node generate 1000000 dictionary.dat input.txt
Successfully generated 1000000 words
Elapsed: 875.334ms
```

```
$ tail -5 input.txt
middle
Svetlana
conversant
westerly
instable
```

```
$ node analyze input.txt output.txt
Successfully analyzed 1000000 words
Successfully written
Elapsed: 534.370ms
```

```
$ tail -5 output.txt
zombie occurred 40 times
succeed occurred 26 times
rhododendron occurred 34 times
Shulman occurred 26 times
betrayal occurred 29 times
```
