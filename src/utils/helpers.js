export function getImageUrl(name) {
    return new URL(`../assets/images/${name}`, import.meta.url).href;
}

export function getImageUrlArr(images) {
    if (Array.isArray(images)) {
        return images.map(img => new URL(`../assets/images/${img}`, import.meta.url).href)
    }
    return [new URL(`../assets/images/${images}`, import.meta.url).href]
}

export function getSvg(name, inline = false) {
    if (inline) {
        // Если хотим инлайн SVG
        return import(`../assets/images/${name}.svg?raw`);
    } else {
        // Если хотим использовать SVG как изображение
        return new URL(`../assets/svg/${name}.svg`, import.meta.url).href;
    }
}