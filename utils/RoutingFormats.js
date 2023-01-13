export function slugConverter(name) {
    return name.toLowerCase().split(' ').join('_');
}

export function nameConverter(name) {
    return name.toLowerCase().split('_').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function capitalizeConverter(name) {
    return name.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
