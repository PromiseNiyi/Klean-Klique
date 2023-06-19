const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapperx i");
const firstCardWidth = carousel.querySelector(".cards").offsetWidth;
const carouselChildren = [...carousel.children];

let isDragging = false, startX, startScrollLeft;

// get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildren.slice(-cardPerView).reverse().forEach(card =>{
	carousel.insertAdjacentHTML("afterBegin", card.outerHTML);
});

//Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildren.slice(0, cardPerView).forEach(card =>{
	carousel.insertAdjacentHTML("beforeEnd", card.outerHTML);
});

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		console.log(btn.id);
		carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
	});
});

const dragStart = (e) => {
	isDragging = true;
	carousel.classList.add("dragging");
	// records the initial cursor and scroll position of the carousel
	startX = e.pageX;
	startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
	// if isDragging is false return from here
	if(!isDragging) return; 
	// updates the scroll position of the carousel based on the cursor position
	carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
	isDragging = false;
	carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
	// if the carousel is at the beginning, scroll to the end
	if(carousel.scrollLeft === 0){
		carousel.classList.add("no-transition");
		carousel.scrollLeft = carousel.scrollWidth -( 2 * carousel.offsetWidth);
		// console.log("You reached the left end");
		carousel.classList.remove("no-transition");
	} 
	// if the carousel is at the end, scroll to the beginning
	else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth -carousel.offsetWidth){
		carousel.classList.add("no-transition");
		carousel.scrollLeft = carousel.offsetWidth;
		// console.log("You reached the right end");
		carousel.classList.remove("no-transition");
	}

}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);

