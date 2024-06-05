export function clearLastElement(screen) {
    screen.value = screen.value.slice(0, -1);
}