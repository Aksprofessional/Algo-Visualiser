const arrayContainer = document.querySelector(".array-container");
const slider = document.querySelector("#slider");

const generatenewarray = () => {
    arrayContainer.innerHTML = "";

    for (let i = 0; i < slider.value; i++) {
        const barHeight = ~~(Math.random() * 80) + 20; //Final height range i made 20% ≤ barHeight ≤ 99%
        const arrBar = document.createElement("div");

        arrBar.classList.add("arrbar");
        arrBar.style.height = `${barHeight}%`;
        arrayContainer.appendChild(arrBar);
    }
}

const bubblesort = async () => {
    const bars = document.querySelectorAll(".arrbar");

    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.backgroundColor = "#ff6f61";
            bars[j + 1].style.backgroundColor = "#ff6f61";
            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                await swap(bars[j], bars[j + 1]);
            }

            bars[j].style.backgroundColor = "white";
            bars[j + 1].style.backgroundColor = "white";
        }
        bars[bars.length - 1 - i].style.backgroundColor = "#6b6b6b"
    }
}

const selectionsort = async () => {
    const bars = document.querySelectorAll(".arrbar");

    for (let i = 0; i < bars.length - 1; i++) {
        let minidx = i;
        bars[i].style.backgroundColor = "#ff6f61";
        for (let j = i + 1; j < bars.length; j++) {
            if (parseInt(bars[j].style.height) < parseInt(bars[minidx].style.height)) {
                minidx = j;
            }
        }
        bars[minidx].style.backgroundColor = "#ff6f61";
        if (parseInt(bars[minidx].style.height) < parseInt(bars[i].style.height)) {
            await swap(bars[minidx], bars[i]);
        }
        bars[minidx].style.backgroundColor = "#6b6b6b";
        bars[i].style.backgroundColor = "#4caf50";
    }

}

const exchangesort = async () => {
    const bars = document.querySelectorAll(".arrbar");

    for (let i = 0; i < bars.length - 1; i++) {
        bars[i].style.backgroundColor = "#ff6f61";
        for (let j = i + 1; j < bars.length; j++) {
            bars[j].style.backgroundColor = "#ff6f61";

            if (parseInt(bars[i].style.height) > parseInt(bars[j].style.height)) {
                await swap(bars[i], bars[j]);
            }
            bars[j].style.backgroundColor = "white";
        }
        bars[i].style.backgroundColor = "#6b6b6b";
    }
}

const insertionsort=async()=>{
    const bars=document.querySelectorAll(".arrbar");

    for (let i=1;i<bars.length;i++){
        let temp = bars[i].style.height;

        bars[i].style.backgroundColor="#ff6f61";

        let j=i-1;

        for(;j>=0 && parseInt(temp)<parseInt(bars[j].style.height);j--){
            await new Promise(resolve=>setTimeout(resolve,700));
            bars[j].style.backgroundColor = "#ff6f61";
            bars[j + 1].style.height = bars[j].style.height;
        }
        bars[j+1].style.height=temp;   
    }
}

const swap = (bars1, bars2) => {
    return new Promise((resolve) => {
        const tempHeight = bars1.style.height;
        bars1.style.height = bars2.style.height;
        bars2.style.height = tempHeight;
        setTimeout(resolve, 300);
    })
}

generatenewarray();
slider.addEventListener("input", generatenewarray)