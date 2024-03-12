#### 深入理解 BFC 的概念以及创建方式  
1.全称叫“Block Formatting Context”，中文叫“块级格式化上下文”  
2.BFC 是一种特殊的上下文环境。当一个元素创建 BFC 后，就具备了一个完全独立的环境。  
3.BFC 会影响当前元素和内部元素的布局表现，但不会影响跟外部元素之间的布局关系  
  
##### BFC使用场景  
- 清除浮动（浮动元素的高度会被父级元素忽略,比如A元素height:50px,B是（浮动元素：设置float）height:100px,父级元素只会被撑开到50px）
- 避免外边距合并（1.子元素之间外边距合并 2.父级元素和子元素外边距合并->父级元素塌陷）
  
##### 如何创建 BFC？  
- overflow 属性 当一个元素的 overflow 属性值不是 visible、clip 时，就会创建 BFC。  
- 绝对定位元素 position 属性值是 absolute 或 fixed。  
- display 属性 当一个元素的 display 属性设置成 inline-block 或 table-cell 时，就会创建 BFC。


