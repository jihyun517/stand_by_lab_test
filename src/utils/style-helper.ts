type ClassName = string | false | undefined | null;

const cx = (...classNames: ClassName[]): string => Array.from(new Set(classNames.filter(Boolean).join(' ').split(/\s+/))).join(' ');

export default cx;
