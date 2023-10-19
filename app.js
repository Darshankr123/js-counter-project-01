let count = 0;

const value = document.getElementById("value");

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
      value.textContent = count;
      
    } else if (styles.contains("decrease")) {
      count--;
      value.textContent = count;
      
    } else {
      count = 0;
      value.textContent = count;   
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0){
       value.style.color = "black";
    }
  });
});
