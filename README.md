# ascii-docs-ui

## Type checking

You may notice that the typechecking scripts are defined per each tsconfig file.
This is because type checking, i.e., running typescript compiler with `--noEmit`
flag, does not traverse the tsconfig project reference structure. We cannot just
run `--build` to type check, since there is nothing to emit for `.vue` files.

