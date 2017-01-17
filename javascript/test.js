var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
var list2 = {value: "foo", next: {value: "bar", next: null}};

Test.assertSimilar(listToArray(list1), [1, 2, 3]);
Test.assertSimilar(listToArray(list2), ["foo", "bar"]);