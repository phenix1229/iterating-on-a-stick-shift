const makeDino = function(species, period, carnivore, extinct = false) {
  return {
    species,
    period,
    carnivore,
    extinct,
  }
}

const makeSingular = function(dino) {
  const newDino = {
    species: dino.species.slice(0, dino.species.length -2),
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  return dino.species.endsWith('us') ? newDino : dino;
}

const truncateSpecies = function(dino) {
  const newDino = {
    species: `${dino.species.slice(0, 7)}...`,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  return dino.species.length <= 10 ? dino : newDino;
}

const makeExtinct = function(dino) {
  const newDino = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: true,
  }
  return newDino;
}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}