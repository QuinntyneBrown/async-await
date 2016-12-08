function translateXY(htmlElement: HTMLElement, x: number, y: number) {
    return new Promise(resolve => {

        htmlElement.addEventListener('transitionend', removeListenerAndResolve, false);

        ["-moz-transform", "-webkit-transform", "-ms-transform", "-transform"]
            .map(prop => htmlElement.style[prop] = `translate(${x}px, ${y}px)`);

        function removeListenerAndResolve() {
            htmlElement.removeEventListener('transitionend', removeListenerAndResolve);
            resolve();
        }
    });
}

async function animate() {
    const htmlElement = document.querySelector("div");

    await translateXY(htmlElement, 0, 0);

    await translateXY(htmlElement, -300, 0);

    await translateXY(htmlElement, 0, 0);
}

document.addEventListener("DOMContentLoaded", () => setTimeout(animate, 0));
 