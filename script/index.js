const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(json => displayLessons(json.data));
};

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
    const wordContainer=document.getElementById("word-container");
    wordContainer.innerHTML="";
    if(words.length == 0){
            wordContainer.innerHTML=`
             <div class="text-center col-span-full rounded-xl py-10 space-y-6 font-bangla">
            <img class="mx-auto" src="./assets/alert-error.png" alt="">
             
        <p class="text-xl font-medium text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
       </div>`;

        return;
    }
//     {
//     "id": 88,
//     "level": 1,
//     "word": "Toy",
//     "meaning": "খেলনা",
//     "pronunciation": "টয়"
// }

    words.forEach(word => {
        console.log(word);
        const card = document.createElement("div");
        card.innerHTML=`
        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5">
            <h2 class="font bold text-2xl">${word.word ? word.word:"no word found"}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
            <div class="text-2xl font-medium font-bangla">"${word.meaning ? word.meaning :"no meaning found"} / ${word.pronunciation ? word.pronunciation:"no pronunciation found"}"</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></i></button>
            </div>

        </div>
        `;
        wordContainer.append(card);
    });
    
};

const displayLessons = (lessons) => {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    for (let lesson of lessons) {

        const btnDiv = document.createElement("div");

        btnDiv.innerHTML = `
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-brands fa-leanpub"></i> Lesson - ${lesson.level_no}
        </button>
        `;

        levelContainer.append(btnDiv);
    }
};

loadLessons();