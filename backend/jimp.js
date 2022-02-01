
Jimp.read("images/temp.jpg")
    .then((image) => {
        image.resize(2000, 2000); // resize
        Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then((font) => {
            image.print(
                font, 0, 0, 
                {
                    text: "When you have a habit of spitting",
                    alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                    alignmentY: Jimp.VERTICAL_ALIGN_TOP
                }, 2000, 2000);

            image.print(
                font, 0, 0, 
                {
                    text: "But you were wearing a mask!",
                    alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                    alignmentY: Jimp.VERTICAL_ALIGN_BOTTOM
                }, 2000, 2000);
            image.write("images/result2.png");
        });
    })
    .catch((err) => {
        console.log("Image not available");
    });
