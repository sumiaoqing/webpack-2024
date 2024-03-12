# Babel的变更
---
##### babel的编译流程
1.parsing（解析）：@babel/parser 负责将es6代码进行语法分析和词法分析后转换成抽象语法树AST
2.transforming（转化）：plugin插件使用 @babel/traverse 来遍历 AST 并进行节点的操作，用它提供的 API 来编写对 AST 的遍历和修改逻辑，由此来将一种AST转换为另一种AST
3.generating（生成）：@babel/generator负责通过AST树生成ES5代码