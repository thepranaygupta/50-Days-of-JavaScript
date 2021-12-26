function factorial(n) {
	// write your code here
    if(n == 0)
        return 1;
	return n*factorial(n-1);
}
