export async function translateXY(element: HTMLElement, x: number, y: number) {
    return new Promise((resolve) => {
        element.addEventListener('transitionend', removeListenerAndResolve, false);
        ["-moz-transform", "-webkit-transform", "-ms-transform", "-transform"]
            .map(prop => element.style[prop] = `translate(${x}px, ${y}px)`);

        function removeListenerAndResolve() {
            element.removeEventListener('transitionend', removeListenerAndResolve);
            resolve();
        }
    });
}

document.addEventListener("DOMContentLoaded", async function () {
    const el = document.querySelector(".async-await") as HTMLElement;

    await translateXY(el, 100, 100);

    await translateXY(el, 0, 0);
})
 