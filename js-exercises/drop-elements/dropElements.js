function dropElements(elements, predicate) {
  // for (let i = 0; i < elements.length; i += 1) {
  //   if (!predicate(elements[i])) {
  //     elements.splice(i, 1);
  //   }
  // }
  // console.log(elements);
  // return elements;
  return elements.filter(predicate);
}

export { dropElements };
