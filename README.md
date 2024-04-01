# Styles:
- [ ] Y2K
- [ ] Minimal
- [ ] Skeuomorphic
- [ ] Glass Morphic
- [ ] Grainy
- [ ] Modern 

# urgent improvements:
- [x] change 'welcome' in landing to 'you're running out of time'
- [x] add the (.) dot after (min, sec, hr) and make the text capitalized (only first letter)
- [ ] make a title for each timer that can be edited
- make a button that changes the order of the timers created (from latest => oldest or from oldest => latest)
- making a new timer while editing another causes order problem
- change the style when the timer is finished
- on edit make the focus on the timer's title input field
- save to local storage

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
```html
<div class="timer chosen-timer" id="timer0" onclick="checkClick(event, this)">
    <div class="time-block days-block">
        <div class="carousel-container">
            <div class="title-container">
                <h2 class="title">(days) first</h2>
                <h2 class="title">(days) first</h2>
            </div>
        </div>
        <span class="timer-digit days-digit">10</span>
    </div>
    <div class="time-block">
        <h2 class="timer-title">hr</h2>
        <span class="timer-digit hours-digit">23</span>
    </div>
    <div class="time-block">
        <h2 class="timer-title">min</h2>
        <span class="timer-digit minutes-digit">59</span>
    </div>
    <div class="time-block">
        <h2 class="timer-title">sec</h2>
        <span class="timer-digit seconds-digit">40</span>
    </div>
    <div class="timer-buttons">
        <button onclick="restartTimer(this.closest('div.timer'))" id="restart-button">
            <span class="material-symbols-outlined">restart_alt</span>
        </button>
        <button onclick="pauseTimer(this.closest('div.timer'))" id="pause-continue-button">
            <span class="material-symbols-outlined">pause</span>
        </button>
        <button onclick="editTimer(this.closest('div.timer'))" id="edit-button">
            <span class="material-symbols-outlined">edit</span>
        </button>
        <button onclick="deleteTimer(this.closest('div.timer'))" id="delete-button">
            <span class="material-symbols-outlined">delete</span>
        </button>
    </div>
</div>

```
- landing timer