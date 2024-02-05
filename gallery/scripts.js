$(document).ready(function() {
    const images = ["img/image1.jpeg", "img/image2.jpeg", "img/image3.jpeg"];
    const imagesQuantity = images.length;
    let imagesIndex = 0;

    const $image = $('#image');
    const $buttonLeft = $('#button_left');
    const $buttonRight = $('#button_right');

    $image.attr('src', images[imagesIndex]);

    $buttonLeft.click(function() {
        imagesIndex = (imagesIndex === 0) ? imagesQuantity - 1 : imagesIndex - 1;
        $image.attr('src', images[imagesIndex]);
    });

    $buttonRight.click(function() {
        imagesIndex = (imagesIndex === imagesQuantity - 1) ? 0 : imagesIndex + 1;
        $image.attr('src', images[imagesIndex]);
    });
});
