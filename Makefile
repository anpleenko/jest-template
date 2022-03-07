drop:
	git checkout --orphan newBranch
	git add -A
	git commit -m "Initial commit"
	git branch -D main
	git branch -m main
	git push -f origin main
	git gc --aggressive --prune=all
