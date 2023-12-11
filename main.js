
var tree = 0;

function updateVariable() {
  document.getElementById('tree-counterID').textContent = "Вы посадили: " + tree + " деревьев 🌳!";
}

document.querySelector('button').addEventListener('click', function() {
  tree++;
  updateVariable();
});