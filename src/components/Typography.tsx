/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */

interface IComponent {
  children: React.ReactNode;
  href?: string;
}
export function Bold({ children }: IComponent) {
  return <strong className="font-bold">{children}</strong>;
}
export function Italic({ children }: IComponent) {
  return <em className="italic">{children}</em>;
}
export function Underline({ children }: IComponent) {
  return <u className="underline">{children}</u>;
}
export function A({ children, href }: IComponent) {
  return (
    <a
      href={href}
      className="text-blue-600 underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline"
    >
      {children}
    </a>
  );
}
export function Paragraph({ children }: IComponent) {
  return <p className="mb-8">{children}</p>;
}
export function H1({ children }: IComponent) {
  return <h1 className="text-5xl font-extrabold mb-10">{children}</h1>;
}
export function H2({ children }: IComponent) {
  return <h2 className="text-4xl font-bold mb-8 dark:text-gray-100">{children}</h2>;
}
export function H3({ children }: IComponent) {
  return <h3 className="text-3xl font-bold mb-6">{children}</h3>;
}
export function H4({ children }: IComponent) {
  return <h4 className="text-2xl font-bold mb-4">{children}</h4>;
}
export function H5({ children }: IComponent) {
  return <h5 className="text-xl font-bold mb-3">{children}</h5>;
}
export function H6({ children }: IComponent) {
  return <h6 className="text-lg font-bold mb-2">{children}</h6>;
}
export function UL({ children }: IComponent) {
  return <ul className="list-disc list-inside">{children}</ul>;
}
export function OL({ children }: IComponent) {
  return <ol className="list-decimal list-inside">{children}</ol>;
}
export function LI({ children }: IComponent) {
  return <li className="mb-2">{children}</li>;
}
export function HR() {
  return <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />;
}
export function Quote({ children }: IComponent) {
  return <blockquote className="text-gray-500 dark:text-gray-400 italic">{children}</blockquote>;
}
export function Code({ children }: IComponent) {
  return <code className="bg-gray-100 dark:bg-gray-800 rounded-md px-2 py-1">{children}</code>;
}
export function InlineCode({ children }: IComponent) {
  return <code className="bg-gray-100 dark:bg-gray-800 rounded-md px-2 py-1">{children}</code>;
}
export function Table({ children }: IComponent) {
  return <table className="border-collapse">{children}</table>;
}
export function TableHead({ children }: IComponent) {
  return <thead>{children}</thead>;
}
export function TableBody({ children }: IComponent) {
  return <tbody>{children}</tbody>;
}
export function TableRow({ children }: IComponent) {
  return <tr>{children}</tr>;
}
