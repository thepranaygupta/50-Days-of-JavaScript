let uniqueInOrder = (iterable) => {
	//your code here - remember iterable can be a string or an array
	const type = typeof iterable
	  if(type == 'string') iterable = iterable.split('')
	  let stack = [];
	  stack.push(iterable[0])
	  for(let i=0;i<iterable.length;i++){
		  if(stack[stack.length - 1] === iterable[i]) continue
		  stack.push(iterable[i])
	  }
	  return stack;
  };