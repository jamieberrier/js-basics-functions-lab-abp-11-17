// Code your solution in this file!
function distanceFromHqInBlocks (blockNumber){
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet (blockNumber) {
  let blocks = distanceFromHqInBlocks(blockNumber);

  return blocks * 264;
}

function distanceTravelledInFeet (startBlock, endBlock){
  let blocksTravelled = endBlock - startBlock;
  return blocksTravelled * 264;
}
