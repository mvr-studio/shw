interface SlideSwitcherProps {
    slides: string[];
    handleTabChange: (name: string) => void;
}
declare const SlideSwitcher: ({ slides, handleTabChange }: SlideSwitcherProps) => JSX.Element;
export default SlideSwitcher;
