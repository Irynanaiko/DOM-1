window.addEventListener("DOMContentLoaded", () => {
    const playList = [{
            author: "LED ZEPPELIN",
            song: "ЛЕСТНИЦА В НЕБО",
        },
        {
            author: "КОРОЛЕВА",
            song: "БОГЕМСКАЯ РАПСОДИЯ",
        },
        {
            author: "LYNYRD SKYNYRD",
            song: "FREE BIRD",
        },
        {
            author: "ГЛУБОКИЙ ФИОЛЕТОВЫЙ",
            song: "ДЫМ НА ВОДЕ",
        },
        {
            author: "ДЖИМИ ХЕНДРИКС",
            song: "ВСЕ ПО СТОРОЖЕВОЙ БАШНЕ",
        },
        {
            author: "AC / DC",
            song: "BACK IN BLACK",
        },
        {
            author: "КОРОЛЕВА",
            song: "WE WILL ROCK YOU",
        },
        {
            author: "МЕТАЛЛИКА",
            song: "ENTER SANDMAN",
        },
    ];

    class PlayList {
        constructor(playList) {
            this.playList = playList;
            this.renderPlayList();
        }

        renderPlayList() {
            const ol = document.createElement("ol");

            ol.className = "playlist";
            this.playList.forEach((list) => {
                const li = document.createElement("li");

                li.innerText = `${list.author} : ${list.song}`;
                ol.appendChild(li);
            });

            document.body.appendChild(ol);
        }
    }

    const list = new PlayList(playList);
});