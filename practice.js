const dogRecords = [
  { id: 1, breed: "German Shepherd", weight: 71, lifeSpan: 13 },
  { id: 2, breed: "Pomeranian", weight: 5, lifeSpan: 16 },
  { id: 3, breed: "Labrador Retriever", weight: 79, lifeSpan: 12 },
  { id: 4, breed: "Siberian Husky", weight: 60, lifeSpan: 15 },
  { id: 5, breed: "Bulldog", weight: 40, lifeSpan: 8 },
];

function getAllDogsById(dogId) {
  return dogRecords.find(function matchId(record) {
    return record.id == dogId;
  });
}

const myDog = getAllDogsById(3);

console.log(myDog);
