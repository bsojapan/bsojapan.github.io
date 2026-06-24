document.addEventListener("DOMContentLoaded", function () {

    let h2 = 0;
    let h3 = 0;
    let h4 = 0;
    let h5 = 0;

    document.querySelectorAll("main h2, main h3, main h4, main h5")
        .forEach(function (heading) {

        if (heading.dataset.numbered) {
            return;
        }

        let number = "";

        switch (heading.tagName) {

            case "H2":
                h2++;
                h3 = 0;
                h4 = 0;
                h5 = 0;
                number = h2;
                break;

            case "H3":
                h3++;
                h4 = 0;
                h5 = 0;
                number = h2 + "." + h3;
                break;

            case "H4":
                h4++;
                h5 = 0;
                number = h2 + "." + h3 + "." + h4;
                break;

            case "H5":
                h5++;
                number =
                    String.fromCharCode(96 + h5);
                break;
        }

        heading.insertAdjacentHTML(
            "afterbegin",
            `<span class="secno">${number}</span> `
        );

        heading.dataset.numbered = "true";
    });

});
