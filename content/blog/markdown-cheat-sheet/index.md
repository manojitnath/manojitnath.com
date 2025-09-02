+++
date = '2025-05-14'
draft = true
title = 'Markdown Cheat Sheet'
description = "Markdown cheat sheet to reference markdown syntax quickly"
categories = ["markdown"]
+++

## Headings

This post showcases common Markdown syntax elements that should be rendered correctly by Hugo and styled by your theme.

Markdown supports six levels of headings. The H1 is often generated from the `title` in the front matter by the theme's template, so content usually starts with H2.

# H1 Heading (Rarely used directly in content)

## H2 Heading

### H3 Heading

#### H4 Heading

##### H5 Heading

###### H6 Heading

---

## Paragraphs and Text

This is a standard paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.

You can create paragraphs by separating lines of text with a blank line. If you just press enter once, it might not create a new paragraph depending on the renderer, but typically results in a line break within the same paragraph.

To force a line break within a paragraph without starting a new one, end a line with two or more spaces.  
Like this line here.

---

## Text Formatting

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

---

## Blockquotes

This is normal text.

> This is the first line of a blockquote.
> This is the second line.
>
> This is a second paragraph within the same blockquote.

This is normal text again.

---

## Lists

### Unordered List

Use asterisks, pluses, or hyphens.

- Red
- Green
- Blue
  - Light Blue (nested)
  - Dark Blue (nested)
    - Navy (double nested)

* Item A
* Item B

- Item C
- Item D

### Ordered List

Use numbers followed by periods.

1.  First item
2.  Second item
3.  Third item
    1. Indented item A
    2. Indented item B
4.  Fourth item

You can start lists with different numbers:

3.  Starts at three
4.  Continues to four
5.  Starts again at one (use indentation for sublists)

---

## Code

### Inline Code

Use single backticks `npm install` for inline code, like `var foo = 'bar';`. Useful for mentioning variable names, functions, or commands.

### Fenced Code Blocks

Use triple backticks ` ` ``` for code blocks. You can specify the language for syntax highlighting.

```python:python.py
def greet(name):
  """Greets the user by name."""
  message = f"Hello, {name}!"
  print(message)

greet("World")
```

Below is a javascript code

```javascript:test.js
package main

import "fmt"

// calculateSquares calculates the sum of the squares of the digits of the given number
// and sends the result to the squareop channel.
func calculateSquares(number int, squareop chan int) {
	sum := 0
	for number != 0 {
		digit := number % 10
		sum += digit * digit
		number /= 10
	}
	squareop <- sum
}

// calculateCubes calculates the sum of the cubes of the digits of the given number
// and sends the result to the cubeop channel.
func calculateCubes(number int, cubeop chan int) {
	sum := 0
	for number != 0 {
		digit := number % 10
		sum += digit * digit * digit
		number /= 10
	}
	cubeop <- sum
}

func main() {
	number := 589
	sqrch := make(chan int)
	cubech := make(chan int)

	// Start two goroutines to calculate the sum of squares and cubes of the digits.
	go calculateSquares(number, sqrch)
	go calculateCubes(number, cubech)

	// Receive the results from the channels and add them.
	squares, cubes := <-sqrch, <-cubech
	fmt.Println("Final result", squares+cubes)
}
```
