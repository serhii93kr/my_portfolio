import { ref, onMounted, onUnmounted } from 'vue';

export function useMq() {
    const width = ref(typeof window !== 'undefined' ? window.innerWidth : 0);

    const breakpoints = {
        mobile: 768,
        tablet: 1024,
        desktop: 1280,
        widescreen: 1920
    };

    const updateWidth = () => {
        width.value = window.innerWidth;
    };

    onMounted(() => {
        window.addEventListener('resize', updateWidth);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateWidth);
    });

    return {
        width,
        get mobile() { return width.value < breakpoints.tablet; },
        get tablet() { return width.value >= breakpoints.tablet && width.value < breakpoints.desktop; },
        get lg() { return width.value >= breakpoints.tablet; },
        get xl() { return width.value >= breakpoints.desktop; },
    };
}
