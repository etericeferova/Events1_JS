// 1

// class Circle {
//   constructor(radius) {
//       this._radius = radius;
//   }

//   get radius() {
//       return this._radius;
//   }

//   set radius(value) {
//       if (value > 0) {
//           this._radius = value;
//       } else {
//           console.log("The radius has to be a positive number.");
//       }
//   }

//   get diameter() {
//       return 2 * this._radius;
//   }

//   area() {
//       return Math.PI * this._radius * this._radius;
//   }

//   circumference() {
//       return 2 * Math.PI * this._radius;
//   }
// }

// const circle = new Circle(5);

// console.log(`Radius of the circle: ${circle.radius}`);
// console.log(`Diameter of the circle: ${circle.diameter}`);

// circle.radius = 3;

// console.log(`Updated radius of the circle: ${circle.radius}`);
// console.log(`Updated diameter of the circle: ${circle.diameter}`);

// console.log(`Area of the circle: ${circle.area()}`);
// console.log(`Circumference of the circle: ${circle.circumference()}`);

// 2

// class HtmlElement {
//   constructor(tagName, selfClosing = false, content = "") {
//     this.tagName = tagName;
//     this.selfClosing = selfClosing;
//     this.content = content;
//     this.attributes = {};
//     this.styles = {};
//     this.children = [];
//   }

//   setAttribute(attribute, value) {
//     this.attributes[attribute] = value;
//   }

//   setStyle(style, value) {
//     this.styles[style] = value;
//   }

//   appendChild(childElement) {
//     if (childElement instanceof HtmlElement) {
//       this.children.push(childElement);
//     } else {
//       console.log("You can only append HtmlElement instances.");
//     }
//   }

//   getHtml() {
//     let html = `<${this.tagName}`;

//     for (let [attribute, value] of Object.entries(this.attributes)) {
//       html += ` ${attribute}="${value}"`;
//     }

//     let stylesString = Object.entries(this.styles)
//       .map(([key, value]) => `${key}: ${value}`)
//       .join("; ");
//     if (stylesString) {
//       html += ` style="${stylesString}"`;
//     }

//     if (this.selfClosing) {
//       html += " />";
//     } else {
//       html += ">";

//       html += this.content;

//       for (let child of this.children) {
//         html += child.getHtml();
//       }

//       html += `</${this.tagName}>`;
//     }

//     return html;
//   }
// }

// let div = new HtmlElement("div");
// div.setAttribute("id", "main");
// div.setStyle("background-color", "blue");

// let p = new HtmlElement("p", false, "This is a paragraph.");
// p.setStyle("color", "red");

// div.appendChild(p);

// let img = new HtmlElement("img", true);
// img.setAttribute("src", "image.jpg");
// img.setAttribute("alt", "Image");

// div.appendChild(img);

// console.log(div.getHtml());

// 3

class CssClass {
  constructor(className) {
    this.className = className;
    this.styles = {};
  }

  setStyle(property, value) {
    this.styles[property] = value;
  }

  removeStyle(property) {
    delete this.styles[property];
  }

  getCss() {
    let cssCode = `.${this.className} {`;

    for (let [property, value] of Object.entries(this.styles)) {
      cssCode += `\n  ${property}: ${value};`;
    }

    cssCode += "\n}";

    return cssCode;
  }
}

let myClass = new CssClass("myClass");

myClass.setStyle("background-color", "red");
myClass.setStyle("color", "black");
myClass.setStyle("font-size", "20px");

console.log(myClass.getCss());

myClass.removeStyle("color");

console.log(myClass.getCss());
