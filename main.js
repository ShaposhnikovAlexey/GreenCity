// let tree = 0;

// document.getElementById('counter')[0].textContent = "Вы посадили " + tree + " деревьев !"

// document.querySelector('button').onclick = function() {
//     tree = tree + 1 //++tree
//     alert(tree)
// }

var tree = 0;

function updateVariable() {
  document.getElementById('tree-counterID').textContent = "Вы посадили: " + tree + " деревьев 🌳!";
}

document.querySelector('button').addEventListener('click', function() {
  tree++;
  updateVariable();
});