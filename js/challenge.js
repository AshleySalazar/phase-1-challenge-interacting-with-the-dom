document.addEventListener("DOMContentLoaded", () => {
    let timer = 0;
    let isPaused = false
    
    setInterval(function() {
       if (!isPaused) {
        ++timer;
       }
        
        let counter = document.getElementById('counter');
        counter.innerHTML = timer; 
        
    }, 1000);

    const minus = document.getElementById ('minus');
    const plus = document.getElementById ('plus');
    const heart = document.getElementById ('heart');
    const pause = document.getElementById ('pause');
    const likes = document.getElementsByTagName("ul")[0];
		const restart = document.getElementById ('restart');
		const form = document.getElementById('comment-form');
		const list = document.getElementById('list');

    minus.addEventListener("click", function(){
        --timer;
        counter.innerHTML = timer;

    });

    plus.addEventListener("click", function(){
        ++timer;
        counter.innerHTML = timer;

    })

    heart.addEventListener("click", function(){
        likes.innerHTML += `<li>${timer} has been liked</li>`
       
    })

    pause.addEventListener("click", function(){
			isPaused = !isPaused;

			isPaused ? pause.innerHTML = 'resume' : pause.innerHTML = 'pause'; 
      isPaused ? minus.disabled = true : minus.disabled = false;
      isPaused ? plus.disabled = true : plus.disabled = false;
			isPaused ? heart.disabled = true : heart.disabled = false;

    })

		restart.addEventListener("click", function(){
			timer = 0;
			counter.innerHTML = 0;
		})

		form.addEventListener("submit", function(event){
			event.preventDefault();
			const formData = new FormData(event.target);
			const {comment} = Object.fromEntries(formData);
			list.innerHTML += `<p>${comment}</p>`
		})

});
