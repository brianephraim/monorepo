function priorityDictIntoSortedArray(dict, propertName) {
  return Object.keys(dict).reduce((accum, priority) => {
    accum.push({
      [propertName]: dict[priority],
      priority,
    });
    return accum;
  }, []).sort((a, b) => {
    return a.priority - b.priority;
  });
}

export default priorityDictIntoSortedArray;
