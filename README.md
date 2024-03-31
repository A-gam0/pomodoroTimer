# Styles:
- [ ] Y2K
- [ ] Minimal
- [ ] Skeuomorphic
- [ ] Glass Morphic
- [ ] Grainy
- [ ] Modern 


# urgent improvements:
- change 'welcome' in landing to 'you're running out of time'
- make a button that changes the order of the timers created (from latest => oldest or from oldest => latest)
- add the (.) dot after (min, sec, hr) and make the text capitalized (only first letter)
- making a new timer while editing another causes order problem
- change the style when the timer is finished
- on edit make the focus on the timer's title input field

# improvements
- choose a pattern to be greeted with everytime you login
- drag and drop timers to rearrange
- use date tables to choose the initial and finall date
- make the website functional in arabic "https://rtlstyling.com/"



# Boilerplates:
- prompt
```html
<div class="prompt">
	<div class="inputs">
		<div class="input-container days-input">
			<h2 class="input-title">days</h2>
			<input placeholder=0 id=days type="number">
		</div>
		<div class="input-container">
			<h2 class="input-title">hr</h2>
			<input placeholder=0 id=hours type="number" max=24>
		</div>
		<div class="input-container">
			<h2 class="input-title">min</h2>
			<input placeholder=0 id=minutes type="number" max=60>
		</div>
		<div class="input-container">
			<h2 class="input-title">sec</h2>
			<input placeholder=0 id=seconds type="number" max=60>
		</div>					
	</div>
	<div class="buttons">
		<button onclick="confirmPrompt()">
			<span class="material-symbols-outlined">
			done
			</span>
		</button>
		<button onclick="rejectPrompt()">
			<span class="material-symbols-outlined">
			close
			</span>
		</button>
	</div>
</div>
```
- full timer
- landing timer