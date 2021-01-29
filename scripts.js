copyright = document.getElementById('copyright')
currentYear = new Date().getFullYear()

copyright.innerHTML = `Copyright Marlowe Vineyards [PMA] ${currentYear}`


// Execute Menu
const mainWrapper = document.getElementById('wrapper')

const countDown = (currentCount) => {
  let currentCounter = document.querySelector('.currentCount')
  currentCount === 0 ? window.close() : currentCounter.innerHTML = `${currentCount} seconds until self-destruct.`
}

const executeMenu = () => {
  mainWrapper.innerHTML = 
  `
  <section class="secretMenu">
    <h1>Welcome to our secret menu. To order from our secret menu please contact Nathan Stone to meet. <br />All prices are variable.</h1>
    <ul>
      <h3>Guns:</h3>
      <li>AK-47</li>
      <li>Bullpup</li>
      <li>PD Rifle Mk2</li>
      <li>OG Rifle</li>
      <li>Heavy Pistol</li>
    </ul>
    <ul>
      <h3>Services:</h3>
      <li>Kidnapping</li>
      <li>Blackmailing</li>
      <li>Planting Evidence</li>
      <li>Rent A Heist</li>
    </ul>
    <ul>
      <h3>Items</h3>
      <li>Steel</li>
      <li>Vodka</li>
      <li>Spirit Coffee</li>
      <li>PD Armor</li>
      <li>Drills</li>
    </ul>
    <div class="currentCount"></div>
  </section>
  `

  let currentCount = 60
  setInterval(() => {
    countDown(currentCount)
    currentCount--
  }, 1000)
}

// Secret Code
const pattern = ['ArrowUp', 'ArrowDown', 'ArrowUp', 'ArrowDown', 'm', 'a', 'r', 'l', 'o', 'w', 'e']
let current = 0

const keyHandler = (event) => {

	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0
		return
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0
		executeMenu()
	}

};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false)