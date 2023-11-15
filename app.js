// function test() {
//   fetch("data.json")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

// test();

const test = async () => {
  const info = await fetch("data.json");

  const infoResults = await info.json();
  const scoreHolder = [];

  infoResults.forEach((item) => {
    // console.log(item.score);

    scoreHolder.push(item.score.toString());
  });

  console.log(scoreHolder);
  updateComponents(scoreHolder);
};

const updateComponents = (arr) => {
  const reaction = document.querySelector(".reaction .yourScore");
  const memory = document.querySelector(".memory .yourScore");
  const verbal = document.querySelector(".verbal .yourScore");
  const visual = document.querySelector(".visual .yourScore");

  reaction.textContent = arr[0];
  memory.textContent = arr[1];
  verbal.textContent = arr[2];
  visual.textContent = arr[3];
};

// updateComponents();
test();
