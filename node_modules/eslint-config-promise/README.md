# eslint-config-promise

> 0: tip nothing
> 1: warn
> 2: error

| level | description | eslint |
|-------|-------------|--------|
| 0 | 一行代码长度不超过 80 | [enforce a maximum line length (max-len)](http://eslint.org/docs/rules/max-len) |
| 0 | 重叠作用域内变量同名 | [disallow variable declarations from shadowing variables declared in the outer scope (no-shadow)](http://eslint.org/docs/rules/no-shadow) |
| 0 | 末尾分号必写 | [require or disallow semicolons instead of ASI (semi)](http://eslint.org/docs/rules/semi) |
| 0 | 不对函数参数直接做修改操作 | [Disallow Reassignment of Function Parameters (no-param-reassign)](http://eslint.org/docs/rules/no-param-reassign) |
| 2 | 最后一行代码后必须要有空行 | [require or disallow newline at the end of files (eol-last)](http://eslint.org/docs/rules/eol-last) |
| 2 | 对象最后属性或数组最后元素后不加逗号 | [require or disallow trailing commas (comma-dangle)](http://eslint.org/docs/rules/comma-dangle) |
| 2 | 不严格要求驼峰风格 | [Require Camelcase (camelcase)](http://eslint.org/docs/rules/camelcase) |
| 2 | 函数 `()` 内需要空格相邻符号可以省略 | [Disallow or enforce spaces inside of parentheses (space-in-parens)](http://eslint.org/docs/rules/space-in-parens) |
| 2 | 对象属性采用简略风格 | [Require Object Literal Shorthand Syntax (object-shorthand)](http://eslint.org/docs/rules/object-shorthand) |
| 2 | `{}` 内需要空格相邻符号可以省略 | [enforce consistent spacing inside braces (object-curly-spacing)](http://eslint.org/docs/rules/object-curly-spacing) |
| 2 | `[]` 内需要空格相邻符号或单元素可以省略 | [Disallow or enforce spaces inside of brackets (array-bracket-spacing)](http://eslint.org/docs/rules/array-bracket-spacing) |
| 2 | 回调函数用箭头函数 | [Suggest using arrow functions as callbacks. (prefer-arrow-callback)](http://eslint.org/docs/rules/prefer-arrow-callback) |
| 0 | 箭头函数风格不强制 | [Require parens in arrow function arguments (arrow-parens)](http://eslint.org/docs/rules/arrow-parens) |
| 0 | 箭头函数风格不强制 | [Require braces in arrow function body (arrow-body-style)](http://eslint.org/docs/rules/arrow-body-style) |
| 2 | 函数 `()` 前不加空格 | [Require or disallow a space before function parenthesis (space-before-function-paren)](http://eslint.org/docs/rules/space-before-function-paren) |
| 2 | 函数 `return` 不强制指定值 | [require return statements to either always or never specify values (consistent-return)](http://eslint.org/docs/rules/consistent-return) |
| 0 | 允许运算符 `++` `--` | [disallow the unary operators ++ and -- (no-plusplus)](http://eslint.org/docs/rules/no-plusplus) |
| 2 | 忽略 `_` 开头结尾的参数/caughtErrors | | [Disallow Unused Variables (no-unused-vars)](http://eslint.org/docs/rules/no-unused-vars) |
| 0 | 变量或属性中允许 `_` | [disallow dangling underscores in identifiers (no-underscore-dangle)](http://eslint.org/docs/rules/no-underscore-dangle) |
| 0 | 代码块中首尾不强制空行 | [require or disallow padding within blocks (padded-blocks)](http://eslint.org/docs/rules/padded-blocks) |
| 1 | 多种优先级的运算符混合加括号，同级可不加 | [Disallow mixes of different operators (no-mixed-operators)](http://eslint.org/docs/rules/no-mixed-operators) |
| 0 | 三元运算可以嵌套使用 | [disallow nested ternary expressions (no-nested-ternary)](http://eslint.org/docs/rules/no-nested-ternary) |
| 0 | 允许位运算符 | [disallow bitwise operators (no-bitwise)](http://eslint.org/docs/rules/no-bitwise) |
| 1 | 异步函数中必须有 `yield` | [Disallow generator functions that do not have yield (require-yield)](http://eslint.org/docs/rules/require-yield) |
| 0 | 类函数中可以不使用 `this` | [Enforce that class methods utilize this (class-methods-use-this)](http://eslint.org/docs/rules/class-methods-use-this) |
| 2 | 允许无返回表达式 | [Disallow Unused Expressions (no-unused-expressions)](http://eslint.org/docs/rules/no-unused-expressions) |
| 0 | 引入文件不强制加后缀名 | [eslint-plugin-import/extensions](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)|
| 0 | `import` 后不强制加空行 | [eslint-plugin-import/newline-after-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md) |
| 0 | 静态标签可以添加交互事件 | [eslint-plugin-jsx-a11y/no-static-element-interactions](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md) |
| 0 | 第一个属性不强制换行 | [eslint-plugin-react/jsx-first-prop-new-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md) |
| 0 | 单文件可以写多个组件 | [eslint-plugin-react/no-multi-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md) |
| 1 | `jsx` `js` 文件中都可以写 `jsx` 语法 |[eslint-plugin-react/jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)|
| 0 | 组件可以不带 `state` | [eslint-plugin-react/prefer-stateless-function](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md) |
| 0 | 不强制写 `propTypes` | [eslint-plugin-react/prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md) |
| 1 | vdom 关闭跟在属性后 | [eslint-plugin-react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md) |
| 1 | 组件函数排序 "static-methods" "lifecycle" "/\^(handle\|on).+$/" "everything-else" "rendering" | [eslint-plugin-react/sort-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md) |


