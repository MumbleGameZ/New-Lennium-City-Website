      document.addEventListener("click", function(e) {
        const img = document.createElement("img");
        img.src = "Bubble.png";   // <-- put your background image here
        img.className = "float-bg";
        img.style.left = e.clientX + "px";
        img.style.top  = e.clientY + "px";
        img.style.width = (10 + Math.random() * 25) + "px";
        img.style.transform = `rotate(${Math.random()*360}deg)`;


        document.body.appendChild(img);

        setTimeout(() => {
          img.remove();
        }, 3000);
      });