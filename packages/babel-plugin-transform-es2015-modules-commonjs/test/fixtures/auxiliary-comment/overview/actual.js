import "foo";
import "foo-bar";
import "./directory/foo-bar";
import foo from "foo2";
import * as foo2 from "foo3";
import {bar} from "foo4";
import {foo as bar2} from "foo5";

export {test};
export var test = 5;

bar(foo, bar2);

/* my comment */
bar2;
foo;
