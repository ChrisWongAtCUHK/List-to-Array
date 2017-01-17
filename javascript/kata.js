function listToArray(list) {
  if(!list) 
    return [];
  else if(list.next == null)
    return [list.value];
  else
    return [list.value].concat(listToArray(list.next));
}