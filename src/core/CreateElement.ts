function createElement(
  tagName: keyof HTMLElementTagNameMap,
  attributes: Object,
  ...childrens: Array<string | HTMLElement>
) {
  const element = document.createElement(tagName);
  Object.keys(attributes).forEach((key: string) => {
    if (typeof attributes[key] === 'function') {
      element.addEventListener(key.toLowerCase().slice(2), attributes[key]);
    } else element.setAttribute(key, attributes[key]);
  });
  Array.from(childrens).forEach((children: HTMLElement | string) =>
    typeof children === 'string'
      ? (element.innerHTML += children)
      : element.appendChild(children),
  );
  return element;
}

export default createElement;
