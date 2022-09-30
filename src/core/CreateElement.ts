export function createElement(
  tagName: keyof HTMLElementTagNameMap,
  attributes: Object,
  ...children: Array<string | HTMLElement>
) {
  const element = document.createElement(tagName);
  Object.keys(attributes).forEach((key: string) => {
    if (typeof attributes[key] === 'function') {
      element.addEventListener(key.toLowerCase().slice(2), attributes[key]);
    } else element.setAttribute(key, attributes[key]);
  });
  Array.from(children).forEach((child: HTMLElement | string) =>
    typeof child === 'string'
      ? (element.innerHTML = child)
      : element.appendChild(child),
  );
  return element;
}

export function createFragment(...children: Array<HTMLElement>) {
  const fragment = document.createDocumentFragment();
  Array.from(children).forEach((child: HTMLElement) =>
    fragment.appendChild(child),
  );
  return fragment;
}
